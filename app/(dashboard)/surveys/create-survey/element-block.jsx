'use client';
import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { MoveUp, MoveDown, Copy, Trash2, MoreVertical } from 'lucide-react';

import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

import { cn } from '@/lib/utils';

const ElementFooter = ({
  onChange,
  element,
  elementIndex,
  swapElement,
  duplicateElement,
  deleteElement,
}) => {
  const [minChecked, setMinChecked] = useState(false);
  const [maxChecked, setMaxChecked] = useState(false);
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [minInputFocused, setMinInputFocused] = useState(false);
  const [maxInputFocused, setMaxInputFocused] = useState(false);
  const minInputRef = useRef(null);
  const maxInputRef = useRef(null);

  useEffect(() => {
    if (minChecked) {
      minInputRef.current.focus();
    }
  }, [minChecked]);

  useEffect(() => {
    if (maxChecked) {
      maxInputRef.current.focus();
    }
  }, [maxChecked]);

  useEffect(() => {
    const inputElement = minInputRef.current;

    const handleBlurEvent = () => {
      setMinInputFocused(false);
    };

    inputElement?.addEventListener('blur', handleBlurEvent);

    return () => {
      inputElement?.removeEventListener('blur', handleBlurEvent);
    };
  }, []);

  useEffect(() => {
    const inputElement = maxInputRef.current;

    const handleMinBlurEvent = () => {
      setMaxInputFocused(false);
    };

    inputElement?.addEventListener('blur', handleMinBlurEvent);

    return () => {
      inputElement?.removeEventListener('blur', handleMinBlurEvent);
    };
  }, []);

  const handleMinAndMaxChange = (e, type) => {
    if (type === 'min') {
      setMinValue(e.target.value);
      onChange(e, 'min');
    } else {
      setMaxValue(e.target.value);
      onChange(e, 'max');
    }
  };

  const handleFocus = () => {
    setMinInputFocused(true);
  };

  const handleMaxInputFocus = () => {
    setMaxInputFocused(true);
  };
  return (
    <div className="absolute bottom-3 flex items-center justify-between w-11/12">
      <div className="flex items-center gap-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="required"
            className="data-[state=checked]:bg-[#4D81E7]"
            onCheckedChange={(e) => onChange(e, 'required')}
          />
          <Label htmlFor="required" className="text-[13px] text-[#444]">
            Mark as required
          </Label>
        </div>
        {/* MIN AND MAX BLOCK */}
        {element.type === 3 && (
          <div className="flex items-center gap-1">
            <div
              className={cn(
                `flex items-center border border-transparent  py-1  rounded-md space-x-2 ${
                  maxInputFocused && 'border-[#9299A5] px-0.5'
                }`
              )}
            >
              <Checkbox
                id="max"
                onCheckedChange={() => setMaxChecked((prevState) => !prevState)}
              />
              <Label htmlFor="max" className="text-[13px] text-[#444]">
                Max
              </Label>
              <Input
                ref={maxInputRef}
                onFocus={handleMaxInputFocus}
                type="number"
                value={maxValue}
                max={2}
                className="h-4 w-6 px-0 border-none bg-transparent"
                onChange={(e) => handleMinAndMaxChange(e, 'max')}
              />
            </div>
            <div
              className={cn(
                `flex items-center border border-transparent  py-1  rounded-md space-x-2 ${
                  minInputFocused && 'border-[#9299A5] px-0.5'
                }`
              )}
            >
              <Checkbox
                id="min"
                onCheckedChange={() => setMinChecked((prevState) => !prevState)}
              />
              <Label htmlFor="min" className="text-[13px] text-[#444]">
                Min
              </Label>
              <Input
                ref={minInputRef}
                onFocus={handleFocus}
                type="number"
                value={minValue}
                max={2}
                className="h-4 w-6 px-0 border-none bg-transparent"
                onChange={(e) => handleMinAndMaxChange(e, 'min')}
              />
            </div>
          </div>
        )}
      </div>

      <div className="actions flex gap-4">
        <MoveUp
          color="#666666"
          size={16}
          onClick={() => swapElement(elementIndex, 'up')}
        />
        <MoveDown
          color="#666666"
          size={16}
          onClick={() => swapElement(elementIndex, 'down')}
        />
        <Copy color="#666666" size={16} onClick={duplicateElement} />
        <Trash2 color="#666666" size={16} onClick={deleteElement} />
        <MoreVertical color="#666666" size={16} />
      </div>
    </div>
  );
};

const ElementBlock = ({
  activeEl,
  id,
  element: Comp,
  selectedElements,
  setActiveEl,
  setSelectedElements,
  elementIndex,
}) => {
  const isFormActive = activeEl.id === id;

  const handleChange = (e, fieldKey) => {
    const value = fieldKey !== 'required' ? e.target.value : e;
    // update specific key
    const newItem = { ...activeEl, [fieldKey]: value };
    // create a copy of the state
    let selectedElementsCopy = [...selectedElements];
    // update the element by id
    selectedElementsCopy[elementIndex] = newItem;
    // update the active Element
    setActiveEl(newItem);
    // update the lists of element
    setSelectedElements(selectedElementsCopy);
  };

  const swapWithNeighbor = (currentIndex, direction) => {
    const array = [...selectedElements];

    if (currentIndex < 0 || currentIndex >= array.length) {
      console.error('Invalid index');
      return;
    }

    const neighborIndex =
      direction === 'up' ? currentIndex - 1 : currentIndex + 1;

    if (neighborIndex < 0 || neighborIndex >= array.length) {
      console.error('Cannot swap with neighbor - neighbor index out of bounds');
      return;
    }

    const newArray = [...array];

    [newArray[currentIndex], newArray[neighborIndex]] = [
      newArray[neighborIndex],
      newArray[currentIndex],
    ];
    setSelectedElements(newArray);
  };

  const duplicateElement = () => {
    const { id, ...rest } = activeEl;
    const newSelectedEl = {
      id: `element-${uuidv4()}`,
      ...rest,
    };
    setActiveEl(newSelectedEl);
    setSelectedElements((prevSelectedElements) => [
      ...prevSelectedElements,
      newSelectedEl,
    ]);
  };

  const deleteElement = () => {
    const filteredSelectedElements = selectedElements.filter(
      (el) => el.id !== id
    );
    setSelectedElements(filteredSelectedElements);
  };
  return (
    <ul>
      <li
        className={cn(
          `relative w-full ${
            isFormActive
              ? 'bg-[#F4F7F9] h-[260px] border-t-2 border-[#28668B] rounded'
              : 'pb-2'
          } `
        )}
      >
        <div
          className={cn(
            `flex items-center w-full p-2 bg-white ${isFormActive && 'mb-2'}`
          )}
        >
          <span>{elementIndex + 1}.</span>
          <Input
            className="border-none h-0"
            type="text"
            onChange={(e) => handleChange(e, 'question')}
            disabled={!isFormActive}
            value={selectedElements[elementIndex].question}
            defaultValue="Question"
          />
        </div>
        {!isFormActive && <Separator className="bg-[#DDD] pb-0 mb-2" />}
        <div className=" px-6">
          <Comp
            isFormActive={isFormActive}
            selectedElements={selectedElements}
            elementIndex={elementIndex}
            setSelectedElements={setSelectedElements}
          />
          {isFormActive && (
            <ElementFooter
              onChange={handleChange}
              element={activeEl}
              elementIndex={elementIndex}
              swapElement={swapWithNeighbor}
              duplicateElement={duplicateElement}
              deleteElement={deleteElement}
            />
          )}
        </div>
      </li>
    </ul>
  );
};

export { ElementBlock };

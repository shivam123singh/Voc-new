import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Custom hook for handling checkbox and radio group logic
function useOptionGroup(
  initialOptions = [],
  selectedElements,
  elementIndex,
  setSelectedElements
) {
  const [options, setOptions] = useState(initialOptions);
  const [firstRender, setFirstRender] = useState(true);

  const updateSelectedElements = (elements) => {
    let selectedElementsCopy = [...selectedElements];
    selectedElementsCopy[elementIndex].options = elements;
    setSelectedElements(selectedElementsCopy);
  };

  const handleOptionAdd = () => {
    const newOption = {
      id: `option-${uuidv4()}`,
      label: 'Option',
    };

    setOptions((prev) => [...prev, newOption]);
  };

  const handleOptionChange = (e, index) => {
    const optionsCopy = [...options];
    optionsCopy[index].label = e.target.value;
    setOptions(optionsCopy);
  };

  const handleOptionDelete = (id) => {
    const filteredOptions = options.filter((option) => option.id !== id);
    setOptions(filteredOptions);
  };
  useEffect(() => {
    if (firstRender) {
      handleOptionAdd();
      setFirstRender(false);
    }
  }, [firstRender]);

  useEffect(() => {
    updateSelectedElements(options);
  }, [options]);

  return {
    options,
    handleOptionChange,
    handleOptionAdd,
    handleOptionDelete,
  };
}

export default useOptionGroup;

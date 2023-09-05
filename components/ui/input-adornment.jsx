import { cn } from '@/lib/utils';

const positionConfig = {
  start: 'left-6',
  end: 'right-6',
};

const InputAdornment = ({ adornment, pointerEvents = 'auto', position, ...props }) => (
  <div
    className={cn(
      `absolute ${positionConfig[position]} ${
        pointerEvents === 'auto' ? 'pointer-events-auto' : 'pointer-events-none'
      } z-10 select-none`
    )}
    {...props}
  >
    {adornment}
  </div>
);

export default InputAdornment;

import { FC, ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  active?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, className, active, ...props }) => {
  return (
    <button
      className={`h-10 min-w-[40px] rounded text-center ${
        active ? 'bg-gradient text-white-100' : 'bg-white-100 text-blue-100 fill-blue-100 '
      } focus:outline-none hover:bg-gradient hover:text-white-100 active:bg-gradient-2 disabled:bg-[#F2F4F9] disabled:bg-none disabled:text-[#BCC3D7] disabled:fill-[#BCC3D7] ${
        className || ''
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

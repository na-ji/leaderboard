interface ChevronIconProps {
  reversed?: boolean;
  className?: string;
}

export const ChevronIcon = ({ reversed, className }: ChevronIconProps): JSX.Element => {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 fill-grey-70 ${reversed ? 'rotate-180' : 'rotate-0'} ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.64131 0.891554C0.397233 1.13563 0.397232 1.53136 0.64131 1.77544L3.97464 5.10877C4.21872 5.35285 4.61445 5.35285 4.85853 5.10877L8.19186 1.77544C8.43594 1.53136 8.43594 1.13563 8.19186 0.891555C7.94778 0.647477 7.55205 0.647477 7.30798 0.891555L4.41659 3.78295L1.52519 0.891554C1.28112 0.647477 0.885388 0.647477 0.64131 0.891554Z"
      />
    </svg>
  );
};

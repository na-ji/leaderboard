export const ProgressBar = ({ value }: { value: number }): JSX.Element => {
  return (
    <div className="flex rounded-3xl h-1.5 bg-blue-20">
      <div className={`rounded-3xl h-1.5 bg-gradient`} style={{ width: `${value}%` }}></div>
    </div>
  );
};

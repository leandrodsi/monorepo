export type SubtitleProps = {
  label: string;
};

export const Subtitle = ({ label }: SubtitleProps) => {
  return <h2 className="text-xl text-rangoonGreen-300">{label}</h2>;
};

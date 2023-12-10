type TitleProps = {
  label: string;
};

export const Title = ({ label }: TitleProps) => {
  return <h2 className="text-3xl font-bold text-rangoonGreen-600">{label}</h2>;
};

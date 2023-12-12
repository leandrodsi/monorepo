import { LucideIcon } from 'lucide-react';

type CardProps = {
  id: string;
  value: number;
  label: string;
  icon: LucideIcon;
  color: string;
};

// eslint-disable-next-line no-unused-vars
const possible = [
  'gradient-fuchsia',
  'gradient-violet',
  'gradient-orange',
  'gradient-green',
  'text-fuchsia-400',
  'text-violet-400',
  'text-orange-400',
  'text-green-400'
];

export const SummaryCard = ({
  data: { value, label, icon: Icon, color }
}: {
  data: CardProps;
}) => {
  return (
    <div
      className={`relative w-[150px] h-[190px] px-4 py-5 rounded-xl gradient-${color} overflow-hidden`}
    >
      <p className="text-white text-3xl font-bold mb-4">{value}</p>
      <p className="text-white text-xl">{label}</p>
      <Icon
        size={96}
        className={`absolute text-${color}-400 right-[-20px] bottom-[-15px] rotate-[-15deg]`}
      />
    </div>
  );
};

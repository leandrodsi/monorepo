import { InputSearch } from '.';
import { Subtitle } from './typography/Subtitle';
import { Title } from './typography/Title';

type PageHeaderProps = {
  title?: string;
  subtitle?: string;
};

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div>
      <InputSearch className="mb-8" />
      <div className="space-y-2">
        {title ? <Title label={title} /> : null}
        {subtitle ? <Subtitle label={subtitle} /> : null}
      </div>
    </div>
  );
};

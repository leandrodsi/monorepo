import { InputSearch } from '.';
import { Subtitle, SubtitleProps } from './typography/Subtitle';
import { Title, TitleProps } from './typography/Title';

type PageHeaderProps = {
  title?: TitleProps;
  subtitle?: SubtitleProps;
};

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div>
      <InputSearch className="mb-8" />
      <div className="space-y-2">
        {title ? <Title {...title} /> : null}
        {subtitle ? <Subtitle {...subtitle} /> : null}
      </div>
    </div>
  );
};

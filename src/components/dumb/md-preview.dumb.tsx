import { FC, SyntheticEvent, useState } from 'react';
import { Input, InputProps } from 'rsuite';
import ButtonGroupComponent from './button-group.dumb';
import MdComponent from './md.dumb';

export interface IMdWithPreviewProps extends InputProps {
  onChange?: (value: string, event: SyntheticEvent) => void;
  value?: string;
}

const MdWithPreviewComponent: FC<IMdWithPreviewProps> = ({
  value = '',
  className,
  ...props
}) => {
  const [isPreview, setIsPreview] = useState(false);

  return (
    <div className={className}>
      <ButtonGroupComponent
        style={{ marginBottom: 10 }}
        data={[
          {
            icon: 'code',
            value: 'code',
          },
          {
            icon: 'eye',
            value: 'preview',
          },
        ]}
        value={isPreview ? 'preview' : 'code'}
        onChange={(v) => setIsPreview(v === 'preview')}
      />
      {isPreview ? (
        <MdComponent value={value} />
      ) : (
        <Input
          {...props}
          value={value}
          componentClass="textarea"
          placeholder="Textarea"
        />
      )}
    </div>
  );
};

export default MdWithPreviewComponent;

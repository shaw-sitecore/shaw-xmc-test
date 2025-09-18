import { ComponentProps } from '@sitecore-feaas/clientside/react';
import { File, FileField } from '@sitecore-jss/sitecore-jss-nextjs';

type PDFContainerProps = ComponentProps & {
  fields: {
    file: FileField;
  };
};

export default function PDFContainer(props: PDFContainerProps) {
  return (
    <div>
      <File field={props.fields.file} target="_blank" />
    </div>
  );
}

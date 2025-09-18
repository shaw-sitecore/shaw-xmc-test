import { ComponentProps } from '@sitecore-feaas/clientside/react';
import { File, FileField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  PDF: FileField;
}
type PDFContainerProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export default function PDFContainer(props: PDFContainerProps) {
  return (
    <div>
      <File field={props.fields.PDF} target="_blank">
        <h1>{props.fields.PDF.value.src}</h1>
      </File>
    </div>
  );
}

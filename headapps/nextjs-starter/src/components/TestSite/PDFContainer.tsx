import { ComponentProps } from '@sitecore-feaas/clientside/react';
import { File, FileField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  File: FileField;
}
type PDFContainerProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

export default function PDFContainer(props: PDFContainerProps) {
  return (
    <div>
      <File field={props.fields.File} target="_blank">
        <h1>{props.fields.File.value.title}</h1>
      </File>
    </div>
  );
}

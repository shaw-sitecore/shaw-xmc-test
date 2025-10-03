import { Field, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import React from 'react';

type MyNewsProps = ComponentProps & {
  fields: {
    Title: Field<string>;
  };
};

/** This is a test component */
export default function MyNews(props: MyNewsProps) {
  return (
    <div>
      <h1>{props.fields.Title.value}</h1>
      <Placeholder name="placeholdertest" rendering={props.rendering} />
    </div>
  );
}

import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import React from 'react';

export default function TestComponent(props: ComponentProps) {
  return (
    <div>
      <div className="bannerWrapper1 bannerWrapper2">
        <Placeholder name="placeholdertest" rendering={props.rendering} />
      </div>
    </div>
  );
}

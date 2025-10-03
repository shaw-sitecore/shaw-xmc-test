import React from 'react';
//import necessary types to render fields and define properties of the component
import { Field, RichText, Text, Link, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

//Define fields that our component will get during rendering. In this component we render tree fields: Title, PageLink, Content
type EventAnnouncesProps = {
  fields: { Title: Field<string>; PageLink: LinkField; Content: Field<string> };
};

export const Default = ({ fields }: EventAnnouncesProps): JSX.Element => {
  return (
    <section className="sc-applicationContent component content">
      <div className="col-md-12 sc-applicationContent-main">
        <div>
          <div className="col-md-9">
            <h3>
              Events Announce:&nbsp;
              {/* Render PageLink link field if it is not empty, otherwhise render Title text field.
              If text property of the PageLink field is empty use the Title field value for link text*/}
              {fields?.PageLink?.value?.href ? (
                fields?.PageLink?.value?.text ? (
                  <Link field={fields.PageLink} />
                ) : (
                  <Link field={fields.PageLink}>{fields?.Title?.value}</Link>
                )
              ) : (
                <Text field={fields?.Title} />
              )}
            </h3>
          </div>
          <div className="col-md-9">
            {/* Define editable rich text field to render Content field */}
            <RichText field={fields?.Content} />
          </div>
        </div>
      </div>
    </section>
  );
};

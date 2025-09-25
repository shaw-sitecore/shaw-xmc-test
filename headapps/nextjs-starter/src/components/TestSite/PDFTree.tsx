import { Field, Link } from '@sitecore-jss/sitecore-jss-nextjs';

interface PDFTreeProps {
  fields: {
    data?: {
      datasource?: DownloadLinksData;
    };
  };
}

export interface DownloadLinksData {
  id?: string;
  name?: string;
  Title?: {
    jsonValue: Field<string>;
  };
  ShortDescription?: {
    jsonValue: Field<string>;
  };
  Downloads?: {
    targetItems: DownloadItem[];
  };
}

export interface DownloadItem {
  id: string;
  name: string;
  displayName: string;
  url: {
    path: string;
    url: string;
    hostName: string;
    scheme: string;
    siteName: string;
  };
  Title?: {
    jsonValue: Field<string>;
  };
  Description?: {
    jsonValue: Field<string>;
  };
  Extension?: {
    jsonValue: Field<string>;
  };
  Size?: {
    jsonValue: Field<string>;
  };
  ContentType?: {
    jsonValue: Field<string>;
  };
  Updated?: {
    jsonValue: Field<string>;
  };
}

export default function PDFTree({ fields }: PDFTreeProps) {
  const url = fields.data?.datasource?.Downloads?.targetItems[0].url.url;
  return (
    <Link
      field={{
        value: {
          href: url,
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      }}
    >
      <h1>{url}</h1>
    </Link>
  );
}

import Script from 'next/script';

interface StructuredDataProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
  id?: string;
}

export function StructuredData({ data, id }: StructuredDataProps) {
  return (
    <Script
      id={id || "structured-data"}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

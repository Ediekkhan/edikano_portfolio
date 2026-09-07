import { PortableText, type PortableTextComponents, type PortableTextBlock } from '@portabletext/react';

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="mb-4 mt-10 text-3xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-3 mt-8 text-2xl font-semibold">{children}</h3>,
    normal: ({ children }) => <p className="mb-5 leading-8 text-gray-700">{children}</p>,
    blockquote: ({ children }) => <blockquote className="my-8 border-l-4 border-teal-500 pl-5 text-xl text-gray-700">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="mb-6 ml-5 list-disc space-y-2 text-gray-700">{children}</ul>,
    number: ({ children }) => <ol className="mb-6 ml-5 list-decimal space-y-2 text-gray-700">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === 'string' ? value.href : '';
      const external = href.startsWith('http');
      return <a className="focus-ring rounded text-teal-700 underline" href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{children}</a>;
    },
  },
};

export default function PortableContent({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}

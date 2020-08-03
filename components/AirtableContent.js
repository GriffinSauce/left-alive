import { forwardRef } from 'react';

const ReactMarkdown = require('react-markdown');

export const isEmptyContent = (content) => !content?.replace('\n', '')?.trim();

const AirtableContent = forwardRef(({ content = '', className = '' }, ref) => {
  const formatted = content
    .replace('http:///', '/') // Airtable doesn't keep relative links
    .replace(/\n/gm, '\n\n'); // Airtable doesn't seem to render paragraph breaks right
  return (
    <div ref={ref} className="break">
      <ReactMarkdown
        className={className}
        source={formatted}
        escapeHtml={false}
      />
      <style jsx>{`
        .break {
          word-break: break-word;
        }
      `}</style>
    </div>
  );
});

export default AirtableContent;

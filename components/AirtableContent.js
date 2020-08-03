const ReactMarkdown = require('react-markdown');

export const isEmptyContent = (content) => !content?.replace('\n', '')?.trim();

const AirtableContent = ({ content = '', className = '' }) => {
  const formatted = content
    .replace('http:///', '/') // Airtable doesn't keep relative links
    .replace(/\n/gm, '\n\n'); // Airtable doesn't seem to render paragraph breaks right
  return (
    <div className="break">
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
};

export default AirtableContent;

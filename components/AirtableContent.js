const ReactMarkdown = require('react-markdown');

const AirtableContent = ({ content = '', className = '' }) => {
  const formatted = content
    .replace('http:///', '/') // Airtable doesn't keep relative links
    .replace(/\n/gm, '\n\n'); // Airtable doesn't seem to render paragraph breaks right
  return <ReactMarkdown className={className} source={formatted} escapeHtml />;
};

export default AirtableContent;

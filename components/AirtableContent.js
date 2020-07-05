const linksListRegex = /^  \[(?<id>[0-9])\]: (?<url>.*)/gm;

/**
 * Links are encoded in a list at the end
 */
const getLinks = (content) => {
  const links = {};
  let match;
  while ((match = linksListRegex.exec(content))) {
    const { id, url } = match.groups;
    links[id] = url.replace('http:///', '/'); // Airtable doesn't keep relative links
  }
  return links;
};

const renderLink = ({ text, href }) =>
  `<a target="${
    href.startsWith('http') ? '_blank' : ''
  }" rel="noopener noreferrer" href=${href}>${text}</a>`;

const AirtableContent = ({ content = '' }) => {
  const links = getLinks(content);

  const formatted = content
    .replace(linksListRegex, ``) // Remove links list
    .replace(/\[(.*)\]\[([0-9])\]/gm, (match, text, linkId) =>
      renderLink({ text, href: links[linkId] }),
    ) // Inline links
    .replace(/\*\*(.*)\*\*/g, `<b>$1</b>`); // Bold

  const paragraphs = formatted
    .split('\n')
    .filter(Boolean)
    .map((p) => <p dangerouslySetInnerHTML={{ __html: p }} />);

  return paragraphs;
};

export default AirtableContent;

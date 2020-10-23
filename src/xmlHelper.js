const isParseError = (parsedDocument) => {
  const parser = new DOMParser(),
    errorneousParse = parser.parseFromString('<', 'application/xml'),
    parsererrorNS = errorneousParse.getElementsByTagName("parsererror")[0].namespaceURI;

  if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {
    // In PhantomJS the parseerror element doesn't seem to have a special namespace, so we are just guessing here :(
    return parsedDocument.getElementsByTagName("parsererror").length > 0;
  }

  return parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0;
};

export const xmlFromString = (text) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, "text/xml");

  if (isParseError(xmlDoc)) {
    throw new Error("Incorrect string");
  }

  return xmlDoc;
}
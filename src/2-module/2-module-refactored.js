const between = (str, quotes) => {
  const [firstQuote, secondQuote] = quotes;

  if (!firstQuote || !secondQuote) return "";

  const stringContainsBothQuotes =
    str.includes(firstQuote) && str.includes(secondQuote);

  if (!stringContainsBothQuotes) return "";

  let substring = '';

  const firstQuoteIndex = str.indexOf(firstQuote);
  substring = str.substring(firstQuoteIndex + 1);

  const secondQuoteIndex = substring.indexOf(secondQuote);
  substring = substring.substring(0, secondQuoteIndex);

  return substring;
};

module.exports = { between };

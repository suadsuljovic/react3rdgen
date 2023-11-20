export const formatUrl = (params) => {
  const { url, query, perPage, page, fields } = params;

  let localUrl = url;
  localUrl += "?query=" + query;
  localUrl += "&limit=" + perPage;
  if (page) {
    localUrl += "&page=" + page;
  }
  if (fields) {
    localUrl += "&fields=" + fields;
  }

  return localUrl;
};

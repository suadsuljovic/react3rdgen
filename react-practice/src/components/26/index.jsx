import { useState } from "react";
import Pagination from "./Pagination";

// paginacija postoji samo ako je reusult array veci od nule
// prvo i drugo dugme rade samo ako je broj quotova veci od 1

const Class26 = () => {
  const [data, setData] = useState({});
  const [searchQ, setSearchQ] = useState("");
  const [quotesPerPage, setQuotesPerPage] = useState(20);

  const getQuote = async () => {
    try {
      if (searchQ === "") {
        return;
      }

      let apiURL = "https://api.quotable.io/search/quotes";

      apiURL += "?query=" + searchQ;
      apiURL += "&limit=" + quotesPerPage;

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = async () => {
    try {
      if (data.page === data.totalPages) {
        return;
      }
      if (searchQ === "") {
        return;
      }

      let apiURL = "https://api.quotable.io/search/quotes";

      const toNextPage = data?.page + 1;

      apiURL += "?query=" + searchQ;
      apiURL += "&page=" + toNextPage;
      apiURL += "&limit=" + quotesPerPage;

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const previousPage = async () => {
    try {
      if (data.page === 1) {
        return;
      }
      if (searchQ === "") {
        return;
      }

      let apiURL = "https://api.quotable.io/search/quotes";

      const toNextPage = data?.page - 1;

      apiURL += "?query=" + searchQ;
      apiURL += "&page=" + toNextPage;
      apiURL += "&limit=" + quotesPerPage;

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const navigatePage = async (page) => {
    try {
      if (data.page === page) {
        return;
      }
      if (searchQ === "") {
        return;
      }

      let apiURL = "https://api.quotable.io/search/quotes";

      const toNextPage = page;

      apiURL += "?query=" + searchQ;
      apiURL += "&page=" + toNextPage;
      apiURL += "&limit=" + quotesPerPage;

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <span>Search query</span>
        <input
          value={searchQ}
          style={{ margin: "0 10px" }}
          type="text"
          placeholder="query"
          onChange={(e) => setSearchQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getQuote();
            }
            if (e.key === "Escape") {
              setSearchQ("");
            }
          }}
        />

        <button style={{ margin: "0 10px" }} onClick={getQuote}>
          Get quote
        </button>
      </div>

      <div style={{ marginBottom: 20 }}>
        <span>Quotes per page</span>
        <input
          type="number"
          style={{ margin: "0 10px" }}
          placeholder="quotes per page"
          value={quotesPerPage}
          onChange={(e) => setQuotesPerPage(e.target.value)}
        />
      </div>

      <div>
        {data && data.results?.length === 0 && <p>No quotes found</p>}
        {data?.results?.map((quote) => {
          return (
            <div
              key={quote._id}
              style={{
                border: "1px black solid",
                padding: 10,
                marginBottom: 10,
                borderRadius: 4,
              }}
            >
              <p>{quote.author}</p>
              <p>{quote.content}</p>
            </div>
          );
        })}
        <Pagination
          page={data?.page}
          totalPages={data?.totalPages}
          previousPage={previousPage}
          nextPage={nextPage}
          navigatePage={navigatePage}
        />
      </div>
    </div>
  );
};
export default Class26;

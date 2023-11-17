import { useState } from "react";
import Pagination from "./Pagination";

// paginacija postoji samo ako je reusult array veci od nule
// prvo i drugo dugme rade samo ako je broj quotova veci od 1

const Class26 = () => {
  const [data, setData] = useState({});
  const [searchQ, setSearchQ] = useState("");

  const getQuote = async () => {
    try {
      let apiURL = "https://api.quotable.io/search/quotes";

      apiURL += "?query=" + searchQ;

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

      let apiURL = "https://api.quotable.io/search/quotes";

      const toNextPage = data?.page + 1;

      apiURL += "?query=" + searchQ;
      apiURL += "&page=" + toNextPage;

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

      let apiURL = "https://api.quotable.io/search/quotes";

      const toNextPage = data?.page - 1;

      apiURL += "?query=" + searchQ;
      apiURL += "&page=" + toNextPage;

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

      let apiURL = "https://api.quotable.io/search/quotes";

      const toNextPage = page;

      apiURL += "?query=" + searchQ;
      apiURL += "&page=" + toNextPage;

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        value={searchQ}
        type="text"
        onChange={(e) => setSearchQ(e.target.value)}
      />
      <button onClick={getQuote}>Get quote</button>

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
          previousPage={() => {}}
          nextPage={() => {}}
          navigatePage={() => {}}
        />
      </div>
    </div>
  );
};
export default Class26;

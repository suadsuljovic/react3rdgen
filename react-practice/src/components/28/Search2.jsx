import { useState } from "react";
import Pagination2 from "./Pagination2";
import { getQuote, navigateToPage } from "./api";

const Search2 = () => {
  const [data, setData] = useState({});
  const [searchQ, setSearchQ] = useState("");
  const [quotesPerPage, setQuotesPerPage] = useState(20);

  const getQuoteLocal = async () => {
    try {
      if (searchQ === "") {
        return;
      }

      const responseData = await getQuote(searchQ, quotesPerPage);

      setData(responseData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigatePage = async (page) => {
    try {
      if (data.page === page) {
        return;
      }
      if (page < 1) {
        return;
      }
      if (page > data.totalPages) {
        return;
      }
      if (searchQ === "") {
        return;
      }

      const responseData = await navigateToPage(searchQ, quotesPerPage, page);

      setData(responseData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onKeyDown = (e, resetInput) => {
    if (e.key === "Enter") {
      getQuoteLocal();
    }
    if (e.key === "Escape") {
      if (resetInput) resetInput();
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
          onKeyDown={(e) => onKeyDown(e, () => setSearchQ(""))}
        />

        <button style={{ margin: "0 10px" }} onClick={getQuoteLocal}>
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
          min={0}
          max={150}
          onChange={(e) => {
            if (e.target.value < 0) {
              setQuotesPerPage(0);
              return;
            }
            if (e.target.value > 150) {
              setQuotesPerPage(150);
              return;
            }

            setQuotesPerPage(e.target.value);
          }}
          onKeyDown={onKeyDown}
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
        <Pagination2
          page={data?.page}
          totalPages={data?.totalPages}
          previousPage={() => navigatePage(data.page - 1)}
          nextPage={() => navigatePage(data.page + 1)}
          navigatePage={navigatePage}
        />
      </div>
    </div>
  );
};

export default Search2;

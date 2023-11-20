const Pagination2 = (props) => {
  const { page, totalPages, navigatePage, previousPage, nextPage } = props;

  return (
    <div style={{ display: "flex" }}>
      <button onClick={previousPage}>{"<"}</button>
      {totalPages >= 1 && (
        <button
          style={{
            backgroundColor: page === 1 ? "white" : "buttonface",
          }}
          onClick={() => navigatePage(1)}
        >
          1
        </button>
      )}
      {totalPages >= 2 && page < totalPages && (
        <button
          style={{
            backgroundColor: page > 1 ? "white" : "buttonface",
          }}
          onClick={() => navigatePage(page > 1 ? page : 2)}
        >
          {page > 1 ? page : 2}
        </button>
      )}
      {totalPages >= 3 && (
        <button
          style={{
            backgroundColor: page === totalPages ? "white" : "buttonface",
          }}
          onClick={() => navigatePage(totalPages)}
        >
          {totalPages}
        </button>
      )}
      <button onClick={nextPage}>{">"}</button>
    </div>
  );
};

export default Pagination2;

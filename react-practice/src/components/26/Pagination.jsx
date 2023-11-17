const Pagination = () => {
  return (
    <div style={{ display: "flex" }}>
      <button onClick={previousPage}>{"<"}</button>
      {data?.totalPages >= 1 && (
        <button
          style={{
            backgroundColor: data?.page === 1 ? "white" : "buttonface",
          }}
          onClick={() => navigatePage(1)}
        >
          1
        </button>
      )}
      {data?.totalPages >= 2 && data?.page < data?.totalPages && (
        <button
          style={{
            backgroundColor: data?.page > 1 ? "white" : "buttonface",
          }}
          onClick={() => navigatePage(data?.page > 1 ? data?.page : 2)}
        >
          {data?.page > 1 ? data?.page : 2}
        </button>
      )}
      {data?.totalPages >= 3 && (
        <button
          style={{
            backgroundColor:
              data?.page === data?.totalPages ? "white" : "buttonface",
          }}
          onClick={() => navigatePage(data?.totalPages)}
        >
          {data.totalPages}
        </button>
      )}
      <button onClick={nextPage}>{">"}</button>
    </div>
  );
};

export default Pagination;

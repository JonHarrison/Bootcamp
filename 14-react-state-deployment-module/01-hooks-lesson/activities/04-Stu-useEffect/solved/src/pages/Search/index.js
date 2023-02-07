import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";

const Search = () => {

  const [state, setState] = useState({
    search: "Wikipedia",
    title: "",
    url: "",
    error: ""
  });

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    if (!state.search) {
      return;
    }    

    document.title = "Wikipedia Searcher";

    API.searchTerms(state.search)
      .then((res) => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.info);
        }
        setState({
          title: res.data[1],
          url: res.data[3][0],
          error: ""
        });
      })
      .catch((err) => setState({ ...state, error: err.message }));
  }, []);

  const handleInputChange = (event) => {
    setState({ search: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!state.search) {
      return;
    }
    API.searchTerms(state.search)
      .then((res) => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setState({
          title: res.data[1],
          url: res.data[3][0],
          error: "",
        });
      })
      .catch((err) => setState({ ...state, error: err.message }));
  };

  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Anything on Wikipedia</h1>
        <Alert
          type="danger"
          style={{ opacity: state.error ? 1 : 0, marginBottom: 10 }}
        >
          {state.error}
        </Alert>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          results={state}
        />
        <SearchResults title={state.title} url={state.url} />
      </Container>
    </div>
  );

};

export default Search;

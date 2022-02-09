import React from "react";
import { useEffect, useState } from "react";
import books from "../../data/books.json";
import SearchResults from "../SearchResults/SearchResults";
import "./searchComponent.scss";

const SearchComponent = () => {
  const [getBooks, setBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState(getBooks);

  useEffect(() => {
    setBooks(books.books);
    setSearchedBooks(books.books);
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value;
    let result = [];
    result = getBooks.filter((data) => {
      return data.title.search(value) !== -1;
    });
    setSearchedBooks(result);
  };
  return (
    <div className={"search-bar"}>
      <input
        type="text"
        onChange={(event) => handleSearch(event)}
        placeholder={"Search Books"}
        className={"book-search"}
      />
      <div className="container">
        <ul className="cards">
          {searchedBooks.map((books) => {
            return <SearchResults books={books} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;

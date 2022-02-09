import React from "react";
import "./searchResults.scss";

const SearchResults = ({ books }) => {
  return (
    <li class="cards__item">
      <div class="card">
        <img src={books.image} class="card__image"></img>
        <div class="card__content">
          <div class="card__title">{books.title}</div>
          <div class="card__title">BY: {books.author}</div>
          <div class="card__subtitle">{books.genres}</div>
          <p class="card__text">{books.description}</p>
          <div class="card__subtitle">ISBN# {books.isbn}</div>
          <div class="card__subtitle">Published {books.published}</div>
        </div>
      </div>
    </li>
  );
};

export default SearchResults;

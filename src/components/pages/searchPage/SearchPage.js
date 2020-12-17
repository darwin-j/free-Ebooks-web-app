import React, { useState, useEffect } from "react";
import "./searchPage.scss";
import searchIcon from "../../../images/search-icon.svg";
import { Link } from "react-router-dom";
export default function SearchPage() {
  const [eBooks, setEBooks] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [search, setSearch] = useState("flowers");

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&filter=free-ebooks`
    )
      .then((response) => response.json())
      .then((data) => setEBooks(data.items))
      .catch((err) => console.log(err));
  }, [search]);
  return (
    <div className="searchPage">
      <div className="searchPage-bar">
        <input
          className="searchPage-bar-input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
        />
        <button
          className="searchPage-bar-button"
          onClick={() => setSearch(searchValue)}
        >
          <img
            className="searchPage-bar-button-img"
            alt="search icon"
            src={searchIcon}
          />
        </button>
      </div>
      <div className="searchPage-allBooks">
        {eBooks.map((eBook) => (
          <Link to={`/product/${eBook.id}`}>
            <div className="searchPage-allBooks-books">
              <img
                className="searchPage-allBooks-books-img"
                src={eBook.volumeInfo.imageLinks.smallThumbnail}
                alt="books"
              />
              <p className="searchPage-allBooks-books-title">
                {eBook.volumeInfo.title.substring(0, 30)}
              </p>
              <p className="searchPage-allBooks-books-authors">
                {eBook.volumeInfo.authors}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

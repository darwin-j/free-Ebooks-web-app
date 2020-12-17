/*
import React, { Component } from "react";

export default class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eBook: {
        title: "",
        authors: [],
        image: "",
        downloadLink: "",
      },
    };
  }

  componentDidMount = () => {
    fetch("https://www.googleapis.com/books/v1/volumes/aoRT8U34vb8C")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          eBook: {
            title: data.volumeInfo.title,
            authors: data.volumeInfo.authors,
            image: data.volumeInfo.imageLinks.small,
            downloadLink: data.accessInfo.pdf.downloadLink,
          },
        })
      );
  };

  render() {
    const { eBook } = this.state;

    return (
      <>
        <div className="productPage">
          <img src={eBook.image} alt="Book" />
          <p>{eBook.title}</p>
          <p>{eBook.authors[0]}</p>
          <a href={eBook.downloadLink}>download</a>
        </div>
      </>
    );
  }
}
*/

import React, { useState, useEffect } from "react";
import "./productPage.scss";
export default function ProductPage({ match }) {
  const [eBook, setEBook] = useState({
    title: "",
    authors: [],
    image: "",
    downloadLink: "",
  });
  const id = "aoRT8U34vb8C";
  const url = `https://www.googleapis.com/books/v1/volumes/${match.params.id}`;
  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        setEBook({
          title: data.volumeInfo.title,
          authors: data.volumeInfo.authors,
          image: data.volumeInfo.imageLinks.small,
          downloadLink: data.accessInfo.pdf.downloadLink,
        })
      );
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(eBook);
  return (
    <>
      <div className="productPage-eBook-">
        <div className="productPage-eBook-left-">
          <img
            className="productPage-eBook-left-img"
            src={eBook.image}
            alt="Book"
          />
        </div>
        <div className="productPage-eBook-right-">
          <p className="productPage-eBook-right-title">{eBook.title}</p>
          <p className="productPage-eBook-right-authors">
            {eBook.authors ? "By " : ""}
            {eBook.authors}
          </p>

          <a
            className="productPage-eBook-right-downloadLink"
            href={eBook.downloadLink}
          >
            Download
          </a>
        </div>
      </div>
    </>
  );
}

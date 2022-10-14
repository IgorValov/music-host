import React, { Component } from "react";
import Author from "./author/author";
import Genre from "./genre/genre";
import Year from "./year/year";

export class Filter extends Component {
  state = {
    author: true,
    genre: true,
    year: true,
    activeAuthor: false,
    activeGenre: false,
    activeYear: false,
  };

  ClickYear = () => {
    this.setState(({ year, activeYear }) => {
      return {
        year: !year,
        activeYear: !activeYear,
      };
    });
  };

  ClickGenre = () => {
    this.setState(({ genre, activeGenre }) => {
      return {
        genre: !genre,
        activeGenre: !activeGenre,
      };
    });
  };

  ClickAuthor = () => {
    this.setState(({ author, activeAuthor }) => {
      return {
        author: !author,
        activeAuthor: !activeAuthor,
      };
    });
  };

  render() {
    const { genre } = this.state;
    const { author } = this.state;
    const { year } = this.state;
    const { activeAuthor } = this.state;
    const { activeYear } = this.state;
    const { activeGenre } = this.state;

    let ClassNameYear = "modal__year";
    let classNamesGenre = "modal__genre";
    let classNames = "modal__perfomer";
    let BtnAurhor = "filter__button button-author _btn-text";
    let BtnYear = "filter__button button-author _btn-text";
    let BtnGenre = "filter__button button-genre _btn-text";

    if (author) {
      classNames += " hidden";
    }
    if (activeAuthor) {
      BtnAurhor += " active";
    }
    if (genre) {
      classNamesGenre += " hidden";
    }
    if (activeGenre) {
      BtnGenre += " active";
    }
    if (year) {
      ClassNameYear += " hidden";
    }
    if (activeYear) {
      BtnYear += " active";
    }

    return (
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className={BtnAurhor} onClick={this.ClickAuthor}>
          исполнителю
        </div>
        <div className={classNames}>
          <Author />
        </div>
        <div className={BtnYear} onClick={this.ClickYear}>
          году выпуска
        </div>
        <div className={ClassNameYear}>
          <Year />
        </div>

        <div className={BtnGenre} onClick={this.ClickGenre}>
          жанру
        </div>
        <div className={classNamesGenre}>
          <Genre />
        </div>
      </div>
    );
  }
}

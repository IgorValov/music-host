import React from "react";
import { useThemeContext } from "../../../toggleTheme/context/theme";

const PlayList = () => {
  const { theme } = useThemeContext();
  const styleTheme = { backgroundColor: theme.background, color: theme.color };

  return (
    <div className="content__playlist playlist">
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a
                className="track__title-link"
                href="http://"
                style={styleTheme}
              >
                Guilt <span className="track__title-span text__color"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://" style={styleTheme}>
              Nero
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              Welcome Reality
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">4:44</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a
                className="track__title-link"
                href="http://"
                style={styleTheme}
              >
                Elektro <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://" style={styleTheme}>
              Dynoro, Outwork, Mr. Gee
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              Elektro
            </a>
          </div>
          <div className="track__time">
            <svg class="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">2:22</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a
                className="track__title-link"
                href="http://"
                style={styleTheme}
              >
                I’m Fire
                <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://" style={styleTheme}>
              Ali Bakgor
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              I’m Fire
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">2:22</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a
                className="track__title-link"
                href="http://"
                style={styleTheme}
              >
                Non Stop
                <span className="track__title-span">(Remix)</span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://" style={styleTheme}>
              Стоункат, Psychopath
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              Non Stop
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">4:12</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a
                className="track__title-link"
                href="http://"
                style={styleTheme}
              >
                Run Run <span className="track__title-span">(feat. AR/CO)</span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://" style={styleTheme}>
              Jaded, Will Clarke, AR/CO
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              Run Run
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">2:54</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a
                className="track__title-link"
                href="http://"
                style={styleTheme}
              >
                Eyes on Fire
                <span className="track__title-span">(Zeds Dead Remix)</span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://" style={styleTheme}>
              Blue Foundation, Zeds Dead
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              Eyes on Fire
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">5:20</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a
                className="track__title-link"
                href="http://"
                style={styleTheme}
              >
                Mucho Bien
                <span className="track__title-span">(Hi Profile Remix)</span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://" style={styleTheme}>
              HYBIT, Mr. Black, Offer Nissim, Hi Profile
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              Mucho Bien
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">3:41</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a
                className="track__title-link"
                href="http://"
                style={styleTheme}
              >
                Knives n Cherries <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://" style={styleTheme}>
              minthaze
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              Captivating
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">1:48</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a
                className="track__title-link"
                href="http://"
                style={styleTheme}
              >
                How Deep Is Your Love{" "}
                <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://" style={styleTheme}>
              Calvin Harris, Disciples
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              How Deep Is Your Love
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">3:32</span>
          </div>
        </div>
      </div>

      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className="track__title-text">
              <a
                className="track__title-link"
                href="http://"
                style={styleTheme}
              >
                Morena <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://" style={styleTheme}>
              Tom Boxer
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              Soundz Made in Romania
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">3:36</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayList;

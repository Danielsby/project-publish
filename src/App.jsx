//@flow
import './App.scss';
import * as React from 'react';

class App extends React.Component {
  render() {
    const title: string = 'Simple Publisher'
    const year: string = 'Simple Publisher 2020';

    return (
      <div className="publisher">
        <header className="publisher-header">
          <h1>{title}</h1>

          <nav className="main-nav">
            <a href="https://news.daum.net/">News</a>
            <a href="https://www.google.com/calendar">Calendar</a>
            <a href="https://www.google.com/gmail/">Mail</a>
            <a href="https://comic.naver.com/webtoon/weekday.nhn">Comics</a>
          </nav>
        </header>

        <main className="publisher-main">
          <article className="picture-1">
            <img className="fit-image" src="https://i.imgur.com/45h84Aa.jpeg" />
          </article>

          <article className="picture-2">
            <img className="fit-image" src="https://i.imgur.com/hkuUV1q.jpg" />
          </article>

          <article className="picture-3">
            <img className="fit-image" src="https://i.imgur.com/Q35sTZE.jpg" />
          </article>
        </main>

        <footer className="publisher-footer">
          <p>{year}</p>
        </footer>
      </div>
    );
  }
}

export default App;

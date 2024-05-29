import logo from './logo.svg';
import './App.css';
import $ from "jquery";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    $(".App-header span").hover(
      (e) => {
        // 오버시
        $(e.currentTarget).stop().animate(
          {
            scale: 1.4,
          },
          500
        );
      },
      (e) => {
        // 아웃시
        $(e.currentTarget).stop().animate(
          {
            scale: 1,
          },
          500
        );
      }
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <span>
        <img
          src="data:image/png;base64,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"
          className="App-logo"
          alt="logo"
        />
        </span>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

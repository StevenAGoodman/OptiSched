import { Outlet, Link } from "react-router-dom";
import "../pages_style/Home.css"

function Home() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className='title'>
              Hello World
            </h1>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
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
    )
}

export default Home
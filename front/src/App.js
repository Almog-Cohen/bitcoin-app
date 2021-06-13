import "./App.css";

import Header from "./Components/Header/Header";
import NewsFeed from "./Components/Newsfeed/Newsfeed";

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <NewsFeed />
        </div>
      </div>
    </div>
  );
}

export default App;

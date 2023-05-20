import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />

      <section>
        <div className="card">
          <h1 className="card_h1">All Stuff</h1>
          <div className="search">
            <img src="/images/search.svg" alt="search_logo" />
            <input className="search_place" placeholder="Search..." />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

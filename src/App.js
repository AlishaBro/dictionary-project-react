
import './App.css';
import Search from "./Search"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>The Dictionary</h1>
        <Search defaultKeyword={"snow"} />
      
      </header>
    </div>
  );
}

export default App;

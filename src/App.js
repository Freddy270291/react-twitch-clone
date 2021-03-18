import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";

function App() {
  return (
    // BEM
    <div className="app">
      <Header />
      <div className="app__main">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;

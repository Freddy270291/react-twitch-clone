import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    // BEM
    <div className="app">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;

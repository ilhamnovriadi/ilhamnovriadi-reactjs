import "./App.css";
import Header from "./comps/Header";
import Footer from "./comps/Footer";
import Body from "./comps/Body";

function App() {
  return (
    <div className="App">
      <div className="Card">
        <Header name="Belajar React JS" />
        <Body />
      </div>
      <Footer text="ilhamnovriadi@2022" />
    </div>
  );
}

export default App;

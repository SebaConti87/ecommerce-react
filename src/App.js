import NavBar from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/ItemListContainer";
import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  return (
    <header>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos!" />
    </header>
  );
}

export default App;

import NavBar from "./components/Navbar/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  return (
    <header>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos!" />
      <ItemDetailContainer />
    </header>
  );
}

export default App;

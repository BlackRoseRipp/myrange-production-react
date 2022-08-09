import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SiteWrapper from "./components/SiteWrapper";

function App() {
  return (
    <BrowserRouter>
      <SiteWrapper />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AllRoutes from "./routes";
import StylesGlobal from "./StylesGlobal";

function App() {
  return (
    <BrowserRouter>
      <StylesGlobal />
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;

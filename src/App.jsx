import { BrowserRouter, Route, Routes } from "react-router-dom";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnderConstruction />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

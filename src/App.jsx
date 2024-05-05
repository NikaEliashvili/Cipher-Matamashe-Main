import { BrowserRouter, Route, Routes } from "react-router-dom";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="store" element={<Home />}></Route>
          <Route path="gifts" element={<Home />}></Route>
          <Route path="calendar" element={<Home />}></Route>
          <Route path="info" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

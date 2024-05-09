import { BrowserRouter, Route, Routes } from "react-router-dom";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Layout from "./components/Layout/Layout";
import Gifts from "./pages/Gifts/Gifts";
import History from "./pages/History/History";
import Information from "./pages/Information/Information";
import Search from "./pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="gifts" element={<Gifts />} />
          <Route path="history" element={<History />} />
          <Route path="info" element={<Information />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

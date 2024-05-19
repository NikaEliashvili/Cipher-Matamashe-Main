import { BrowserRouter, Route, Routes } from "react-router-dom";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Layout from "./components/Layout/Layout";
import Gifts from "./pages/Gifts/Gifts";
import History from "./pages/History/History";
import Information from "./pages/Information/Information";
import HelpCentre from "./pages/HelpCentre/HelpCentre";
import Profile from "./pages/Profile/Profile";
import useScreenWidth from "./hooks/useScreenWidth";
import SearchResult from "./pages/SearchResult/SearchResult";
import Product from "./pages/Product/Product";

function App() {
  useScreenWidth();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="gifts" element={<Gifts />} />
          <Route path="history" element={<History />} />
          <Route path="info" element={<Information />} />
          <Route path="help_center" element={<HelpCentre />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<SearchResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

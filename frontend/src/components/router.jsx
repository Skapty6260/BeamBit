import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home/home";
import Author from "./screens/author/author";
import Search from "./screens/search/search";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors/:id" element={<Author />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

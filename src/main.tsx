import "./global.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Footer } from "./components/footer";
import { Header } from "./components/index";
import { Home } from "./home";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);

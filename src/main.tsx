import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Collections } from "./pages/Collections.tsx";
import { Auth } from "./pages/Auth.tsx";
import Media from "./pages/Media.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/media/:mediaId" element={<Media />} />
    </Routes>
  </BrowserRouter>
);

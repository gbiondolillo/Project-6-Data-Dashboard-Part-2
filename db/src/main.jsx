import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import DetailView from "./Components/DetailView/DetailView";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
 
 <BrowserRouter>
    <Routes>
     <Route index={true} path="/" element={<App />} />
     <Route index={false} path="/recipeDetails/:index" element={<DetailView />} />
    </Routes>
  </BrowserRouter>
);

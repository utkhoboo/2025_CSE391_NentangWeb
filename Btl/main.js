import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js"; // Đổi đuôi .jsx thành .js nếu đã sửa App.jsx

const root = createRoot(document.getElementById("root"));

root.render(
  React.createElement(
    StrictMode,
    null,
    React.createElement(App, null)
  )
);

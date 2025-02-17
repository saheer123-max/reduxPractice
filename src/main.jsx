import React from "react";
import { createRoot } from "react-dom/client";
import stor from "./Store/Stor.jsx"
import App from "./App.jsx";
import { Provider } from "react-redux";
// import store from "./Store/Stor";

createRoot(document.getElementById("root")).render(
<Provider store={stor}>
<App />

</Provider>

);

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

// can wrap any component to strict mode. not necessary to wrap app component. can wrap only parts of application components inside
// strict mode executes the component twice helping us find the problem. It does only in development mode.
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

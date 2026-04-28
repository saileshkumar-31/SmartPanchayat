import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Routes from "./routes/Routes.jsx";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Routes} />
);
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { CanvasProvider } from "./context/CanvasContext.jsx";

createRoot(document.getElementById("root")).render(
  <CanvasProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CanvasProvider>
);

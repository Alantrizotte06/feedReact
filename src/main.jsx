import React from "react"; //Realizando a importação do React.
import ReactDOM from "react-dom/client"; //Realizando a importação do React para funcionar no ambiente browser.
import { App } from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Chamamos o metodo createRoot dentro do ReactDOM, recebendo um parametro do elemento raiz da nossa página HTML.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

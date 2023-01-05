import liff from "@line/liff/dist/lib";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

liff
  .init({ liffId: "YOUR LIFF ID" })
  .then(
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  )
  .catch((e) => {
    alert(`LIFF ERROR: ${e.message}`);
  });

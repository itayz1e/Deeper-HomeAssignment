// ** style Imports
import "./index.css";
// ** Components Imports
import App from "./App.tsx";
// ** React Imports
import React from "react";
import ReactDOM from "react-dom/client";
// ** Third Party Imports
import { QueryClientProvider, queryClient } from "./hooks/queryClient.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);

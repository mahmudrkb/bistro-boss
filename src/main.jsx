import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router/routes";

import { RouterProvider } from "react-router-dom";
import AuthProviders from "./providers/AuthProviders";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      {" "}
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>
);

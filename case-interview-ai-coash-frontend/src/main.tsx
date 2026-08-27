import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import CasesPage from "./pages/casesPage/CasesPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "cases",
            element: <CasesPage />,
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);

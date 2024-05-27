import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Card2 } from "./routes/Card2";
import { Card } from "./routes/Card";
import { Button } from "./routes/Button";
import { Start } from "./assets/component/Start";
import "./index.css";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    children:[
      {
        path:"",
        element: <Start />,
      },
      {
        path:"/cards1",
        element: <Card />,
      },
      {
        path:"/cards2",
        element: <Card2 />,
      },
      {
        path:"/button",
        element: <Button />,
      },
    ],
  },
  
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
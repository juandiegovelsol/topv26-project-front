import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "../pages/home";
import { ModelS } from "../pages/modelS";
import { Model3 } from "../pages/model3";
import { ModelX } from "../pages/modelX";
import { ModelY } from "../pages/modelY";
import { SolarRoof } from "../pages/solarRoof";
import { SolarPanel } from "../pages/solarPanel";
import { Shop } from "../pages/shop";
import { Account } from "../pages/account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/ModelS",
    element: <ModelS />,
  },
  {
    path: "/Model3",
    element: <Model3 />,
  },
  {
    path: "/ModelX",
    element: <ModelX />,
  },
  {
    path: "/ModelY",
    element: <ModelY />,
  },
  {
    path: "/SolarRoof",
    element: <SolarRoof />,
  },
  {
    path: "/SolarPanel",
    element: <SolarPanel />,
  },
  {
    path: "/Shop",
    element: <Shop />,
  },
  {
    path: "/Account",
    element: <Account />,
  },
]);
const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;
export { CustomRouter };

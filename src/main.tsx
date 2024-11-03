import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import TimersView from "./views/TimersView";
import DocumentationView from "./views/DocumentationView";
import Countdown from "./components/timers/Countdown";
import Stopwatch from "./components/timers/Stopwatch";
import Tabata from "./components/timers/Tabata";
import XY from "./components/timers/XY";

const router = createHashRouter([
  {
    path: "/",
    element: <TimersView />,
  },
  {
    path: "/stopwatch",
    element: <Stopwatch />,
  },
  {
    path: "/countdown",
    element: <Countdown />,
  },
  {
    path: "/xy",
    element: <XY />,
  },
  {
    path: "/tabata",
    element: <Tabata />,
  },
  {
    path: "/docs",
    element: <DocumentationView />,
  },
]);

// Render the app
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

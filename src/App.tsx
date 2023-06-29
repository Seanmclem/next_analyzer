import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/RootLsyout";
import { TestPage } from "./pages/Test/TestPage";
import { HomePage } from "./pages/home/HomePage";
// import reactLogo from './assets/react.svg'

// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "test",
          element: <TestPage />,
          // loader: teamLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dash from "./components/custom/Dash";
import Header from "./components/custom/Header";
import Add from "./components/custom/Add";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Dash />
        </>
      ),
    },
    {
      path: "/add",
      element: <Add />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

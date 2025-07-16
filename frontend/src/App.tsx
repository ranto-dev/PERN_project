import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dash from "./components/custom/Dash";
import Header from "./components/custom/Header";
import AddForm from "./components/custom/AddForm";
import EditForm from "./components/custom/EditForm";

export default function App() {
  const TODOS = [
    {
      id: 1,
      title: "title 1",
      description: "ceci est la description 1",
      completed: true,
    },
    {
      id: 2,
      title: "title 2",
      description: "ceci est la description 2",
      completed: true,
    },
    {
      id: 3,
      title: "title 3",
      description: "ceci est la description 3",
      completed: true,
    },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Dash todos={TODOS} />
        </>
      ),
    },
    {
      path: "/add",
      element: <AddForm />,
    },
    {
      path: "/edit/:id",
      element: <EditForm todos={TODOS} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

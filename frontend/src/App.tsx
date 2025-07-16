import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dash from "./components/custom/Dash";
import Header from "./components/custom/Header";
import AddForm from "./components/custom/AddForm";
import EditForm from "./components/custom/EditForm";
import { useEffect, useState } from "react";

export type Todo = {
  id: number;
  title: string;
  content: string;
};

export type TodosType = {
  content: Todo[];
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    fetch(`http://${window.location.hostname}:3000/todo/all`, {
      method: "GET",
      signal: controller.signal,
    })
      .then((response) => response.json() as Promise<TodosType>)
      .then((response) => setTodos(response.content))
      .catch((err) => console.error(err));
    return () => {
      controller.abort();
    };
  }, []); 

  console.log("Todo ---");
  console.log(todos);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Dash todos={todos} />
        </>
      ),
    },
    {
      path: "/add",
      element: <AddForm />,
    },
    {
      path: "/edit/:id",
      element: <EditForm todos={todos} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

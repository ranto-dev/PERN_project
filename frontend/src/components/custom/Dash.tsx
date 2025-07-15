import CardTodo from "./Card";

export default function Dash() {
  const TODOS = [
    {
      id: 1,
      title: "title 1",
      description: "ceci est la description 1",
      competed: true,
    },
    {
      id: 2,
      title: "title 2",
      description: "ceci est la description 2",
      competed: true,
    },
    {
      id: 3,
      title: "title 3",
      description: "ceci est la description 3",
      competed: true,
    }
  ];

  return (
    <div className="p-5 flex flex-col gap-2 m-auto max-w-200">
      {TODOS.map((todo) => {
        return (
          <CardTodo
            id={todo.id}
            title={todo.title}
            description={todo.description}
          />
        );
      })}
    </div>
  );
}

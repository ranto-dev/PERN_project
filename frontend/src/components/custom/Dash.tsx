import CardTodo from "./Card";

export type todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean 
};

export type TodosType = {
  todos: todo[];
};

export default function Dash(props: TodosType) {
  return (
    <div className="p-5 flex flex-col gap-2 m-auto max-w-200">
      {props.todos.map((todo) => {
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

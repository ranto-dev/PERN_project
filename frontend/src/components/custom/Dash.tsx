import type { Todo } from "@/App";
import CardTodo from "./Card";

export type TodoListProps = {
  todos: Todo[];
};

export default function Dash({ todos }: TodoListProps) {
  return (
    <div className="p-5 h-150 scroll-auto flex flex-col gap-2 m-auto max-w-200 bg-amber-300">
      {todos.map((todo) => {
        return (
          <CardTodo
            id={todo.id}
            title={todo.title}
            content={todo.content}
          />
        );
      })}
    </div>
  );
}

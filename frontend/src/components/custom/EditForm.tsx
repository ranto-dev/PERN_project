import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useNavigate, useParams } from "react-router-dom";
import type { TodoListProps } from "./Dash";

export default function EditForm({ todos }: TodoListProps) {
  const { id } = useParams();
  const todo = todos.find((todo) => todo.id.toString() === id);
  console.log(todo);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="p-2">
      <div>
        <Button onClick={handleBack}>Back</Button>
      </div>
      <div className="flex flex-col gap-5 p-5 w-130 mt-5 m-auto border rounded-2xl shadow">
        <div>
          <h1 className="text-center text-2xl">Edit Todo</h1>
        </div>
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            placeholder="Type title here ..."
            id="title"
            value={todo?.title}
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            placeholder="Type description here ..."
            id="description"
            value={todo?.content}
          />
        </div>
        <div>
          <Button>Update</Button>
        </div>
      </div>
    </div>
  );
}

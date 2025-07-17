import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useNavigate, useParams } from "react-router-dom";
import type { TodoListProps } from "./Dash";
import { MdEditSquare } from "react-icons/md";
import type { FormEvent } from "react";

export default function EditForm({ todos }: TodoListProps) {
  const { id } = useParams();
  const todo = todos.find((todo) => todo.id.toString() === id);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = formData.get("title");
    const content = formData.get("content");
    const body = {
      title: title,
      content: content,
    };

    console.log(content);
    console.log("Json: " + JSON.stringify(body));

    fetch(`http://${window.location.hostname}:3000/todo/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    event.currentTarget.reset();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="p-2">
      <div>
        <Button onClick={handleBack}>Back</Button>
      </div>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="flex flex-col gap-5 p-5 w-130 mt-5 m-auto border rounded-2xl shadow"
      >
        <div>
          <h1 className="text-center text-2xl">Edit Todo</h1>
        </div>
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            placeholder="Type title here ..."
            id="title"
            name="title"
            defaultValue={todo?.title}
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            placeholder="Type description here ..."
            id="description"
            defaultValue={todo?.content}
            name="content"
          />
        </div>
        <div>
          <Button type="submit">
            <MdEditSquare />
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}

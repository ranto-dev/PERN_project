import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import type { CardTodoType } from "./Card";

export default function EditForm(props: CardTodoType) {
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
            value={props.title}
            id="title"
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            placeholder="Type description here ..."
            value={props.description}
            id="description"
          />
        </div>
        <div>
          <Button>Update</Button>
        </div>
      </div>
    </div>
  );
}

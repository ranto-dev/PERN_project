import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { FaReply } from "react-icons/fa6";
import { IoMdSave } from "react-icons/io";
import { type FormEvent } from "react";

export default function AddForm() {
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

    fetch(`http://localhost:3000/todo/add`, {
      method: "POST",
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
  };

  return (
    <div className="p-2">
      <div>
        <Button onClick={handleBack}>
          <FaReply />
          Back
        </Button>
      </div>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="flex flex-col gap-5 p-5 w-130 mt-5 m-auto border rounded-2xl shadow"
      >
        <div>
          <h1 className="text-center text-2xl">Add Todo</h1>
        </div>
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" placeholder="Type title here ..." />
        </div>
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            name="content"
            placeholder="Type description here ..."
          />
        </div>
        <div>
          <Button type="submit">
            <IoMdSave />
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

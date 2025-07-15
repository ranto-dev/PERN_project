import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function AddForm() {
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
          <h1 className="text-center text-2xl">Add Todo</h1>
        </div>
        <div>
          <Label htmlFor="email">Title</Label>
          <Input placeholder="Type title here ..." />
        </div>
        <div>
          <Label htmlFor="email">Description</Label>
          <Textarea placeholder="Type description here ..." />
        </div>
        <div>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}

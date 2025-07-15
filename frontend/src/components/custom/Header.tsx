import { Button } from "@/components/ui/button";
import { MdAddCircle } from "react-icons/md";

export default function Header() {
  return (
    <div className="p-3 max-w-250 m-auto">
      <div className="flex justify-between">
        <div>
          <h1>Todo</h1>
        </div>
        <div>
          <Button>
            <MdAddCircle />
            Add todo
          </Button>
        </div>
      </div>
    </div>
  );
}

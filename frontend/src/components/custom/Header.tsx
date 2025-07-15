import { Button } from "@/components/ui/button";
import { MdAddCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/add");
  };
  return (
    <div className="p-3 max-w-250 m-auto">
      <div className="flex justify-between">
        <div>
          <h1>Todo</h1>
        </div>
        <div>
          <Button onClick={handleClick}>
            <MdAddCircle />
            Add todo
          </Button>
        </div>
      </div>
    </div>
  );
}

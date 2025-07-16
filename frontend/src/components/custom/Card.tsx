import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BiSolidTrash } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";

type CardTodoType = {
  id: number;
  title: string;
  content: string;
};

export default function CardTodo({id, title, content}: CardTodoType) {
  const handleAlert = (id: number) => {
    alert(`Are you sur to delete this Todo n° ${id} ?`);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardAction>
          <div className="flex gap-1.5">
            <Link to={`/edit/${id}`}>
              <GrEdit />
            </Link>
            <BiSolidTrash onClick={() => handleAlert(id)} />
          </div>
        </CardAction>
      </CardHeader>
      <CardContent className="flex gap-2.5">
        <CardDescription>{content}</CardDescription>
        <MdCheckCircle />
      </CardContent>
    </Card>
  );
}

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

type CardTodoType = {
  id: number;
  title: string;
  description: string;
};

export default function CardTodo(props: CardTodoType) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardAction>
          <div className="flex gap-1.5">
            <GrEdit />
            <BiSolidTrash />
          </div>
        </CardAction>
      </CardHeader>
      <CardContent className="flex gap-2.5">
        <CardDescription>{props.description}</CardDescription>
        <MdCheckCircle />
      </CardContent>
    </Card>
  );
}

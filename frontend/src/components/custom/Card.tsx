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
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";
import { Button } from "../ui/button";

type CardTodoType = {
  id: number;
  title: string;
  content: string;
};

type IdType = {
  id: number;
};

type ConfirmDeleteModalProps = {
  trigger: React.ReactNode;
  onConfirm: () => void;
};

export default function CardTodo({ id, title, content }: CardTodoType) {
  const handleDelete = (id: IdType) => {
    fetch(`http://${window.location.hostname}:3000/todo/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur suppression");
        return res.json();
      })
      .then(() => {
        alert("Élément supprimé !");
      })
      .catch((err) => {
        console.error(err);
        alert("Erreur lors de la suppression.");
      });
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
            <ConfirmDeleteModal
              onConfirm={handleDelete}
              trigger={
                <Button variant="destructive">
                  <BiSolidTrash />
                </Button>
              }
            />
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

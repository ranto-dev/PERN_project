import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Add() {
  return (
    <div>
      <h1>Add new Todo</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non soluta
        itaque modi assumenda illum? Dolor, omnis cupiditate quasi voluptatem
        quas qui. Ipsa mollitia sequi quibusdam aliquid ab ad dignissimos porro?
      </p>
      <div>
        <Label htmlFor="email">Your email address</Label>
        <Input />
        <Textarea placeholder="Type your message here." />
      </div>
    </div>
  );
}

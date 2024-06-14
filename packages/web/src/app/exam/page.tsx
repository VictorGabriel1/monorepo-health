import { cookies } from "next/headers";
import Forms from "./forms";

export default function Exams() {
  const session = cookies().get("session.id")?.value;
  return <Forms session={session} />;
}

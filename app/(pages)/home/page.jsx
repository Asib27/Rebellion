import { auth } from "@/auth";

export default async function Home() {
  const data = await auth();

  console.log(data);

  return <div>Home</div>;
}

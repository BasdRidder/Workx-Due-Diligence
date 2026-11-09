import { redirect } from "next/navigation";
import DDApp from "../components/DDApp";
import { currentUser } from "../lib/session";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await currentUser();
  if (!user) redirect("/login");
  if (user.mustChange) redirect("/account");
  return <DDApp />;
}

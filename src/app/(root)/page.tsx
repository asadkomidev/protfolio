import { HomeIntro } from "@/components/home/home-into";
import { TypeWriter } from "@/components/home/type-writer";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <HomeIntro />
      <TypeWriter />
    </main>
  );
}

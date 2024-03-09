import { HomeIntro } from "@/components/home/home-into";
import { HomeIntroMobile } from "@/components/home/home-intro-mobile";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <HomeIntro />
      <HomeIntroMobile />
    </main>
  );
}

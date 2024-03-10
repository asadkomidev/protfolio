import { type Metadata } from 'next'
import { HomeIntro } from "@/components/home/home-into";
import { HomeIntroMobile } from "@/components/home/home-intro-mobile";


export const metadata: Metadata = {
  title: 'Asad Komi - Full-Stack Developer Specializing in .NET, Next.js, React, and More',
  description:
    'Discover the innovative world of Asad Komi, a seasoned full-stack developer skilled in .NET, Next.js, React, and modern web technologies. Explore my projects and blog for insights.',
    keywords: 'Asad Komi, Full-Stack Developer, .NET, Next.js, React, Web Development, Software Development, Software Engineer, Projects',
}

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <HomeIntro />
      <HomeIntroMobile />
    </main>
  );
}

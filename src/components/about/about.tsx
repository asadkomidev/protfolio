import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";

import { Separator } from "../ui/separator";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row py-12 md:py-48 gap-8">
      <div className="w-full">
        <div className="flex flex-col gap-y-12  h-full">
          <div className="">
            <Image
              src="/me.png"
              alt="hero"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between w-full py-6">
          <div className="text-muted-foreground">
            <div className="flex-flex-col">
              <div className="flex  items-center gap-4 pb-6">
                <FaXTwitter className="w-6 h-6" />
                <span className="">Follow on X</span>
              </div>
              <div className="flex  items-center gap-4 pb-6">
                <FaGithub className="w-6 h-6" />
                <span className="">Follow on Github</span>
              </div>
              <div className="flex  items-center gap-4 pb-6">
                <FaLinkedinIn className="w-6 h-6" />
                <span className="">Follow on Linkedin</span>
              </div>
            </div>

            <div className="">
              <div className="flex  items-center gap-4 pb-4">
                <Mail className="w-6 h-6" />
                <span className="">asadkomi@outlook.com</span>
              </div>
            </div>
          </div>
          <div className="w-full pt-12 md:pt-24">
            <Image src="/as.svg" alt="signature" width={100} height={50} className="-rotate-12"/>
          </div>
        </div>
        </div>
      </div>
      <div className="w-full">
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-3xl font-bold  sm:text-4xl">
            Innovative software craftsman: Blending cutting-Edge technology with
            a passion for Soccer
          </h1>
          <div className="mt-6 space-y-7 text-muted-foreground">
            <p>
              From the earliest days of my youth, the thrill of solving puzzles
              and the satisfaction of creating something from nothing steered me
              towards the world of coding. My journey began with simple programs
              and has since evolved into sophisticated web applications using
              modern frameworks and languages like TypeScript, React, Next.js,
              Node.js, and styling with Tailwind CSS. This path has not just
              shaped my professional life but has also instilled in me a
              profound appreciation for the elegance and efficiency of
              well-written code.
            </p>
            <p>
              Beyond the world of brackets and semicolons, soccer plays a
              pivotal role in my life. It's a passion that mirrors the dynamics
              of software development—both require teamwork, strategy, and a
              relentless pursuit of excellence. Soccer has taught me resilience,
              the importance of a growth mindset, and how to handle the highs
              and lows, lessons that are invaluable when navigating the
              complexities of technology projects.
            </p>
            <p>
              As I continue to code and kick my way through life, my mission
              remains to merge my passion for technology and soccer. Whether
              it's developing innovative software solutions that impact lives or
              hitting the soccer field to score the next goal, I'm committed to
              pushing the boundaries of what's possible. Join me on this journey
              as we explore the beautiful game of coding and the coding behind
              the beautiful game.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

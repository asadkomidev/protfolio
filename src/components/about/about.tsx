import Image from "next/image";
import { Mail } from "lucide-react";

import { InfiniteTechLogo } from "./tech-stacks";
import { AboutMe, SocialIcons } from "./constants";

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row pt-12 md:pt-48 gap-8">
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
                  {SocialIcons.map((item, idx) => (
                    <div className="flex  items-center gap-4 pb-6" key={idx}>
                      <item.icon className="w-6 h-6" />
                      <span className="">{item.name}</span>
                    </div>
                  ))}
                </div>

                <div className="">
                  <div className="flex  items-center gap-4 pb-4">
                    <Mail className="w-6 h-6" />
                    <span className="">asadkomi@outlook.com</span>
                  </div>
                </div>
              </div>
              <div className="w-full pt-12 md:pt-24">
                <Image
                  src="/as.svg"
                  alt="signature"
                  width={100}
                  height={50}
                  className="-rotate-12"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-3xl font-bold  sm:text-4xl">{AboutMe.title}</h1>
            <div className="prose pb-12 prose-headings:dark:text-white prose-p:dark:text-muted-foreground prose-li:dark:text-muted-foreground prose-a:dark:text-muted-foreground prose-strong:dark:text-muted-foreground prose-blockquote:dark:text-muted-foreground ">
              <div className="mt-6 space-y-7 text-muted-foreground">
                <div
                  dangerouslySetInnerHTML={{ __html: AboutMe.description }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 py-12">
        <InfiniteTechLogo />
      </div>
    </>
  );
};

export default About;

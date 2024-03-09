import Image from "next/image";
import { Mail } from "lucide-react";

import { Heading } from "../shared/heading";
import { ContactForm } from "./contact-form";
import { SocialIcons } from "../about/constants";

const Contact = () => {
  return (
    <Heading
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <div className="flex flex-col md:flex-row gap-8 ">
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
          <div className="w-full">
            <Image
              src="/as.svg"
              alt="signature"
              width={100}
              height={50}
              className="-rotate-12"
            />
          </div>
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </Heading>
  );
};

export default Contact;

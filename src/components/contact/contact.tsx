import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";

import { Heading } from "../shared/heading";
import { ContactForm } from "./contact-form";

const Contact = () => {
  return (
    <Heading
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <div className="flex flex-col md:flex-row gap-8 ">
        <div className="w-full py-6">
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
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </Heading>
  );
};

export default Contact;

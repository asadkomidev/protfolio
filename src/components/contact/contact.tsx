import Image from "next/image";
import { Mail } from "lucide-react";

import { socialIcons } from "@/content/about-content";
import { contactContent } from "@/content/contact-content";

import { PageLayout } from "../shared/page-layout";
import { ContactForm } from "./contact-form";
import Link from "next/link";

const Contact = () => {
  return (
    <PageLayout
      title={contactContent.title}
      intro={contactContent.intro}
    >
      <div className="flex flex-col md:flex-row gap-8 ">
        <div className="flex flex-col justify-between w-full py-6">
          <div className="text-muted-foreground">
            <div className="flex-flex-col">
              {socialIcons.map((item, idx) => (
                <Link target="_blank" href={item.link} className="flex  items-center gap-4 pb-6" key={idx}>
                  <item.icon className="w-6 h-6" />
                  <span className="">{item.name}</span>
                </Link>
              ))}
            </div>

            <div className="">
              <div className="flex  items-center gap-4 pb-4">
                <Mail className="w-6 h-6" />
                <span className="">asadkomi@outlook.com</span>
              </div>
            </div>
          </div>
          <div className="w-full py-24">
            <Image
              priority
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
    </PageLayout>
  );
};

export default Contact;

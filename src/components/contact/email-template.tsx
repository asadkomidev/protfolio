import {
  Body,
  Container,
  Heading,
  Hr,
  Html,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type Props = {
  fullname: string;
  email: string;
  message: string;
};

export function ContactEmail({ fullname, email, message }: Props) {
  return (
    <Html lang="en">
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[16px] font-normal p-0 my-[30px] mx-0">
              <strong>New message</strong>
            </Heading>
            <Text className="text-[#666666] text-[14px] leading-[24px]">
              Full name: {fullname}
            </Text>
            <Text className="text-[#666666] text-[14px] leading-[24px]">
              Email: {email}
            </Text>
            <Hr className="my-[18px] mx-0 w-full" />
            <Text className="text-[#666666] text-[14px] leading-[24px]">
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactEmail;

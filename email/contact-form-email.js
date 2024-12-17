import React from "react";

import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function ContactFormEmail({ senderEmail, senderMessage }) {
  return (
    <Html>
      <Head>
        <Preview>New message from your portfolio site</Preview>
        <Tailwind>
          <Body className="bg-gray-100">
            <Container>
              <Section className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md">
                <Heading className="leading-tight text-black">
                  You received the following message from the contact form
                </Heading>
                <Text>{senderMessage}</Text>
                <Hr />
                <Text>The sender's email is {senderEmail}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Head>
    </Html>
  );
}

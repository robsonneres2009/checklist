import Header from "@/components/atoms/header";
import { Body } from "./index.styled";
import { Footer } from "@/components/atoms/footer";
import { ReactElement, useContext } from "react";
import Feedback from "@/components/atoms/feedback";
import { FeedbackContext } from "@/contexts/FeedbackContext";

interface Props {
  children: ReactElement;
}

export function Layout({ children }: Props) {
  const { hideMessage, message, isError } = useContext(FeedbackContext);
  return (
    <main>
      <Header />
      <Feedback
        _message={message}
        _isError={isError}
        _hideMessage={hideMessage}
      />
      <Body>{children}</Body>
      <Footer />
    </main>
  );
}

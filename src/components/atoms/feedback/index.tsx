import { useEffect, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import {
  Close,
  ContainerFeedback,
  MessageFeedback,
  Text,
} from "./index.styled";
import { AiOutlineClose } from "react-icons/ai";
import { scrollToTop } from "@/utils/scrollTop";

interface Props {
  _message: string | null;
  _isError: boolean;
  _hideMessage: () => void;
}

export default function Feedback({ _message, _isError, _hideMessage }: Props) {
  const [message, setMessage] = useState(null as string | null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setMessage(_message);
    setIsError(_isError);

    if (_message) {
      scrollToTop();
    }
  }, [_message, _isError]);

  return message ? (
    <ContainerFeedback isError={isError}>
      <MessageFeedback>
        <FiAlertCircle />
        <Text>{message}</Text>
      </MessageFeedback>
      <Close onClick={_hideMessage}>
        <AiOutlineClose />
      </Close>
    </ContainerFeedback>
  ) : null;
}

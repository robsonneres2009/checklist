import {
  FeedbackContext,
  FeedbackContextType,
} from "@/contexts/FeedbackContext";
import { useState } from "react";

interface FeedbackContextProviderProps {
  children: React.ReactNode;
}

export function FeedbackContextProvider({
  children,
}: FeedbackContextProviderProps) {
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  function showMessage(message: string, isError: boolean) {
    setMessage(message);
    setIsError(isError);
  }

  function hideMessage() {
    setMessage(null);
    setIsError(false);
  }

  const value: FeedbackContextType = {
    message,
    isError,
    showMessage,
    hideMessage,
  };

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
}

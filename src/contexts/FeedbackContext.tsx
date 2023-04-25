import React, { createContext, useState } from "react";

export interface FeedbackContextType {
  message: string | null;
  isError: boolean;
  showMessage: (message: string, isError: boolean) => void;
  hideMessage: () => void;
}

export const FeedbackContext = createContext<FeedbackContextType>({
  message: null,
  isError: false,
  showMessage: () => {},
  hideMessage: () => {},
});

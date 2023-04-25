export const isMobile = (): boolean => {
  if (typeof window === "undefined") {
    // Server-side rendering
    return false;
  }

  return window?.innerWidth < 768;
};

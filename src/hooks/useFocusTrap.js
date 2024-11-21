import { useEffect, useRef } from "react";

export const useFocusTrap = (isActive) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const element = ref.current;
    if (!element) return;

    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    const handleFocus = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    };

    element.addEventListener("keydown", handleFocus);
    firstFocusable?.focus();

    return () => {
      element.removeEventListener("keydown", handleFocus);
    };
  }, [isActive]);

  return ref;
}; 
import { useState, useEffect } from "react";

export const AnimatedInput = ({
  // eslint-disable-next-line react/prop-types
  placeholder: passedPlaceholder = "",
  ...passedProps
}) => {
  const [placeholder, setPlaceholder] = useState(passedPlaceholder.slice(0, 0));
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const intr = setInterval(() => {
      setPlaceholder(passedPlaceholder.slice(0, placeholderIndex));
      if (placeholderIndex + 1 > passedPlaceholder.length) {
        setPlaceholderIndex(0);
      } else {
        setPlaceholderIndex(placeholderIndex + 1);
      }
    }, 500);
    return () => {
      clearInterval(intr);
    };
  });

  return <input {...passedProps} placeholder={placeholder} />;
};

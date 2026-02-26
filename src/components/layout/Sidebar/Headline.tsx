import { useEffect, useState } from "react";

const words = [
  "product engineer",
  "frontend developer",
  "web designer",
  "technical specialist",
  "product engineer",
];

const Headline = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const currentWord = words[textIndex];

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setCharIndex((prev) => prev - 1);
        } else {
          setCharIndex((prev) => prev + 1);
        }

        setDisplay(currentWord.substring(0, charIndex));

        if (!isDeleting && charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }

        if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? 40 : 70,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <h3 className="text-xl font-medium">
      {display}
      <span className="animate-pulse">|</span>
    </h3>
  );
};

export default Headline;

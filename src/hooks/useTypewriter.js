import { useEffect, useMemo, useState } from "react";

export function useTypewriter(lines, options = {}) {
  const {
    typingSpeed = 46,
    deletingSpeed = 24,
    holdDuration = 1800,
    pauseBetweenLines = 260,
  } = options;

  const safeLines = useMemo(
    () => (Array.isArray(lines) && lines.length ? lines : [""]),
    [lines]
  );

  const [lineIndex, setLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = safeLines[lineIndex] ?? "";
    let timerId;

    if (!isDeleting && displayText.length < currentLine.length) {
      timerId = window.setTimeout(() => {
        setDisplayText(currentLine.slice(0, displayText.length + 1));
      }, typingSpeed);
      return () => window.clearTimeout(timerId);
    }

    if (!isDeleting && displayText.length === currentLine.length) {
      timerId = window.setTimeout(() => setIsDeleting(true), holdDuration);
      return () => window.clearTimeout(timerId);
    }

    if (isDeleting && displayText.length > 0) {
      timerId = window.setTimeout(() => {
        setDisplayText(currentLine.slice(0, displayText.length - 1));
      }, deletingSpeed);
      return () => window.clearTimeout(timerId);
    }

    timerId = window.setTimeout(() => {
      setIsDeleting(false);
      setLineIndex((prev) => (prev + 1) % safeLines.length);
    }, pauseBetweenLines);

    return () => window.clearTimeout(timerId);
  }, [
    displayText,
    lineIndex,
    safeLines,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    holdDuration,
    pauseBetweenLines,
  ]);

  return { text: displayText, lineIndex, isDeleting };
}

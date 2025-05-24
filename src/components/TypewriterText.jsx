import { useState, useEffect } from 'react';

export const TypewriterText = ({ texts, typingSpeed = 150, deletingSpeed = 100, delayBetweenTexts = 1500 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  
  useEffect(() => {
    if (isWaiting) return;
    
    const timeout = setTimeout(() => {
      const currentFullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        } else {
          // Done typing, wait a bit before deleting
          setIsWaiting(true);
          setTimeout(() => {
            setIsWaiting(false);
            setIsDeleting(true);
          }, delayBetweenTexts);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentFullText.substring(0, currentText.length - 1));
        } else {
          // Done deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, delayBetweenTexts, deletingSpeed, isDeleting, isWaiting, texts, typingSpeed]);
  
  return <span>{currentText}<span className="animate-pulse">|</span></span>;
}; 
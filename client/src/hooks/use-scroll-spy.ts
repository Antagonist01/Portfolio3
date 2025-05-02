import { useState, useEffect } from "react";

export const useScrollSpy = (
  ids: string[],
  options: { offset: number } = { offset: 0 }
) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id));
    
    const onScroll = () => {
      const scrollPosition = window.scrollY + options.offset;
      
      for (let i = elements.length - 1; i >= 0; i--) {
        const element = elements[i];
        if (!element) continue;
        
        const offsetTop = element.offsetTop;
        
        if (scrollPosition >= offsetTop) {
          setActiveId(ids[i]);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", onScroll);
    onScroll(); // Call once to set initial state
    
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, options.offset]);
  
  return activeId;
};

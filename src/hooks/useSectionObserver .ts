import { useEffect } from "react";

interface Section {
  ref: React.RefObject<HTMLElement>;
  id: string;
}

export const useSectionObserver = (
  sections: Section[],
  setCurrentHash: (hash: string) => void
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (s) => s.ref.current === entry.target
            );
            if (section) setCurrentHash(section.id);
          }
        });
      },
      { threshold: 0.7,
        rootMargin: "0px 0px -50% 0px"
       }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [sections, setCurrentHash]);
};

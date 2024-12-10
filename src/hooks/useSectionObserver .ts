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
    const getRootMargin = () => {
      const width = window.innerWidth;
      if (width < 530) {
        return "0px 20% 0px 0px";
      } else if (width < 1024) {
        return "0px 0px -20% 0px";
      } else {
        return "0px 0px -40% 0px";
      }
    };
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
      { threshold: 0.9,
        rootMargin: getRootMargin()
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

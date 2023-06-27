import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./EmblaCarousel.scss";

export const EmblaCarousel = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">{children}</div>
    </div>
  );
};

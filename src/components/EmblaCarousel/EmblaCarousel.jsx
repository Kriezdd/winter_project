import React, {useCallback} from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./EmblaCarousel.scss";

export const EmblaCarousel = ({children}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, dragFree: true, align: "start"});

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">{children}</div>
        </div>
    );
};

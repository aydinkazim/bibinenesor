import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useInView } from "framer-motion";
import { Container } from "./Container";
import Image from "next/image";

import r1 from "../images/reviews/r1.png";
import r2 from "../images/reviews/r2.png";
import r3 from "../images/reviews/r3.png";
import r4 from "../images/reviews/r4.png";
import r5 from "../images/reviews/r5.png";
import r6 from "../images/reviews/r6.png";
import r7 from "../images/reviews/r7.png";
import r8 from "../images/reviews/r8.png";
import r9 from "../images/reviews/r9.png";
import r10 from "../images/reviews/r10.png";
import r11 from "../images/reviews/r11.png";
import r12 from "../images/reviews/r12.png";
import r13 from "../images/reviews/r13.png";

const reviews = [
  {
    src: r1,
    alt: "Arabamın aküsü neden sürekli boşalıyor?",
  },
  {
    src: r2,
    alt: "Motor neden aşırı ısınıyor?",
  },
  {
    src: r3,
    alt: "Frenler neden gıcırdıyor?",
  },
  {
    src: r4,
    alt: "Egzozdan neden siyah duman çıkıyor?",
  },
  {
    src: r5,
    alt: "BMW x5 30d M Sport için bir yorum Bu araç gerçekten bambaşka pişman olmayacaksınız mutlaka alıp kısa bir süre bile olsa tadına bakın.",
  },
  {
    src: r6,
    alt: "Alfa Romeo Gulia 2.0 T Sprint için bir yorum Konfor, makam, hız, prestij ne isterseniz yıldızda. Al bakımını yap 1 milyon km bin arkana yaslan.",
  },
  {
    src: r7,
    alt: "Fiat Egea 1.6 Multijet için bir yorum Fiyat performans aracı çok fazla benklentiniz olmasın ama asla pişman etmez peynir ekmek gibi istediğiniz zaman satarsınız rahat olun bu devirde alınabilir.",
  },
  {
    src: r8,
    alt: "Tesla Model Y için bir yorum Tam bir servis aracı yakıtı kokluyor kokluyor. Çok gezen şehir içi çok araba kullanan birisi için gayet ideal. Kaportası kağıt ama fiyatı da ona göre",
  },
  {
    src: r9,
    alt: "Honda Civic 1.6 Trend için bir yorum Boş yere taksi aracı olarak tercih edilmiyor bu araba sanayiye uğramazsınız lpg takarsan yakıtı elektrikli araçlarla kapışır uzun yolda.",
  },
  {
    src: r10,
    alt: "Alfa Romeo Gulia 2.0 T Sprint için bir yorum Kullanım olarak memnunum aslında premium hissiyatı da var ancak parça bulmakta zorlanıyorum bazen burda pek piyasası olmadığı için de zor satıyor biraz",
  },
  {
    src: r11,
    alt: "Yakıt tüketimi çok fazla, nasıl düşürebilirim?",
  },
  {
    src: r12,
    alt: "Arabamın koltukları nasıl temizlenir?",
  },
  {
    src: r13,
    alt: "Arabamın koltukları nasıl temizlenir?",
  },
];

function Review({ src, alt, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <figure
      className={clsx(
        "animate-fade-in rounded-3xl bg-white opacity-0 shadow-md shadow-gray-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Image src={src} alt={alt} />
    </figure>
  );
}

function splitArray(array, numParts) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef();
  let [columnHeight, setColumnHeight] = useState(0);
  let duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={clsx("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  );
}

function ReviewGrid() {
  let containerRef = useRef();
  let isInView = useInView(containerRef, { once: true, amount: 0.4 });
  let columns = splitArray(reviews, 3);
  columns = [columns[0], columns[1], splitArray(columns[2], 2)];

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  "md:hidden",
                reviewIndex >= columns[0].length && "lg:hidden"
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && "lg:hidden"
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Herkes merak ettiklerini Bi&apos; Binene Sor &apos;uyor
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Her gün binlerce kişi merak ettikleri soruları ve deneyimlerini burada
          paylaşıyor
        </p>
        <ReviewGrid />
      </Container>
    </section>
  );
}

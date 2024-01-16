import { useId } from "react";
import Image from "next/image";

import { Container } from "./Container";
import { AppStoreLink } from "./AppStoreLink";
import { PhoneFrame } from "./PhoneFrame";
import { AppScreen } from "./AppScreen";
import splashScreen from "../images/splash_screen2.png";
import qrCode from "../images/qr-code.png";
import Link from "next/link";

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BackgroundIllustration(props) {
  let id = useId();

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ff5b5b" />
            <stop offset="1" stopColor="#ff5b5b" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ff5b5b" />
            <stop offset="1" stopColor="#ff5b5b" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <div className="overflow-hidden py-20 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="-mt-10 relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              Bi&apos; Binene Sor
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Araçlar ve taşıtlarla ilgili merak ettiklerinizi sormak, bilgi
              alışverişinde bulunmak ve deneyimlerinizi diğer insanlarla
              paylaşmak için Bi&apos;Binene Sor uygulamasını keşfedin!
            </p>
            {/* <p className="mt-6 text-lg text-gray-600">
              Servise vesanayiye gitmeden önce deneyimli ve bilgi sahibi olan
              kullanıcıların fikir ve görüşlerini alarak pratik çözümler bulun,
              maliyetlerinizi düşürün!
            </p> */}
            <p className="mt-6 text-lg text-gray-600">
              Araç satın almadan önce veya merak ettiğiniz bir araç hakkında, o
              aracı deneyimlemiş kişilerin yorum ve puanları sayesinde fikir
              edinin!
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <AppStoreLink />
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppScreen>
                  <Image src={splashScreen}></Image>
                </AppScreen>
              </PhoneFrame>
            </div>
          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:self-auto lg:p-6">
              <div className="relative flex h-24 w-24 flex-none items-center justify-center">
                <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-carnation-500" />
                <Image src={qrCode} alt="" unoptimized className="p-1.5" />
              </div>
              <div className="ml-8 lg:w-64">
                <p className="text-base font-semibold text-gray-900">
                  <Link
                    target="_blank"
                    href="https://open.spotify.com/intl-tr/track/5sDfdy2KjGQYZQKmII5Vwy?si=9a003a63a2dc4e51"
                  >
                    <span className="absolute inset-0 sm:rounded-2xl" />
                    Uygulamayı İndir
                  </Link>
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  Uygulamayı App Store&apos;dan indirmek için QR kodunu tarayın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

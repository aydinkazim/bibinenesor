import Image from "next/image";
import Link from "next/link";

import qrCode from "../images/qr-code.png";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { TextField } from "./Fields";
import { Container } from "./Container";
import { Button } from "./Button";

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

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logo />
              <div className="ml-4">
                <p className="text-base font-semibold">biBineneSor</p>
                <p className="mt-1 text-sm">Deneyim paylaşma noktası.</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
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
                Uygulamayı App Store'dan indirmek için QR kodunu tarayın.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <form className="flex w-full justify-center md:w-auto">
            <TextField
              type="email"
              aria-label="E-posta adresi"
              placeholder="E-posta adresi"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" color="cyan" className="ml-4 flex-none">
              <span className="hidden lg:inline">Bültenimize katıl</span>
              <span className="lg:hidden">Bültene katıl</span>
            </Button>
          </form>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. Tüm hakları saklıdır.
          </p>
        </div>
      </Container>
    </footer>
  );
}

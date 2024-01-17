import { AppStoreLink } from "./AppStoreLink";
import { CircleBackground } from "./CircleBackground";
import { Container } from "./Container";

export function CallToAction() {
  return (
    <section
      id="start"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#ff5b5b" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Araç dünyasında yolculuğa çık
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Kullanıcı dostu platform olan Bi&apos;Binene Sor&apos;da her detayı
            öğren, bilinçli seçimler yap! Araç alımı yapmadan önce merak
            ettiğiniz bir araç hakkında o aracı deneyimlemiş kişilerin yorum ve
            puanları sayesinde fikir edinin
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreLink color="white" />
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PrimaryFeatures } from "./components/PrimaryFeatures";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <PrimaryFeatures />
        <Footer />
      </main>
    </>
  );
}

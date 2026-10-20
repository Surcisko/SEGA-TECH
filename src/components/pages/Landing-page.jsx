import { Footer } from "../landing-page/Footer";
import { Hero } from "./Hero";
import { Cta } from "../landing-page/Cta";
import { Banner } from "../landing-page/Banner";
import { WriteUp } from "../landing-page/WriteUp";
import { PreviewProduct } from "../landing-page/PreviewProduct";

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <Banner />
      <WriteUp />
      <PreviewProduct />
      <Cta />
      <Footer />
    </>
  );
};

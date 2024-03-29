import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/herosection/HeroSection";
import Filter from "../../components/filter/Filter";
import Testimonial from "../../components/testimonial/Testimonial";
import ProductCard from "../../components/productCard/ProductCard";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Testimonial />
    </Layout>
  );
}

export default Home;

"use client"
import Fonts from "@/components/fonts";
import Hero from "@/components/hero";
import Products from "./products/page";
import Sell from "./products/sell";
import Grid from "@/components/grid";
import CustomerCarousel from "@/components/carousel";
import Casual from "./casuals/page";

export default function Home() {
  return (
  <div>
   
    <Hero/>
    <Fonts/>
    <Products/>
    <Sell/>
    <Grid/>
    <CustomerCarousel/>

   
  </div>
  );
}

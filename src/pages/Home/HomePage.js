import { Hero } from "./components/Hero"
import { FeaturedProducts } from "./components/FeaturedProducts"
import { Testimonials } from "./components/Testimonials"
import { Faq } from "./components/Faq"
import { UseTitle } from "../../hooks/UseTitle"



export const HomePage = () => {
  UseTitle("Access Latest Computer Science eBooks")

  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  )
}

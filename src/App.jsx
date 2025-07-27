import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Story from "./components/Story";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className='min-h-dvh w-screen'>
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
    </main>
  );
};

export default App;

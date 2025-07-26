import About from "./components/About";
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
      <section className='bg-blue-75 h-dvh'></section>
    </main>
  );
};

export default App;

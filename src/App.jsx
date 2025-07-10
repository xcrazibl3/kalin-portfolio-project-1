import About from "./components/About";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className='min-h-dvh w-screen'>
      <Hero />
      <About />
      <section className='bg-blue-75 h-dvh'></section>
    </main>
  );
};

export default App;

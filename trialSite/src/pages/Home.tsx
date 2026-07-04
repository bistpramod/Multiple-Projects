import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = () => {
    return <>
     
      {/* 
      <Featured /> */}
     
       <Hero />
      <section id="featured">
        <Featured />
      </section>
      <section id="footer"><Footer/></section>

     


    </>;
  };
  
  export default Home;
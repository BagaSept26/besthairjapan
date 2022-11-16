import './App.css';
import Hero from './components/pages/Hero';
import Service1 from './components/pages/Service1';
import Section from './components/pages/Section';
import Section1 from './components/pages/Section1';
import Details from './components/pages/Details';
import Kontak from './components/pages/Kontak';
import Contact from './components/pages/Contact';
import {satu, dua, tiga, empat, slider1, slider2, slider3, slider4} from './components/pages/data';
import Garis from './components/pages/Garis';
import Doctor from './components/pages/Doctor';
import {Heading} from './components/variables/Planets';
import Footer from './components/pages/Footer';
import Comparisonu from './components/pages/Comparisonu';
import Carousel from './components/pages/Carousel';
import C1 from './components/pages/C1';
function App() {
  return (
    <div className='h-full bg-about bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
      <Hero/>
      <Section1/>
      <Service1/>
      <Section/>
      <Details/>
      <Garis/>
      <Heading id="Cara Pesan" className='bg-space bg-center bg-cover text-center '>CARA MEMESAN PADA KAMI</Heading>
      <Contact {...satu}/>
      <Contact {...dua}/>
      <Contact {...tiga}/>
      <Contact {...empat}/>
      <Doctor id="Doctor"/>
      <Kontak/>
      <Heading className='bg-space bg-right text-center text-black pt-10 pb-20'>Sebelum & Sesudah</Heading>
      <Comparisonu {...slider1}/>
      <h1 className=' text-3xl text-black text-center pb-10'>2400 Cangkok</h1>
      <Comparisonu {...slider2}/>
      <h1 className=' text-3xl text-black text-center pb-10'>4900 Cangkok</h1>
      <Comparisonu {...slider3}/>
      <h1 className=' text-3xl text-black text-center pb-10'>5100 Cangkok</h1>
      <Carousel/>
      <C1/>
      <Footer/>
      
      <div className='h-[380px] md:h-[370px]'></div>
      
    </div>
  );
}

export default App;

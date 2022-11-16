import React,{useState} from 'react';
import Harga from '../pages/Harga';
import Harga1 from '../pages/Harga1';
import Harga2 from '../pages/Harga2';
import { motion } from 'framer-motion';
import { plateVariants, staggerContainer, fadeIn } from '../pages/variants';

const Section = () => {

  const [text,setText] = useState('first-con')






  return (

    <section className=' min-h-[620px] bg-pattern bg-cover'>

    <div className='container  mx-auto min-h-[620px] '>
      
      <motion.div 
      variants={staggerContainer} 
      whileInView={'show'}
      viewport={{ once: false, amount: 0.6 }}
      className='min-h-[620px] flex flex-col lg:flex-row items-center'>
      
      <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1.8)}
            className='flex-1 text-center lg:text-left justify-around pb-10'
          >
            <button 
            className='pr-5 backdrop-blur uppercase cursor-pointer text-white font-bold' 
            onClick={() => setText('first-con')}>HARGA</button>
            <button className='backdrop-blur uppercase cursor-pointer text-white font-bold' onClick={() => setText('second-con')}>FUE / HI<br/>(CHOI PENS)</button>
            <button className='pl-5 backdrop-blur uppercase cursor-pointer text-white font-bold' onClick={() => setText('third-con')}>TRANSPLANTASI <br/> RAMBUT</button>
      </motion.div>
      
      <motion.div 
      variants={plateVariants}
      whileInView={'show'}
      viewport={{ once: false, amount: 0.6 }}
          className='  z-10'>
        
          {text === 'first-con' && <Harga/> }
          {text === 'second-con'&& <Harga1/> }
          {text === 'third-con' && <Harga2/>}
      
      </motion.div>
      
      </motion.div>
      
  
  
  </div>
  </section>
  );
};

export default Section;

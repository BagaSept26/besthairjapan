import React from 'react';
// import data
import { aboutData } from '../pages/data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { plateVariants, staggerContainer, fadeIn } from '../pages/variants';

const Section1 = () => {
  // destructure data
  const { pretitle, title, subtitle, btnText, image } = aboutData;
  return (
    <section className=' bg-[#008b8b] min-h-[700px]'>
      <div className=' bg-about mx-auto min-h-[620px] rounded-tl-[100px] rounded-br-[200px]'>
        {/* text & image wrapper */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='px-5 min-h-[620px] flex flex-col lg:flex-row items-center'
        >
          {/* text */}
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1.8)}
            className='flex-1 text-center lg:text-left'
          >
            <div className='pretitle'>{pretitle}</div>
            <h2 className='h2 capitalize'>{title}</h2>
            <p className='mb-8 max-w-[560px] text-justify text-black'>{subtitle}</p>
            
          </motion.div>
          {/* image */}
          <motion.div
            variants={plateVariants}
            className='-mb-[100px] -mr-[50px] w-[300px] lg:w-[400px] z-10'
          >
            <img src={image} alt=''
             />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;

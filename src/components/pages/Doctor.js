import React from 'react';
// import data
import { teamData } from '../pages/data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../pages/variants';

const Team = () => {
  // destructure team data
  const {
    pretitle,
    title,
    sub1,
    sub2,
    name,
    occupation,
    signatureImg,
    Docimg,
  } = teamData;
  return (
    <section className='bg-about relative top-20 z-10 lg:top-[20px] min-h-[720px]'>
      <div className='container mx-auto'>
        {/* text & image wrapper */}
        <div className='flex flex-col lg:flex-row lg:gap-x-[120px] items-center lg:items-start'>
          {/* text */}
          <motion.div
            variants={fadeIn('down', 'tween', 0.6, 1.6)}
            initial='hidden'
            whileInView={'show'}
            className='flex-1 text-center lg:text-left lg:pt-20'
          >
            <div className='pretitle'>{pretitle}</div>
            <h2 className='h2 capitalize'>{title}</h2>
            <p className='mb-[60px] text-justify'>{sub1}</p>
            <p className='text-justify'>{sub2}</p>
            <div className='my-[26px]'>
              <div className='text-2xl capitalize font-semibold text-accent'>
                {name}
              </div>
              <div className='text-[15px] font-semibold capitalize text-grey/70'>
                {occupation}
              </div>
            </div>
            <div className='flex justify-center lg:justify-start mb-6 lg:mb-0'>
              <img src={signatureImg} alt='' />
            </div>
          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.7, 1.6)}
            initial='hidden'
            whileInView={'show'}
            className='flex-1 lg:pt-20'
          >
            <img src={Docimg} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;

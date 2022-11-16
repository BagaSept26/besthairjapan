import React, {useEffect} from 'react';
// import data
import { heroData } from '../pages/data';
// import components
import Header from './Header';

// import motion
import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";
import { ButtonContainer, ButtonWrapper, HeroButton } from '../pages/data';
// import variants
import { fadeIn, staggerContainer } from '../pages/variants';
import { useInView } from 'react-intersection-observer';
const Hero = () => {
  // destructure hero data
  const { ref, inView } = useInView({
		rootMargin: '-100px',
	});
  useEffect(() => {
		console.log(inView);
	}, [inView]);
  const { pretitle, title, subtitle, btnText } = heroData;
  return (
    <section className='min-h-[980px] bg-hero bg-cover bg-center'>
      {/* header */}
      <Header />
      <div className='container mx-auto min-h-[980px] flex justify-center items-center'>
        {/* text */}
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial='hidden'
          whileInView={'show'}
          className='text-black text-center flex flex-col items-center'
        >
          {/* pretitle */}
          <motion.div
            variants={fadeIn('down', 'tween', 0.2, 1.1)}
            className='text-black text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1'
          >
            {pretitle}
          </motion.div>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 'tween', 0.3, 1.1)}
            className='h1 mb-5'
          >
            {title}
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 'tween', 0.4, 1.1)}
            className='text-black max-w-[540px] mb-8'
          >
            {subtitle}
          </motion.p>
          {/* button */}
          <motion.div variants={fadeIn('down', 'tween', 0.5, 1.1)}>
          <ButtonContainer ref={ref}>
						<ButtonWrapper>
							<HeroButton onClick={"toggleModal"} className={inView ? '' : 'corner'}>
								{inView ? (
									<> KONSULTASI</>
								) : (
									<FaWhatsapp color="Green" size="2.3rem" />
								)}
							</HeroButton>
						</ButtonWrapper>
					</ButtonContainer>
          </motion.div>
        </motion.div>
      </div>
      
      
      
    </section>
    
  );
  
};

export default Hero;

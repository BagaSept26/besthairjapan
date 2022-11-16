import React from 'react';
// logo
import LogoImg from '../assets/logo1.png';
// nike img
import NikeImg from '../assets/sv3.png';

// import framer hooks
import { useMotionValue, useTransform, motion } from 'framer-motion';

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const colors = [
    { value: '#b6a179' },
    { value: '#272425' },
    { value: '#6389cb' },
    { value: '#f2c758' },
    { value: '#ffffff' },
  ];

  return (
    // card wrapper
    <div style={{ perspective: 2000 }}>
      {/* card */}
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='container w-min bg-[#008b88]/50 backdrop-blur rounded-[30px] px-[40px] py-[24px] cursor-grab relative'
      >
        {/* card logo */}
        <div className='mb-6'>
          <img src={LogoImg} alt='' />
        </div>
        {/* card title */}
        <h1 className='text-3xl mb-6 font-extrabold text-white'>TRANSPLANTASI RAMBUT</h1>
        {/* card subtitle */}
        <p className='max-w-[300px] text-[#ffffff] font-semibold mb-6 subpixel-antialiased'>
          3 hari Perjalanan <br/>
          8 Jam Pengerjaan <br/>
          100% tidak sakit <br/>
          HI/ CHOI Pens <br/>
          Akomodasi Kendaraan <br/>
          Akomodasi Penginapan <br/>
          Jaminan & Pengawasan Setiap Saat.
        </p>
        {/* btn & price wrapper */}
        <div className='flex items-center gap-x-[20px] mb-12'>
          <button className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg'>
            KONSULTASI
          </button>
          <div className='text-[24px] font-bold text-[#000000]'>Rp.</div>
        </div>
        {/* colors */}
        
        {/* card image */}
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100000 }}
          className='absolute top-32 -right-2 w-[150px]'
        >
          <img src={NikeImg} alt='' draggable='false' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;

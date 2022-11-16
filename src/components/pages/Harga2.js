import React from 'react';
// logo
import LogoImg from '../assets/logo1.png';


// import framer hooks
import { useMotionValue, useTransform, motion } from 'framer-motion';


const Harga = () => {
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
    <div style={{ perspective: 2000 }} >
      {/* card */}
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='container bg-[#008b8b]/40 rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative '
      >
        {/* card logo */}
        <div className=' mb-6 backdrop-blur-100'>
        <img 
        src={LogoImg}
        width='50%'
        backdrop-filter= 'blur(1rem)'
        alt='' />
        </div>
        {/* card title */}
        
        {/* card subtitle */}
        <p className='max-w-[500px] text-justify backdrop-blur text-[#faebd7] mb-6 subpixel-antialiased font-semibold tracking-tight'>
        Di BEST HAIR IN INDONESIA, kami telah mendirikan basis di Asia dan telah menyediakan transplantasi rambut diri yang mutakhir kepada orang-orang di seluruh dunia dengan tema “sejuk seumur hidup”.
        </p>
        {/* btn & price wrapper */}
        
        
        
        {/* card image */}
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100000 }}
          className='absolute top-75 w-[150px] -left-50 -right-40 z-15'
        >
          <img src="assets/sv3.png" alt='' draggable='false' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Harga
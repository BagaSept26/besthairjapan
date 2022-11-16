import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import f1 from '../assets/feature_01.png';
import f2 from '../assets/feature_02.png';
import f3 from '../assets/feature_03.png';
import f4 from '../assets/feature_04.png';
import f5 from '../assets/feature_05.png';
import f6 from '../assets/feature_06.png';
import f7 from '../assets/feature_07.png';
import f8 from '../assets/feature_08.png';
import {FeatureTitle} from '../variables/Nature';

const Details = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animationLR = useAnimation();
  const animationBT = useAnimation();
  const animationRL = useAnimation();
  const animationTB = useAnimation();
  const pathAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      animationLR.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "fade",
          duration: 1,
        },
      });
      animationRL.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "fade",
          duration: 1,
        },
      });
      animationBT.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "ease-out",
          duration: 1,
        },
      });
      animationTB.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "ease-out",
          duration: 1,
        },
      });
      pathAnimation.start({
        opacity: 1,
        pathLength: 1,
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      });
    }
    if (!inView) {
      animationLR.start({ opacity: 0, x: "-30px" });
      animationBT.start({ opacity: 0, y: "30px" });
      animationTB.start({ opacity: 0, y: "-30px" });
      animationRL.start({ opacity: 0, x: "30px" });
      pathAnimation.start({ opacity: 0, pathLength: 0 });
    }
  }, [inView]);
  return (
    <section className='bg-[#008b8b]'>
    <div
      ref={ref}
      className="w-full h-auto bg-about rounded-tl-[100px] rounded-br-[100px] rounded-bg-[#008b8b] pt-10 pb-10 mt-100"
    >
      <div className="relative">
        <div className="pt-12">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
            <FeatureTitle className='text-black'>FITUR YANG KAMI BERIKAN</FeatureTitle>
              <p className="py-2">
                Dengan melakukan PERJALANAN MEDIS bersama kami. fitur yang kami berikan.
              </p>
            </div>
            <div className="grid w-[80%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 justify-center items-center text-black">
              <motion.div
                animate={animationLR}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <img src={f1} alt="besthair" className="w-[80px] h-[70px]"/>
                </div>
                <h1 className="pb-4 text-3xl">BEBAS LAYANAN KONSULTASI</h1>
                <p className="pb-6 text-justify">
                  di BEST HAIR JAPAN in INDONESIA kami memberikan layanan bebas konsultasi
                </p>
                <button className="pb-2 text-red-600 underline">
                  
                </button>
              </motion.div>
              <motion.div
                animate={animationTB}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <img src={f2} alt="besthair" className="w-[80px] h-[70px]"/>
                </div>
                <h1 className="pb-4 text-3xl">TEKNOLOGI MEDIS YANG CANGGIH</h1>
                <p className="pb-6 text-justify">
                Kami menggunakan metode transplantasi rambut FUE mutakhir, yang tidak menggunakan pisau bedah.
                </p>
                
              </motion.div>
              <motion.div
                animate={animationRL}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <img src={f3} alt="besthair" className="w-[80px] h-[70px]"/>
                </div>
                <h1 className="pb-4 text-3xl">HARGA TERENDAH</h1>
                <p className="pb-6 text-justify">
                Kami membuat kontrak langsung dengan klinik lokal dan mewujudkan harga terendah di Indonesia. Tentu saja, tidak peduli negara mana yang Anda pilih, semua klinik bebas untuk menanam.
                </p>
                
              </motion.div>
              <motion.div
                animate={animationLR}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <img src={f4} alt="besthair" className="w-[80px] h-[70px]"/>
                </div>
                <h1 className="pb-4 text-3xl">KEPUASAN PELANGGAN NO.1</h1>
                <p className="pb-6 text-justify">
                Kami mempertahankan tingkat pengerjaan yang andal sebesar 99%, dan banyak orang sangat senang.
                </p>
                
              </motion.div>
              <motion.div
                animate={animationBT}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <img src={f5} alt="besthair" className="w-[80px] h-[70px]"/>
                </div>
                <h1 className="pb-4 text-3xl">3 HARI Pengerjaan</h1>
                <p className="pb-6 text-justify">
                Bahkan mereka yang tidak bisa berlibur panjang dapat menikmati wisata medis hanya dalam tiga hari.<br></br> 
                *Tanggal dan waktu mungkin berbeda tergantung pada tujuan.
                </p>
                
              </motion.div>
              <motion.div
                animate={animationRL}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <img src={f6} alt="besthair" className="w-[80px] h-[70px]"/>
                </div>
                <h1 className="pb-4 text-3xl">JAMINAN PERAWATAN ULANG</h1>
                <p className="pb-6 text-justify">
                Jika rambut tidak tumbuh setelah satu tahun dari perawatan, kami memiliki jaminan perawatan ulang.
                </p>
                
              </motion.div>
              <motion.div
                animate={animationRL}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <img src={f7} alt="besthair" className="w-[80px] h-[70px]"/>
                </div>
                <h1 className="pb-4 text-3xl">DUKUNGAN PASCA OPERASI</h1>
                <p className="pb-6 text-justify">
                Setelah kembali ke Jepang, kami juga memberikan konsultasi dan saran tentang perawatan dan kemajuan kulit kepala.
                </p>
                
              </motion.div>
              <motion.div
                animate={animationRL}
                className="w-[350px] h-[400px] bg-[#F9F9FC] border-2 border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4"
              >
                <div className="pb-4">
                <img src={f8} alt="besthair" className="w-[80px] h-[70px]"/>
                </div>
                <h1 className="pb-4 text-3xl">SISTEM PENDAMPING</h1>
                <p className="pb-6 text-justify">
                Untuk pelanggan yang pertama kali bepergian ke luar negeri, kami akan menemani mereka dari keberangkatan hingga kembali ke Indonesia<br></br>
                 (tiket pesawat terpisah untuk pendamping).
                </p>
                
              </motion.div>
            </div>
          </div>
        </div>
        
        <motion.div
          animate={animationBT}
          className="absolute left-[220px] top-[25px] md:top-[25px] md:left-[750px] lg:top-[25px] lg:left-[750px] z-[99]"
        >
          
        </motion.div>
        <motion.div
          animate={animationRL}
          className="absolute left-[170px] top-[-55px] md:top-[-55px] md:left-[700px] lg:top-[-55px] lg:left-[700px] z-[99]"
        >
          
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Details;

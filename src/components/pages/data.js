
import styled from 'styled-components';
import {
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';
import QuestionMarkIcn from '../assets/question-mark.svg';
import { motion } from 'framer-motion';
import Docimg from '../assets/doc.png';
import AboutImg from '../assets/logo.png';
import f1 from '../assets/flow01.jpg';
import f2 from '../assets/flow02.jpg';
import f3 from '../assets/flow03.jpg';
import f4 from '../assets/flow04.jpg';
import {  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import originalImage from '../assets/case02.jpg';
import modifiedImage from '../assets/case03.jpg';

import original1 from '../assets/case3.png';
import modified1 from '../assets/case4.png';

import osxDay from '../assets/case5.png';
import osxNight from '../assets/case6.png';
export const heroData = {
  pretitle: 'TRANSPLANTASI RAMBUT',
  title: 'BEST HAIR JAPAN IN INDONESIA',
  subtitle:'',
  btnText: 'KONSULTASI',
};

export const navData = [
  { href: '/', name: 'Pelayanan Kami' },
  { href: '/', name: 'Fitur Kami' },
  { href: '/Cara Pesan', name: 'Cara Memesan' },
  { href: '/', name: 'Sebelum & Sesudah' },
  { href: '/', name: 'Doctor' },
  { href: '/', name: 'Kontak Kami' },
  { href: '/', name: 'Faq' },

];

export const aboutData = {
    pretitle: 'TENTANG TRANSPLANTASI RAMBUT',
    title: 'BEST HAIR JAPAN IN INDONESIA',
    subtitle:
      'Di BEST HAIR JAPAN IN INDONESIA, kami telah mendirikan basis di Asia dan telah menyediakan transplantasi rambut diri yang mutakhir kepada orang-orang di seluruh dunia dengan tema "SEGAR SEUMUR HIDUP".Selain metode transplantasi rambut FUE & HI yang berkualitas tinggi dan terkenal, bahkan mereka yang baru di luar negeri dapat menikmatinya dengan aman dan nyaman, dan kami akan memberikan "PERJALANAN TRANSPLANTASI RAMBUT" dengan keyakinan bahwa tingkat transplantasi rambut adalah 99 %. BEST HAIR JAPAN IN INDONESIA, mementingkan No 1 dalam kepuasan pelanggan, dipilih oleh banyak orang.',
    btnText: 'find out more',
    image: AboutImg,
    
  };

  export const socialData = [
    
    { href: '/', icon: <FaFacebookF /> },
    { href: '/', icon: <FaInstagram /> },

  ];


  export const teamData = {
    pretitle: 'Doctor',
    title: 'Doctor yang menangani',
    sub1: ' Dr.murat Sener adalah penting dalam diagnosis penyakit kardiovaskular dapat diukur dari memiliki “pasien yang hidupnya sangat penting bagi kehidupan pasiennya dengan mengembangkannya dengan angiografi dari pergelangan tangan. Publikasi dan artikel Turki dan Turki Pada akhir 2016 transplantasi rambut dan Klinik Estetika Medis 3000 – 3500 layanan kepada pasien kami dan untuk mengevaluasi secara merata terkait dengan tingginya tingkat transplantasi rambut yang diberikan.',
    sub2: 'Pada akhir 2016 ada 3000 – 3500 layanan kepada pasien dan untuk mengevaluasi secara merata terkait dengan tingginya tingkat transplantasi rambut yang diberikan. Mulai bulan Oktober ini, akan digunakan untuk memberikan kualitas yang lebih baik, lebih spesifik, layanan berbasis fakta kepada teman-teman kita yang ingin meminta transplantasi rambut.',
    name: 'Dr. Murat SENER',
    occupation: 'Specialist Cardiologist',
    
    Docimg: Docimg,
  };


  export const ButtonWrapper = styled.div`
	position: absolute;
	height: 100vh;
	width: 100%;
	left: 0;
	top: 0;
`;

export const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	height: 170px;
`;
  export const HeroButton = styled(motion.button)`
	position: absolute;
	width: 250px;
	margin: 0 auto;
	padding: 15px 20px;
	bottom: calc(100vh - 100px);
	right: 50%;
	transform: translate(50%);
	font-weight: 700;
	font-size: 0.688rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	border-radius: 25px;
	border: none;
	background-color: green;
	color: #ffffff;
	cursor: pointer;
	transition: all 0.4s ease-in;

	&.corner {
		position: fixed;
		bottom: 3rem;
		right: 3rem;
		width: 64px;
		height: 64px;
		padding: 10px;
		background-color: #ffffff;
		border-radius: 50%;
	}

	&:hover {
		box-shadow: 0 0 9px 9px #ffffff;
		transition: box-shadow 0.3s ease-in;
	}
`;

export const contactData = {
  title: 'KONTAK KAMI:',
  info: [
    {
      title: 'Jl. Raya Puspiptek',
      subtitle:
        'Gedung A No.xx',
      address: {
        icon: <FaMapMarkerAlt />,
        name: 'Jl. Raya Puspiptek',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+62 000 0000',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'admin@besthairjapan.com',
      },
      link: 'Temukan di Google',
    },
    
  ],
  form: {
    name: 'Nama Anda',
    email: 'Email Anda',
    message: 'Pesan Anda',
    btnText: 'Kirim',
  },
};


export const satu = {
	
	headline: 'Pertanyaan',
	description: 'Pertama, hubungi kami dari formulir pertanyaan di bagian bawah halaman, dan kami akan membalas dengan lembar dengar pendapat. Silakan mengisi lembar audiensi. ',
	
	imgStart: 'satu',
	imeg: f1,
	backgroundColor: '#ffffff',
	start: 'true',
};

export const dua = {
	reverse: true,
	headline: 'pemeriksaan dokter',
	description:
		"Dokter spesialis akan memeriksa foto yang Anda kirimkan untuk memastikan lokasi transplantasi rambut dan menentukan jumlah cangkokan. Pada saat yang sama, kami akan menentukan tujuan, hari perjalanan, dll.",
	imgStart: 'dua',
	imeg: f2,
	backgroundColor: '#ffffff',

	start: 'true',
};

export const tiga = {
	
	headline: "Aplikasi ",
	description:
		'Kami akan mengirimkan formulir aplikasi kepada Anda, jadi silakan isi dan balas.',
	imgStart: 'tiga',
	backgroundColor: '#ffffff',
	imeg: f3,
	start: 'true',
};

export const empat = {
	reverse: true,
	
	headline: 'Pembayaran',
	description: 'Setelah melengkapi aplikasi Anda, harap lakukan pembayaran ke lembaga keuangan yang ditunjuk selambat-lambatnya 10 hari sebelum tanggal keberangkatan Anda.',
	imgStart: 'empat',
	backgroundColor: '#fffff',
	imeg: f4,
	start: 'true',
};


export const newsletterData = {
  title: 'Gabung Bersama Kami',
  subtitle: 'Dapatkan info Terupdate seputar Transplantasi Rambut',
  placeholder: 'Gabung',
  btnText: 'Gabung Sekarang',
};

export const footerData = {
  contact: {
    title: 'Lokas',
    address: 'jl.Raya Puspiptek',
    phone: '+62 000 0000',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'Senin - Sabtu',
        hours: '09:00 AM - 17:00 PM',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },

    ],
  },
};



export const slider1 = {
  delay: 2000,
  original: {
      url: modifiedImage,
      title: 'Sesudah'
  },
  modified: {
      url: originalImage,
      title: 'Sebelum'
  }
};

export const slider2 = {
  original: {
      url: modified1,
      title: 'Sesudah'
  },
  modified: {
      url: original1,
      title: 'Sebelum'
  }
};

export const slider3 = {
  original: {
      url: osxNight,
      title: 'Sesudah'
  },
  modified: {
      url: osxDay,
      title: 'Sebelum'
  }
};


export const faq = {
  icon: QuestionMarkIcn,
  title: 'FAQ',
  accordions: [
    {
      question: 'Saya ingin melakukan perjalanan, apakah itu mungkin?',
      answer:
        'Tentu saja Anda bisa.',
    },
    {
      question: 'Apakah Anda menggunakan rambut Anda sendiri untuk transplantasi rambut?',
      answer:
        'Ya, saya melakukannya dengan rambut saya sendiri.',
    },
    {
      question: 'Apakah Anda memiliki garansi dan dukungan setelah Operasi?',
      answer:
        'Anda disana. Setelah kembali ke Jepang, kami juga memberikan konsultasi dan saran tentang perawatan dan kemajuan kulit kepala.',
    },
    {
      question: 'Berapa Rupiah yang harus saya bawa ke negara ini?',
      answer:
        'Anda dapat makan dan minum selama menginap dengan harga sekitar Rp 1.000.000 yen hingga Rp 3.000.000.',
    },
    {
      question: 'Apakah Anda tidak tersesat saat tiba di bandara setempat?',
      answer:
        'Yakinlah bahwa kami akan menunggu Anda dengan tanda BEST HAIR JAPAN INDONESIA.',
    },
    {
      question: 'Apakah mungkin bepergian selama krisis Covid-19?',
      answer:
        'Tidak ada efek jika Anda telah menyelesaikan dua vaksinasi. Jika Anda telah menyelesaikan 3 vaksinasi, tidak akan ada dampak tindakan karantina saat memasuki negara atau karantina hotel wajib setelah kembali ke rumah.',
    },
  ],
};
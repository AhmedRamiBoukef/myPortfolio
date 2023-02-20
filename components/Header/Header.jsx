import React from 'react'
import Image from "next/image";
import helloImage from '../../images/hello3.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {motion} from 'framer-motion'

import border from '../../images/marker.svg'

export const Header = () => {
  const scaleVariants = {
    whileInView: {
      opacity: [0,1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      }
    }
  }

  return (
    <motion.div whileInView={scaleVariants.whileInView} className='bgImage h-[100vh]'>
      <div className='h-[100vh] relative z-[1] place-content-center items-center mx-14 grid md:grid-cols-2 gap-6 tracking-wide'>
        <div className='w-2/3 md:w-full mx-auto' >
           <Image src={helloImage} alt="Hello" layout='responsive' />
        </div>
        <div className='leading-5 text-center md:text-left '>
          <p className='mb-2 text-xl font-light leading-6'>HELLO!</p>
          <div className='inline-block'>
            <h1 className='font-bold text-4xl '>I’m Ahmed Rami Boukef</h1>
            <div className='marker w-[30%] float-right'></div>
          </div>
          <p className='text-xl md:mt-8 md:mb-4'>FullStack Web & Mobile Developer</p>
          <div className='w-full flex gap-2 flex-wrap h-10 items-center justify-center md:justify-start'>
            <a href='https://github.com/AhmedRamiBoukef'><GitHubIcon className='w-5' /></a>
            <a href='https://www.facebook.com/profile.php?id=100023699016162'><FacebookIcon className='w-5'/></a>
            <a href='https://instagram.com/rami_boukef?igshid=YmMyMTA2M2Y='><InstagramIcon className='w-5'/></a>
            <a href='https://www.linkedin.com/in/ahmedrami-boukef-029678228'><LinkedInIcon className='w-5'/></a>
          </div>
          <div className='md:mt-10 mt-5'>
            <a href="" className='py-2.5 px-9 bg-[#f6e05e] transition ease-in-out duration-300 hover:bg-[#F4F6F8] hover:border-2 hover:border-[#f6e05e] rounded font-bold text-center'>
              Get In Touch
            </a>
          </div>
        </div>
        
      
      </div>
      <svg className='mysvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#F4F6F8" fill-opacity="10" d="M0,256L21.8,250.7C43.6,245,87,235,131,192C174.5,149,218,75,262,80C305.5,85,349,171,393,186.7C436.4,203,480,149,524,149.3C567.3,149,611,203,655,197.3C698.2,192,742,128,785,90.7C829.1,53,873,43,916,69.3C960,96,1004,160,1047,176C1090.9,192,1135,160,1178,138.7C1221.8,117,1265,107,1309,112C1352.7,117,1396,139,1418,149.3L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
      </svg>
    </motion.div>
  )
}

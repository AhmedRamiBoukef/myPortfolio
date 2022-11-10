import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  return (
    <div className='bg-[#F4F6F8] py-12 flex flex-col justify-center items-center gap-6'>
        <h1 className='font-semibold text-2xl'>Ahmed Rami</h1>
        <p className='text-base '>FullStack Web & Mobile Developer</p>
        <div className='w-full flex gap-2 flex-wrap h-10 items-center justify-center'>
          <a href='https://github.com/AhmedRamiBoukef'><GitHubIcon className='w-5' /></a>
          <a href='https://www.facebook.com/profile.php?id=100023699016162'><FacebookIcon className='w-5'/></a>
          <a href='https://instagram.com/rami_boukef?igshid=YmMyMTA2M2Y='><InstagramIcon className='w-5'/></a>
          <a href='https://www.linkedin.com/in/ahmedrami-boukef-029678228'><LinkedInIcon className='w-5'/></a>
        </div>
        <p>© All rights reserved.</p>
    </div>
  )
}

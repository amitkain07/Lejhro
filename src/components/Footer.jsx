import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>

        <div className='h-2 w-full bg-blue-600'></div>
    <div className='px-30 py-5'>
        <div className='flex flex-col gap-4 md:gap-1 md:flex-row justify-between'>
            <div>
                <h2 className='font-semibold text-xl'>Company</h2>
                <ul>
                    <li>Innovation</li>
                    <li>Business Services</li>
                    <li>Financial Services</li>
                    <li>Lejhro Recrument</li>
                    <li>About </li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div>
                <h2 className='font-semibold text-xl'>Programs</h2>
                <p>Lejhro Bootcamp</p>
            </div>
            <div>
                <h2 className='font-semibold text-xl'>Support</h2>
                <ul>
                    <li>Contact</li>
                    <li>Terms of Use</li>
                    <li>Privacy Statement</li>
                </ul>
            </div>
            <div className='flex flex-col items-center gap-5'>
                <h2 className='font-semibold text-xl '>Connect with us</h2>
                <div className='flex gap-4'>
                     <FaTwitter />
                     <FaFacebook />
                     <FaLinkedin />
                     <FaYoutube />
                </div>
            </div>

        </div>
        <div className='text-center py-2'>
            © 2025 LEJHRO. All Rights Reserved.
        </div>
    </div>
    </>
  )
}

export default Footer
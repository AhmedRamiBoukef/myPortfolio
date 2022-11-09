import React from 'react'
import { Title } from '../Shared/Title'

export const Contact = () => {
  return (
    <div className=' px-12 flex flex-col justify-center items-center mt-14' id='Contact'>
        <Title className="mx-auto mb-14" title="Contact"/>
        <div className='flex gap-6 mt-10'>
            <div className='leading-5 w-1/2'>
                <h1 className='text-xl mb-4 font-semibold'>Let’s talk how I can help you!</h1>
                <p className='mb-4'>If you like my work and want to avail my services then drop me a message using the contact form.</p>
                <p className='mb-4'>Or get in touch using my email, skype or my contact number.</p>
                <p className='mb-4'>See you!</p>
                <div className='grid md:grid-cols-[1fr_3fr] grid-cols-2 text-left '>
                    {[["Email:","ka_boukef@esi.dz"],["LinkedIn:","AhmedRami Boukef"],["Phone:","079999999"]].map(elem => (
                        <>
                            <h3 className='mb-2 ml-[50%] md:ml-0' key={elem[0]}>{elem[0]}</h3>
                            <h2 className='mb-2 font-semibold' key={elem[1]}>{elem[1]}</h2>
                        </>
                    ))}
                </div>

            </div>
            <form action="https://formspree.io/f/xknekqjv" method="post" className='w-1/2'>
                
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                <input name='name' type="text" id="text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="name" />
                
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input name='email' type="email" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="name@gmail.com" />

                <label for="Subject" class="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                <input name='subject' type="text" id="Subject" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Subject" />

                <label for="Message" class="block mb-2 text-sm font-medium text-gray-900">Message</label>
                <textarea name='message' type="text" id="Message" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />

                <div className='w-full p-2 flex justify-center items-center'>
                    <button type="submit" className='py-2.5 px-9 bg-[#f6e05e] transition ease-in-out duration-300 hover:bg-[#F4F6F8] hover:border-2 hover:border-[#f6e05e] rounded font-bold text-center'>Submit</button>
                </div>
            </form>

        </div>
        
    </div>
  )
}

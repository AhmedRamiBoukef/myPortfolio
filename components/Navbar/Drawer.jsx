import React, { useEffect } from "react";

export default function Drawer({ isOpen, setIsOpen }) {
    if (typeof window !== 'undefined') {
        const html = document.querySelector('html');
        if (html && isOpen) {
            html.style.overflow = 'hidden';
        } else {
            html.style.overflow = 'auto';
        }
    }
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          "flex flex-col justify-around items-center w-screen max-w-lg right-0 absolute bg-white h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
            <div className='flex flex-col justify-around items-center gap-6'>
                {["Home","About","Expertise","Skills","Projects","Contact"].map(elem => (
                    <a key={elem} onClick={() => {
                        setIsOpen(false);
                      }} href={`#${elem}`} className="font-semibold hover:text-[rgba(0,0,0,0.65)]">{elem}</a>
                ))}
            </div>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}

"use client"
import { IconAdjustmentsShare, IconArrowRight, IconRosetteDiscountCheck, IconWorld } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'

function AboutPage() {

  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const isInViewport = (el: HTMLDivElement) => {
    const rect = el.getBoundingClientRect();
    if (rect) {
      return rect?.top <= window.innerHeight && rect.bottom >= 0;
    }
  };

  useEffect(() => {

    const onLoad = () => {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);

        requestAnimationFrame(() => {
          refs.current.forEach((ref) => {
            if (ref && isInViewport(ref)) {
              ref.classList.remove('opacity-0');
              ref.classList.remove('translate-y-20');
              ref.classList.add('opacity-100');
            }
          });
        });
      });
    };

    const onScroll = () => {
      refs.current.forEach((ref) => {
        if (ref && isInViewport(ref)) {
          ref.classList.remove('opacity-0');
          ref.classList.remove('translate-y-20');
          ref.classList.add('opacity-100');
        }
      })
    }

    window.addEventListener('scroll', onScroll);
    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('DOMContentLoaded', onLoad);
      window.addEventListener('load', onLoad);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('load', onLoad);
      window.removeEventListener('DOMContentLoaded', onLoad);
    };

  }, [])

  return (
    <>
      <section className="pb-14 sm:pb-28 pt-40">
        <div className="flex lg:flex-row flex-col lg:items-center justify-center lg:px-24 md:px-12">
          <div className="sm:w-[600px] lg:w-2/3 px-4 sm:px-14 transform translate-y-20 transition-[opacity,transform] duration-700 delay-1000 opacity-0 lg:mb-0 mb-10" ref={(el) => { refs.current[0] = el }}>
            <span className="text-lg font-bold text-blue-700">THE RETRO STORY</span>
            <p className="xl:text-lg lg:text-base text-lg mt-6 mb-6">Retro respawn was established in Kigali, Rwanda in 2022, as part of a move to bring the focus of the betPawa brand’s global operations closer to its franchisees. As the owner of the betPawa brand, the placement of our HQ at the heart of Africa is a way for us to continue and accelerate growth, by being closer to the action.</p>

            <p className="xl:text-lg lg:text-base text-lg mb-6"> An investment hub and head office was built to better centralise and streamline our services to the rest of the continent, and to capitalise on the opportunities in new industries.</p>

            <p className="xl:text-lg lg:text-base text-lg mb-6">One of Mchezo’s roles is to reinvest betPawa’s revenue into diverse development opportunities across Africa. Mchezo has begun actively investing in the future of sports, entertainment and financial inclusion technology in Africa. </p>
          </div>
          <div className="w-full lg:w-1/2 px-4 sm:px-10 transform translate-y-20 transition-[opacity,transform] duration-500 delay-300 opacity-0" ref={(el) => { refs.current[1] = el }}>
            <img src="https://images.pexels.com/photos/7862509/pexels-photo-7862509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='object-cover rounded-xl lg:h-auto max-h-[600px] w-full' />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24" style={{ backgroundColor: 'rgb(246, 244, 255)' }}>
        <div className="lg:px-24 md:px-12">
          <div className='flex xl:flex-row flex-col'>
            <div className="flex flex-col self-start w-full lg:w-2/3 xl:w-1/2 px-4 sm:px-10 transform translate-y-20 transition-[opacity,transform] duration-500 delay-300 opacity-0 top-28 xl:mb-0 mb-6" ref={(el) => { refs.current[2] = el }}>
              <span className="text-lg font-bold text-blue-700">OUR VALUES</span>
              <h1 className="font-bold text-3xl sm:text-4xl mt-5">What we stand for</h1>
              <p className="text-lg text-slate-700 my-5">We play an active role in pushing for a more transparent industry. We believe that a level playing field ensures that the ultimate beneficiaries are those players and communities we exist to serve.</p>
              <Link href="/about" className="text-blue-600 font-semibold text-lg flex items-center mt-6">About us<IconArrowRight className="ml-1" style={{ marginTop: '2px' }} /></Link>
            </div>

            <div className="flex flex-col w-full xl:w-1/2 px-4 sm:px-10 transform translate-y-20 transition-[opacity,transform] duration-700 delay-500 sm:delay-1000 opacity-0" ref={(el) => { refs.current[3] = el }}>
              <div className="flex sm:flex-row flex-col shadow-md my-3 bg-white rounded-xl">
                <div className="flex justify-center items-center ml-5 mt-8 rounded-md h-14 w-[60px] xl:w-[20%]" style={{ backgroundColor: 'rgba(0,0,0,0.03)' }}>
                  <IconRosetteDiscountCheck fill="rgb(93, 95, 239)" color="white" size={44} />
                </div>
                <div className="pr-7 sm:pr-12 pl-5 pt-6 sm:pt-10 pb-6">
                  <h1 className="font-bold text-xl sm:text-2xl">Investment</h1>
                  <p className="text-lg text-slate-700 mt-5">We strive for sustainable growth by investing in industries and ideas that provide value to African consumers. </p>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col shadow-md my-3 bg-white rounded-xl">
                <div className="flex justify-center items-center ml-5 mt-8 rounded-md h-14 w-[60px] xl:w-[20%]" style={{ backgroundColor: 'rgba(0,0,0,0.03)' }}>
                  <IconWorld color="rgb(93, 95, 239)" size={34} />
                </div>
                <div className="pr-12 pl-5 pt-6 sm:pt-10 pb-6">
                  <h1 className="font-bold text-xl sm:text-2xl">Innovation</h1>
                  <p className="text-lg text-slate-700 mt-5">Being market leaders requires thinking differently. Staying ahead means new collaborations, opportunities and ideas.</p>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col shadow-md my-3 bg-white rounded-xl">
                <div className="flex justify-center items-center ml-5 mt-8 rounded-md h-14 w-[60px] xl:w-[20%]" style={{ backgroundColor: 'rgba(0,0,0,0.03)' }}>
                  <IconAdjustmentsShare color="rgb(93, 95, 239)" size={32} />
                </div>
                <div className="pr-12 pl-5 pt-6 sm:pt-10 pb-6">
                  <h1 className="font-bold text-xl sm:text-2xl">Integrity</h1>
                  <p className="text-lg text-slate-700 mt-5">We are guided by being open and honest about our intentions at all times, as integrity keeps our goals sustainable. </p>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col shadow-md my-3 bg-white rounded-xl">
                <div className="flex justify-center items-center ml-5 mt-8 rounded-md h-14 w-[60px] xl:w-[20%]" style={{ backgroundColor: 'rgba(0,0,0,0.03)' }}>
                  <IconRosetteDiscountCheck fill="rgb(93, 95, 239)" color="white" size={44} />
                </div>
                <div className="pr-12 pl-5 pt-6 sm:pt-10 pb-6">
                  <h1 className="font-bold text-xl sm:text-2xl">Investment</h1>
                  <p className="text-lg text-slate-700 mt-5">We strive for sustainable growth by investing in industries and ideas that provide value to African consumers. </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex lg:flex-row flex-col sm:pt-36 pt-24'>
            <h1 className='w-full lg:w-1/2 font-bold text-3xl sm:text-4xl px-4 sm:px-10 lg:mb-0 mb-10 transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 sm:delay-300 opacity-0' ref={(el) => { refs.current[4] = el }}>Our Mission and Vision</h1>
            <div className='w-full lg:w-1/2 flex flex-col px-4 sm:px-10 transform translate-y-20 transition-[opacity,transform] duration-700 sm:delay-1000 delay-500 opacity-0' ref={(el) => { refs.current[5] = el }}>
              <div className="flex flex-col shadow-md my-3 rounded-xl px-10 py-6" style={{ backgroundColor: 'rgb(93, 95, 239)' }}>
                <h1 className="font-bold text-2xl sm:text-3xl text-white">Mission</h1>
                <p className="text-lg text-slate-200 mt-3">To revolutionise the sports betting entertainment landscape by investing in the future of sport, entertainment and financial inclusion technology across Africa.</p>
              </div>
              <div className="flex flex-col shadow-md my-3 rounded-xl px-10 py-6" style={{ backgroundColor: 'rgb(93, 95, 239)' }}>
                <h1 className="font-bold text-2xl sm:text-3xl text-white">Vision</h1>
                <p className="text-lg text-slate-200 mt-3">To be the leading and most trusted brand in sports entertainment, fostering growth, innovation and inclusivity throughout Africa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12 sm:py-24'>
        <div className='flex justify-center items-center flex-col lg:px-24 md:px-12'>
          <div className='w-full sm:w-[600px] md:w-[700px] flex flex-col justify-center items-center px-4 sm:px-10 transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 opacity-0' ref={(el) => { refs.current[6] = el }}>
            <span className="font-bold text-blue-700 tracking-wide mb-5">OUR LEADERSHIP TEAM</span>
            <p className="text-lg text-slate-700 text-center">Working to support the services we provide across the countries we operate in, from our head office in Rwanda. </p>
          </div>
          <div className='w-full flex lg:flex-row flex-col justify-center items-center px-4 sm:px-10 lg:mt-20 mt-14 transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 opacity-0' ref={(el) => { refs.current[7] = el }}>
            <div className='w-full lg:w-[45%] border flex items-center rounded-2xl lg:mr-10 mb-6 lg:mb-0 shadow-sm' style={{ backgroundColor: 'rgb(246, 244, 255)', borderColor:'rgba(0, 0, 0, 0.05)' }}>
              <div className='pl-10 pr-6 py-8'>
                <img src="https://framerusercontent.com/images/Ybu7X3ytkj4hGM3W2YMJqUHWw.webp" alt="" className='object-cover h-28 w-28 rounded-full' />
              </div>
              <div className=''>
                <h1 className="font-semibold text-xl sm:text-2xl">Ntoudi Mouyelo</h1>
                <p className="text-lg text-slate-700 mt-2">Managing Director</p>
              </div>
            </div>
            <div className='w-full lg:w-[45%] border flex items-center rounded-2xl shadow-sm' style={{ backgroundColor: 'rgb(246, 244, 255)', borderColor:'rgba(0, 0, 0, 0.05)' }}>
              <div className='pl-10 pr-6 py-8'>
                <img src="https://framerusercontent.com/images/Ybu7X3ytkj4hGM3W2YMJqUHWw.webp" alt="" className='object-cover h-28 w-28 rounded-full' />
              </div>
              <div className=''>
                <h1 className="font-semibold text-xl sm:text-2xl">Ntoudi Mouyelo</h1>
                <p className="text-lg text-slate-700 mt-2">Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage

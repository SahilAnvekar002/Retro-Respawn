"use client"
import { IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react'
import React, { useEffect, useRef } from 'react'

function Contact() {

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
            <section className='pt-40 sm:pb-20 pb-12'>
                <div className='px-6 sm:px-14 xl:px-32'>
                    <div className='mb-12 transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 opacity-0' ref={(el) => { refs.current[0] = el }}>
                        <span className="font-bold text-blue-700 tracking-wider">CONTACT US</span>
                    </div>
                    <div className='flex xl:flex-row flex-col transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 opacity-0' ref={(el) => { refs.current[1] = el }}>
                        <div className='w-full xl:w-[60%]'>
                            <form >
                                <div className='flex sm:flex-row flex-col w-full'>
                                    <input type="text" name='name' id='name' placeholder='Name' className='px-5 py-4 text-lg outline-none rounded-xl placeholder:text-gray-600 w-full sm:w-[49%] sm:mr-5 sm:mb-0 mb-5' style={{ backgroundColor: 'rgb(246, 244, 255)' }} />
                                    <input type="email" name='email' id='email' placeholder='Email' className='px-5 py-4 text-lg outline-none rounded-xl placeholder:text-gray-600 w-full sm:w-[49%]' style={{ backgroundColor: 'rgb(246, 244, 255)' }} />
                                </div>
                                <div className='w-full mt-5'>
                                    <textarea name="message" id="message" className='px-5 py-4 text-lg outline-none rounded-xl resize-none placeholder:text-gray-600 mr-5 w-full' placeholder='Message' style={{ backgroundColor: 'rgb(246, 244, 255)' }} rows={8}></textarea>
                                </div>
                                <button className='rounded-xl font-medium text-lg text-white w-full px-4 py-4 mt-5' style={{ backgroundColor: 'rgb(93, 95, 239)' }}>Send Message</button>
                            </form>
                        </div>

                        <div className='w-full sm:w-[400px] xl:w-[40%] xl:pl-16 xl:pt-0 pt-14'>
                            <div>
                                <h1 className="font-bold sm:text-2xl text-xl mb-3">Get in touch</h1>
                                <p className=" text-lg text-slate-700">If you’re interested in becoming a betPawa brand franchise holder, would like to discuss partnership opportunities or have media queries, we’d love to hear from you.</p>
                            </div>
                            <div className='my-10'>
                                <h1 className="font-bold sm:text-2xl text-xl mb-3">Address</h1>
                                <p className=" text-lg text-slate-700">Nyarugenge, City of Kigali, Rwanda</p>
                            </div>
                            <div>
                                <h1 className="font-bold sm:text-2xl text-xl mb-3">e: press@mchezo.rw</h1>
                            </div>
                            <div className='flex mt-8'>
                                <div className="rounded-full w-10 h-10 flex items-center justify-center mr-3 hover:brightness-90 transition-all duration-300 ease-out cursor-pointer" style={{ backgroundColor: 'rgb(93, 95, 239)' }}>
                                    <IconBrandLinkedin size={30} color="rgb(93, 95, 239)" fill="white" />
                                </div>
                                <div className="rounded-full w-10 h-10 flex items-center justify-center mr-3 hover:brightness-90 transition-all duration-300 ease-out cursor-pointer" style={{ backgroundColor: 'rgb(93, 95, 239)' }}>
                                    <IconBrandInstagram size={30} color="rgb(93, 95, 239)" fill="white" />
                                </div>
                                <div className="rounded-full w-10 h-10 flex items-center justify-center mr-3 hover:brightness-90 transition-all duration-300 ease-out cursor-pointer" style={{ backgroundColor: 'rgb(93, 95, 239)' }}>
                                    <IconBrandTwitter size={30} color="rgb(93, 95, 239)" fill="white" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='py-24 sm:py-12'>
                <div className='px-4 sm:px-10'>
                <span className="font-bold text-blue-700 tracking-wider">WHERE TO FIND US</span>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15287.617001221213!2d74.24801124351197!3d16.68167419543904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1002979f8ebe1%3A0x8f2e94d2326ede25!2sShivaji%20University%20Kolhapur%2C%20Vidya%20Nagar%2C%20Kolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1727068502577!5m2!1sen!2sin" width="400" height="300" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full mt-5 h-[500px]'></iframe>
                </div>
            </section>
        </>
    )
}

export default Contact

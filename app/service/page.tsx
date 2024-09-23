"use client"
import React, { useEffect, useRef } from 'react'

function Service() {

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
            <section className='pt-40 sm:pt-48 pb-12 sm:pb-24' style={{ backgroundColor: 'rgb(246, 244, 255)' }}>
                <div className='flex justify-center items-center flex-col xl:px-32'>
                    <div className='flex flex-col items-center w-full sm:w-[400px] sm:px-0 px-10 transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 opacity-0' ref={(el) => { refs.current[0] = el }}>
                        <span className="font-bold text-blue-700 tracking-wide mb-5">RETRO RESPAWN</span>
                        <h1 className="font-bold text-3xl sm:text-4xl mb-5">What we do</h1>
                        <p className="text-xl sm:text-2xl text-slate-700 text-center">Investing in the future of sport and technology in Africa.</p>
                    </div>

                    <div className='flex overflow-x-hidden pt-12 sm:pt-24 transform translate-y-20 transition-[opacity,transform] duration-500 delay-700 opacity-0' ref={(el) => { refs.current[1] = el }}>
                        <img src="https://images.pexels.com/photos/9072388/pexels-photo-9072388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='sm:rounded-r-2xl xl:rounded-2xl mr-4 max-h-[350px] object-cover' />
                        <img src="https://images.pexels.com/photos/7915245/pexels-photo-7915245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='rounded-2xl mr-4 max-h-[350px] object-cover' />
                        <img src="https://images.pexels.com/photos/7915289/pexels-photo-7915289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='rounded-2xl mr-4 max-h-[350px] object-cover' />
                    </div>
                </div>

                <div className='flex justify-center items-center pt-24 sm:pt-32 w-full'>
                    <div className='flex lg:flex-row flex-col justify-center items-center w-[1000px]'>
                        <div className='w-full px-6 sm:px-0 sm:w-[600px] lg:w-1/2 lg:mb-0 mb-10 transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 opacity-0' ref={(el) => { refs.current[2] = el }}>
                            <span className="font-bold text-blue-700 tracking-wide">FRANCHISING</span>
                            <h1 className="font-bold sm:text-4xl text-3xl my-6">We licence the betPawa brand</h1>
                            <p className="text-lg text-slate-700" >Mchezo partners with local franchisees that are regulated and licensed to conduct online gaming. Mchezo works to expand the betPawa brand into new territories alongside partners committed to good governance and business practices</p>
                        </div>
                        <div className='w-full sm:px-0 px-6 sm:w-[600px] lg:w-1/2 lg:pl-20'>
                            <img src="https://framerusercontent.com/images/gjlJuzcQQa23I9uYlXzBlZqtB7U.png" alt="" className='max-h-[400px]' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-12 sm:pt-32 sm:pb-24'>
                <div className='flex justify-center items-center'>
                    <div className='w-full px-10 md:px-0 md:w-[600px]'>
                        <h1 className='font-bold text-3xl sm:text-4xl mb-6 text-center'>Reinvesting beyond the brand</h1>
                        <p className='font-medium text-xl sm:text-2xl text-center' style={{ color: 'rgb(136, 136, 136)' }}>One of Mchezo’s roles is to explore new areas of growth and invest into diverse projects – with a focus on sports development and financial inclusion. </p>
                    </div>
                </div>
            </section>

            <section className="py-14 sm:py-28" style={{ backgroundColor: 'rgb(246, 244, 255)' }}>
                <div className="flex xl:flex-row flex-col-reverse items-center justify-center md:pl-24 md:px-12 transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 opacity-0" ref={(el) => { refs.current[3] = el }}>
                    <div className="px-10 sm:px-0 h-96 w-full sm:w-[600px] xl:w-1/2 xl:px-24 overflow-x-hidden overflow-y-hidden">
                        <img src="https://images.pexels.com/photos/7915498/pexels-photo-7915498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-52 w-52 rounded-3xl relative top-10 transform transition-transform duration-200 hover:scale-125 object-cover' style={{ zIndex: '1' }} />
                        <img src="https://images.pexels.com/photos/9072211/pexels-photo-9072211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-52 w-52 rounded-3xl relative -top-32 -right-48 transform transition-transform duration-200 hover:scale-125 object-cover' style={{ zIndex: '2' }} />
                        <img src="https://images.pexels.com/photos/9072210/pexels-photo-9072210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-52 w-52 rounded-3xl relative -top-72 -right-14 transform transition-transform duration-200 hover:scale-125 object-cover' style={{ zIndex: '3' }} />
                    </div>
                    <div className="px-10 sm:px-0 w-full sm:w-[600px] xl:w-1/2 xl:pr-24 xl:mb-0 sm:mb-10 transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 opacity-0" ref={(el) => { refs.current[4] = el }}>
                        <span className="text-lg font-bold text-blue-700">SPORTS DEVELOPMENT</span>
                        <h1 className="font-bold sm:text-4xl text-3xl my-4">Basketball in Rwanda</h1>
                        <p className="xl:text-lg lg:text-base text-lg mt-6 mb-6 text-slate-700">From Kigali, Mchezo leads Rwandas basketball transformation as sponsors of FERWABA, as well as our partnership with Giants of Africa, amplifying our mission: nurturing talent, empowering youth and spotlighting Rwanda globally.</p>
                    </div>
                </div>
            </section>

            <section className='py-12 sm:py-24'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='xl:w-[1100px] flex flex-col xl:px-0 sm:px-16 px-6'>
                        <div className='flex md:flex-row flex-col justify-around mb-16'>
                            <div className='w-full md:w-[45%] xl:w-[30%] md:mb-0 mb-16'>
                                <img src="https://images.unsplash.com/photo-1636487658582-96efd1693bcb?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-[300px] rounded-3xl object-cover' />
                                <h1 className="font-bold sm:text-4xl text-3xl mb-4 mt-6">Grassroots tournaments</h1>
                                <p className="xl:text-lg lg:text-base text-lg text-slate-700">These include a Kenya-wide 6-a-side cup and the Tennis Rwanda Childrens Foundation tournament.</p>
                            </div>
                            <div className='w-full md:w-[45%] xl:w-[60%]'>
                                <img src="https://images.unsplash.com/photo-1636488363148-818c08eec89e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-[300px] rounded-3xl object-cover' />
                                <h1 className="font-bold sm:text-4xl text-3xl mb-4 mt-6">Supporting football federations</h1>
                                <p className="xl:text-lg lg:text-base text-lg text-slate-700">Mchezo, via betPawa, has initiated game-changing partnerships in Uganda and Ghana with national football federations FUFA and the GFA, aimed at impacting all levels of the sport. </p>
                            </div>
                        </div>

                        <div className='flex md:flex-row flex-col justify-around'>
                            <div className='w-full md:w-[45%] xl:w-[60%] md:mb-0 mb-16'>
                                <img src="https://images.unsplash.com/photo-1713464050974-9245669e7c05?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-[300px] rounded-3xl object-cover' />
                                <h1 className="font-bold sm:text-4xl text-3xl mb-4 mt-6">Locker Room Bonus for players</h1>
                                <p className="xl:text-lg lg:text-base text-lg text-slate-700">Our flagship initiative – the Locker Room Bonus – was designed to elevate competitiveness in sports by directly and instantly rewarding players after they win a game through mobile-money payments.</p>
                            </div>
                            <div className='w-full md:w-[45%] xl:w-[30%]'>
                                <img src="https://images.unsplash.com/photo-1598550487031-0898b4852123?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-[300px] rounded-3xl object-cover' />
                                <h1 className="font-bold sm:text-4xl text-3xl mb-4 mt-6">Building pitches</h1>
                                <p className="xl:text-lg lg:text-base text-lg text-slate-700">These investments last and keep giving value after a season ends, defining the Mchezo way.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-12 sm:py-24'>
                <div className='flex justify-center items-center flex-col'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 opacity-0' ref={(el)=>{refs.current[5] = el}}>
                            <span className="text-lg font-bold text-blue-700 tracking-wider mb-3">SPORTS DEVELOPMENT</span>
                            <h1 className="font-bold sm:text-4xl text-3xl">What our partners think</h1>
                        </div>
                        <div className='flex md:flex-row flex-col lg:w-[1000px] mt-16 justify-between lg:justify-around lg:flex-nowrap flex-wrap lg:mx-0 md:mx-12 mx-6'>

                            <div className='w-full md:w-[49%] lg:w-[31%] md:h-[300px] lg:h-[370px] flex flex-col justify-between pl-8 pr-10 py-10 rounded-2xl border-2 md:mb-0 mb-6 transform translate-y-20 transition-[opacity,transform] duration-500 sm:delay-500 opacity-0' style={{ borderColor: 'rgba(0, 0, 0, 0.05)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 10px 30px -20px' }} ref={(el)=>{refs.current[6] = el}}>
                                <p className="lg:text-lg text-lg text-slate-700">This isnt just about sponsorship; its about creating a transformational change for Rwandan basketball.</p>
                                <div className='flex flex-col md:mt-0 mt-6'>
                                    <span className='text-xs font-semibold'>Desire Mugwiza</span>
                                    <span className='text-xs text-slate-700'>FERWABA President</span>
                                </div>
                            </div>
                            <div className='w-full md:w-[49%] lg:w-[31%] md:h-[300px] lg:h-[370px] flex flex-col justify-between pl-8 pr-10 py-10 rounded-2xl border-2 md:mb-0 mb-6 transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 sm:delay-700 opacity-0' style={{ borderColor: 'rgba(0, 0, 0, 0.05)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 10px 30px -20px' }} ref={(el)=>{refs.current[7] = el}}> 
                                <p className="lg:text-lg text-lg text-slate-700">This partnership marks a pivotal moment for Ugandan football. It is more than just financial support; it is a firm pledge to the future of our beloved sport, a promise to double down on our shared vision for progress.</p>
                                <div className='flex flex-col md:mt-0 mt-6'>
                                    <span className='text-xs font-semibold'>Moses Hassim Magogo</span>
                                    <span className='text-xs text-slate-700'>FUFA President</span>
                                </div>
                            </div>
                            <div className='w-full md:w-[49%] lg:w-[31%] md:h-[300px] lg:h-[370px] flex flex-col justify-between pl-8 pr-10 py-10 rounded-2xl border-2 md:mb-0 mb-6 transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 sm:delay-1000 opacity-0' style={{ borderColor: 'rgba(0, 0, 0, 0.05)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 10px 30px -20px' }} ref={(el)=>{refs.current[8] = el}}>
                                <p className="lg:text-lg  text-lg text-slate-700">betPawa’s sponsorship of the Ghana Premier League
                                    can be classified as the best in the past years due to its innovation of incentivising the players who are the main products of the league</p>
                                <div className='flex flex-col md:mt-0 mt-6'>
                                    <span className='text-xs font-semibold'>Joshua Addai</span>
                                    <span className='text-xs text-slate-700'>Karela United</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='py-12 sm:py-24'>
                <div className='flex justify-center items-center flex-col'>
                    <div className='px-6 sm:px-0 sm:w-[500px] flex flex-col justify-center items-center transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 opacity-0' ref={(el)=>{refs.current[9] = el}}>
                        <span className="text-lg font-bold text-blue-700 tracking-wider text-center">FINANCIAL INCLUSION</span>
                        <h1 className="font-bold sm:text-4xl text-3xl my-2 text-center">We are not mere observers but active innovators</h1>
                        <p className="lg:text-lg text-lg text-slate-700 text-center mt-2">Mchezo is eager to digitise the way services are consumed and improve access to tools of financial empowerment.</p>
                    </div>
                </div>
            </section>

            <section className='py-24'>
                <div className='flex justify-center items-center'>
                    <div className='lg:px-0 px-6 sm:px-10 lg:w-[1000px] flex sm:flex-row flex-col items-center lg:justify-around xl:justify-between'>
                        <img src="https://framerusercontent.com/images/D5GWyCvY3kk7JB6gw6pJuPiy9k.png" alt="" className='object-contain w-full sm:w-[40%] max-h-[400px] sm:max-h-[600px] sm:scale-125 lg:scale-110 sm:mb-0 mb-10' />
                        <div className='lg:w-[40%] lg:ml-0 sm:ml-10 md:ml-20'>
                            <h1 className="font-bold sm:text-4xl text-3xl mb-5">pawaPass</h1>
                            <p className="lg:text-xl text-lg text-slate-600">Recognising the barriers many Africans face in accessing financial services, Mchezo has invested in pawaPass, a service specialising in user verification and compliance specifically for African consumers. </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service

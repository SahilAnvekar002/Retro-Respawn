"use client"
import { IconAdjustmentsShare, IconArrowRight, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconRosetteDiscountCheck, IconWorld } from "@tabler/icons-react";
import { useEffect, useRef } from "react";

export default function Home() {

  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const isInViewport = (el: HTMLDivElement) => {
    const rect = el.getBoundingClientRect();
    if (rect) {
      return rect?.top <= window.innerHeight && rect.bottom >= 0;
    }
  };

  useEffect(() => {

    const onLoad = () => {
      // Ensure scrolling happens after layout is stable
      requestAnimationFrame(() => {
        //setTimeout(() => {
        window.scrollTo(0, 0);
        //}, 100);

        setTimeout(() => {
          // Apply animations after scroll
          requestAnimationFrame(() => {
            refs.current.forEach((ref) => {
              if (ref && isInViewport(ref)) {
                ref.classList.remove('opacity-0');
                ref.classList.remove('translate-y-20');
                ref.classList.add('opacity-100');
              }
            });
          });
        }, 100);
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
      <section className="flex flex-col lg:bg-fixed bg-cover sm:h-[100vh] bg-home-bg lg:bg-left bg-right">
        <div className="flex flex-col md:px-24 xl:px-36 2xl:px-48 pt-64 pb-44 sm:pb-0 sm:pt-56 transform translate-y-20 transition-[opacity,transform] duration-500 delay-300 opacity-0 md:items-start items-center" ref={(el) => { refs.current[0] = el }}>
          <h1 className="text-white text-5xl sm:text-6xl font-bold tracking-widest italic mb-6">TEAM PLAY<br />AND SOLO<br />CONQUESTS</h1>
          <span className="text-white font-semiold tracking-widest mb-10 text-lg ">Our gaming adventure awaits!</span>
          <button className="px-8 py-3 bg-white text-black w-72 rounded-lg text-xl font-semibold hover:bg-transparent hover:text-white  hover:border-white border-2 transition-colors duration-300 ease-in-out">Learn More</button>
        </div>
      </section>

      <section className="py-14 sm:py-28" style={{ backgroundColor: 'rgb(246, 244, 255)' }}>
        <div className="flex justify-center">
          <div className="flex flex-col items-center w-full px-4 sm:px-10 md:px-0 md:w-[700px] justify-center transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 opacity-0" ref={(el) => { refs.current[1] = el }}>
            <span className="text-lg font-bold text-blue-800 mb-6">RETRO RESPAWN</span>
            <h1 className="font-bold sm:text-4xl text-3xl text-center mb-4">Expanding beyond gaming to grow sports and technology</h1>
            <p className="text-lg text-slate-700 text-center">We exist to champion its growth, as well as to explore and create investment opportunities in sports and financial technology.</p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col pt-36 sm:pt-52 lg:px-24 md:px-12 sm:pb-20 pb-10">
          <div className="w-full lg:w-1/2 px-4 sm:px-10 transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 sm:delay-300 opacity-0" ref={(el) => { refs.current[2] = el }}>
            <span className="text-lg font-bold text-blue-700">WHAT WE DO</span>
            <h1 className="font-bold text-3xl sm:text-4xl mt-5">We’re based in India</h1>
            <p className="text-lg text-slate-700 my-5">Our head office is located in Kolhapur, India. From here, we manage the support and services we offer across India.</p>
            <a href="#" className="text-blue-600 font-semibold text-lg flex items-center">Read more <IconArrowRight className="ml-1" style={{ marginTop: '2px' }} /></a>
          </div>

          <div className="lg:mt-0 mt-12 flex flex-col items-end w-full lg:w-1/2 px-4 sm:px-10 transform translate-y-20 transition-[opacity,transform] duration-700 delay-500 sm:delay-1000 opacity-0" ref={(el) => { refs.current[3] = el }}>
            <div className="lg:max-h-[400px] w-full">
              <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-2xl w-full lg:h-full sm:h-[500px] shadow-md object-cover" />
            </div>
            <div className="lg:max-h-[400px] w-full mt-5 flex md:flex-row flex-col">
              <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-2xl w-full md:w-[48%] lg:h-full h-[300px] object-cover mr-5 shadow-md " />
              <img src="https://images.unsplash.com/photo-1610041321063-bbaf5286de89?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-2xl w-full md:w-[48%] lg:h-full h-[300px] object-cover shadow-md md:mt-0 mt-5" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24">
        <div className="flex flex-col lg:px-24 md:px-12">
          <div className="px-4 sm:px-10 transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 opacity-0" ref={(el) => { refs.current[4] = el }}>
            <span className="text-lg font-bold text-blue-700">OUR CORE BRAND</span>
            <h1 className="font-bold text-3xl sm:text-4xl mt-5">Latest and best Games </h1>
            <p className="text-lg text-slate-700 my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non hic tempora dignissimos iure amet! Autem et at animi hic, aut illo sapiente voluptatum, repellat optio architecto provident sed recusandae ullam!</p>
          </div>
          <div className="px-4 sm:px-10 mt-6 transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 opacity-0" ref={(el) => { refs.current[5] = el }}>
            <img src="https://images.unsplash.com/photo-1725273578052-14575f0daa01?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-cover rounded-xl max-h-[400px] xl:max-h-[600px] w-full" />
            <a href="#" className="text-blue-600 font-semibold text-lg flex items-center mt-6">Read more <IconArrowRight className="ml-1" style={{ marginTop: '2px' }} /></a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24" style={{ backgroundColor: 'rgb(246, 244, 255)' }}>
        <div className="flex xl:flex-row flex-col lg:px-24 md:px-12">
          <div className="flex flex-col self-start w-full lg:w-2/3 xl:w-1/2 px-4 sm:px-10 transform translate-y-20 transition-[opacity,transform] duration-500 delay-300 opacity-0 xl:sticky top-28 xl:mb-0 mb-6" ref={(el) => { refs.current[6] = el }}>
            <span className="text-lg font-bold text-blue-700">OUR VALUES</span>
            <h1 className="font-bold text-3xl sm:text-4xl mt-5">What we stand for</h1>
            <p className="text-lg text-slate-700 my-5">We play an active role in pushing for a more transparent industry. We believe that a level playing field ensures that the ultimate beneficiaries are those players and communities we exist to serve.</p>
            <a href="#" className="text-blue-600 font-semibold text-lg flex items-center mt-6">About us<IconArrowRight className="ml-1" style={{ marginTop: '2px' }} /></a>
          </div>

          <div className="flex flex-col w-full xl:w-1/2 px-4 sm:px-10 transform translate-y-20 transition-[opacity,transform] duration-700 delay-1000 opacity-0" ref={(el) => { refs.current[7] = el }}>
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
      </section>

      <section className="py-12 sm:py-24">
        <div className="flex xl:flex-row flex-col-reverse xl:items-center justify-center lg:px-24 md:px-12">
          <div className="xl:block md:flex w-full xl:w-1/2 px-4 sm:px-10 transform translate-y-20 transition-[opacity,transform] duration-500 delay-500 md:delay-300 opacity-0 overflow-x-hidden" ref={(el) => { refs.current[8] = el }}>
            <div className="flex mb-4">
              <img src="https://images.pexels.com/photos/7862655/pexels-photo-7862655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="max-h-[250px] object-cover rounded-xl xl:w-[48%] mr-4 md:min-w-[240px] w-[48%]" />
              <img src="https://images.pexels.com/photos/7862661/pexels-photo-7862661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="max-h-[250px] object-cover rounded-xl xl:w-[48%] xl:mr-0 mr-4 md:min-w-[240px] w-[48%]" />
            </div>
            <div className="flex mb-4">
              <img src="https://images.pexels.com/photos/7915518/pexels-photo-7915518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="max-h-[250px] object-cover rounded-xl xl:w-[48%] mr-4 md:min-w-[240px] w-[48%]" />
              <img src="https://images.pexels.com/photos/7915434/pexels-photo-7915434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="max-h-[250px] object-cover rounded-xl xl:w-[48%] xl:mr-0 mr-4 md:min-w-[240px] w-[48%]" />
            </div>
          </div>

          <div className="w-full lg:w-2/3 xl:w-1/2 px-4 sm:px-10 transform translate-y-20 transition-[opacity,transform] duration-700 delay-500 md:delay-1000 opacity-0 xl:mb-0 sm:mb-12 mb-6" ref={(el) => { refs.current[9] = el }}>
            <span className="text-lg font-bold text-blue-700">E-SPORTS DEVELOPMENT</span>
            <h1 className="font-bold text-3xl sm:text-4xl mt-5">Investing in e-sports</h1>
            <p className="text-lg text-slate-700 my-5">To support the development and impact of esports, We re-invests revenue from betting. From partnering with national federations, to sponsoring talented individuals - we seek to generate value across the sports ecosystem. </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24" style={{ backgroundColor: 'rgb(246, 244, 255)' }}>
        <div className="flex xl:flex-row flex-col xl:items-center lg:px-24 md:px-12">

          <div className="w-full xl:w-[70%] px-4 sm:px-10">
            <div className="flex flex-col justify-end h-[400px] bg-center bg-cover rounded-xl shadow-md cursor-pointer hover:brightness-75 transition-all duration-300" style={{ backgroundImage: 'url("https://resources.esportsinsider.com/esportsinsider/2024/09/2169751693-min-edited.jpg")' }}>
              <div className="px-10 pb-6 pt-4 rounded-b-xl" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <h1 className="text-white font-bold text-xl sm:text-2xl">Can Football Manager be an esport?</h1>
                <p className="text-lg text-slate-200 mt-2">Simulation game Football Manager has been a fan favourite for many football fanatics over the years.</p>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[30%] xl:px-0 px-4 sm:px-10 xl:mt-0 mt-10">
            <h1 className="font-bold text-2xl sm:text-3xl xl:text-2xl xl:mb-4 mb-8">Latest news</h1>
            <div className="flex flex-col">
              <div className="flex h-20 bg-white rounded-xl shadow-md cursor-pointer mb-4">
                <div className="w-[120px] sm:w-[200px] xl:w-[40%] h-full">
                  <img src="https://resources.esportsinsider.com/esportsinsider/2024/07/Team-Liquid-Instagram-medium_large.png" alt="" className="object-cover h-full w-full rounded-s-md hover:brightness-75 transition-all duration-300 ease-in-out" />
                </div>
                <div className="w-[60%]">
                  <p className="xl:px-4 xl:py-4 sm:px-6 sm:py-6 px-3 py-3 text-xs text-slate-800 font-semibold">
                    Esports Mergers & Acquisitions with Team Liquid co-CEO, Steve Arhancet</p>
                </div>
              </div>
              <div className="flex h-20 bg-white rounded-xl shadow-md cursor-pointer mb-4">
                <div className="w-[120px] sm:w-[200px] xl:w-[40%] h-full">
                  <img src="https://resources.esportsinsider.com/esportsinsider/2024/09/UOS-SBS-Esports-Lab-1-LR.jpg" alt="" className="object-cover h-full w-full rounded-s-md hover:brightness-75 transition-all duration-300 ease-in-out" />
                </div>
                <div className="w-[60%]">
                  <p className="xl:px-4 xl:py-4 sm:px-6 sm:py-6 px-3 py-3 text-xs text-slate-800 font-semibold">
                    Bridging the gap: Why specific skills are needed for esports’ future</p>
                </div>
              </div>
              <div className="flex h-20 bg-white rounded-xl shadow-md cursor-pointer mb-4">
                <div className="w-[120px] sm:w-[200px] xl:w-[40%] h-full">
                  <img src="https://resources.esportsinsider.com/esportsinsider/2024/08/Sequence-01.00_00_25_08.Still004-1.jpg" alt="" className="object-cover h-full w-full rounded-s-md hover:brightness-75 transition-all duration-300 ease-in-out" />
                </div>
                <div className="w-[60%]">
                  <p className="xl:px-4 xl:py-4 sm:px-6 sm:py-6 px-3 py-3 text-xs text-slate-800 font-semibold">
                    Looking at Lisbon: The Building Blocks of Grassroots Esports</p>
                </div>
              </div>
              <div className="flex h-20 bg-white rounded-xl shadow-md cursor-pointer mb-4">
                <div className="w-[120px] sm:w-[200px] xl:w-[40%] h-full">
                  <img src="https://resources.esportsinsider.com/esportsinsider/2024/09/ALGS_2.jpg" alt="" className="object-cover h-full w-full rounded-s-md hover:brightness-75 transition-all duration-300 ease-in-out" />
                </div>
                <div className="w-[60%]">
                  <p className="xl:px-4 xl:py-4 sm:px-6 sm:py-6 px-3 py-3 text-xs text-slate-800 font-semibold">
                    Apex Legends, the ALGS and the game’s current place in esports</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center md:w-[750px] xl:w-[850px] sm:px-10 px-6 md:px-0">
            <h1 className="font-bold text-xl sm:text-2xl">Get in touch</h1>
            <p className="text-lg text-slate-700 mt-2 mb-4 text-center">If you’re interested in becoming a e-sports player, would like to discuss partnership opportunities or have media queries, we’d love to hear from you.</p>
            <button className="px-4 sm:px-6 py-1 sm:py-2 bg-blue-700 text-white rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors duration-300 ease-in-out">Contact Us</button>
            <div className="flex mt-8">
              <div className="rounded-full w-10 h-10 flex items-center justify-center mr-3 hover:brightness-75 transition-all duration-300 ease-out cursor-pointer" style={{ backgroundColor: 'rgb(37, 42, 45)' }}>
                <IconBrandLinkedin size={30} color="rgb(37, 42, 45)" fill="white" />
              </div>
              <div className="rounded-full w-10 h-10 flex items-center justify-center mr-3 hover:brightness-75 transition-all duration-300 ease-out cursor-pointer" style={{ backgroundColor: 'rgb(37, 42, 45)' }}>
                <IconBrandInstagram size={30} color="rgb(37, 42, 45)" fill="white" />
              </div>
              <div className="rounded-full w-10 h-10 flex items-center justify-center mr-3 hover:brightness-75 transition-all duration-300 ease-out cursor-pointer" style={{ backgroundColor: 'rgb(37, 42, 45)' }}>
                <IconBrandTwitter size={30} color="rgb(37, 42, 45)" fill="white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

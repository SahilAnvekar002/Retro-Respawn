"use client"
import React, { useEffect, useRef } from 'react'
import classes from '@/css/Blogs.module.css'
import Link from 'next/link'

interface BlogType {
    source: object,
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

interface PropsType {
    blogs: BlogType[]
}

function BlogPage({ blogs }: PropsType) {

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
        <section className='pt-40 sm:pb-24 pb-12'>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-full sm:px-0 px-6 sm:w-[400px] sm:mb-24 mb-12 transform translate-y-20 transition-[opacity,transform] duration-500 delay-300 opacity-0' ref={(el)=>{refs.current[0] = el}}>
                    <h1 className="font-bold sm:text-3xl text-2xl mb-3 text-center">Blogs</h1>
                    <p className="text-lg sm:text-2xl text-slate-700 text-center">Find all of our latest stories and news about retro respawn.</p>
                </div>
                <div className='flex xl:px-0 lg:px-24 sm:px-10 px-4 w-full xl:w-[1200px] flex-wrap transform translate-y-20 transition-[opacity,transform] duration-500 delay-700 opacity-0' ref={(el)=>{refs.current[1] = el}}>
                    {blogs.length>0 && blogs.map((blog, i) => {
                        return (
                            <Link href={blog.url} target='_blank' key={i} className={`flex w-full lg:w-[48%] xl:w-[32%] flex-col border-2 lg:h-[470px] rounded-2xl mb-5 lg:mr-4 ${classes.card}`} style={{ borderColor: 'rgba(0, 0, 0, 0.05)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 10px 30px -20px' }}>
                                <div className='h-[270px] overflow-hidden'>
                                    <img src={blog.urlToImage ? blog.urlToImage : 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="" className={`object-cover  rounded-t-2xl h-full w-full ${classes.image}`} />
                                    <div className={`absolute top-0 left-0 bottom-0 right-0 ${classes.overlay}`} style={{ transition: 'background-color 0.4s ease', backgroundColor: 'rgba(255, 255, 255, 0)' }}></div>
                                </div>
                                <div className={`lg:pb-0 pb-6 pt-6 sm:pt-10 px-6 sm:px-10 ${classes.content}`}>
                                    <h1 className="font-semibold sm:text-2xl text-xl">{blog.title.length < 80 ? blog.title : blog.title.substring(0, 80) + '...'}</h1>
                                </div>
                            </Link>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default BlogPage

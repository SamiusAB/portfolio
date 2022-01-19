import Link from 'next/link'
import Image from 'next/image'
import heroImage from '../public/hero-image.jpg'


function HomeHero() {
    return (
        <div className="hero-content">
            <div className="text-center content-center drop-shadow-lg m-auto bg-white w-full h-full">
                <div className="flex flex-col items-center justify-center h-full w-full p-6">
                    <div className="hero-title title">Samuel Abera</div>
                    <div className="hero-title description mt-4">a self-taught Front-End Developer. With experience using Shopify Liquid, NodeJs, React, NextJS </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero;
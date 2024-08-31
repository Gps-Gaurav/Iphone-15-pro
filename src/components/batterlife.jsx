import React, { useRef } from 'react'
import {frameImg, bVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '../utils/animations';

const Batterylife = () => {
  const videoRef = useRef();

  useGSAP(() => {
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
          Battery life that’s positively Pro.
          </h2>

          <p className="hiw-subtitle">
          Even with so many advanced new features, iPhone 15 Pro still gives you amazing all‑day battery life.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={ bVideo} type="video/mp4" />
                </video>
              </div>
          </div>
       
          </div>
            </div>
    </section>
  )
}

export default Batterylife
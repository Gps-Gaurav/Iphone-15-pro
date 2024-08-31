import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Image from './components/image';
import Gigablast from './components/gigablast';
import Batterylife from './components/batterlife';

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Image/>
      <Gigablast/>
      <Batterylife/>
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);

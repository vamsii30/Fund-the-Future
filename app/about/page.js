import React from 'react'

const page = () => {
  return (
    <>
    <div className="container min-h-screen flex flex-col items-center  text-white min-w-full p-7 md:p-5">
      <h1 className='font-bold text-4xl my-7'> About Us</h1>
      <h2 className='font-bold text-lg my-3'>"Don’t Just Dream It, Fund It."</h2>
      <div className='text-center max-w-5xl leading-8 gap-8 flex flex-col items-center'>
      <p className='text-base'>At Fund the Future, we’re on a mission to empower dreamers, creators, and innovators across India by bridging the gap between passion and possibility. Our platform is more than just a crowdfunding space—it’s a thriving community where students, artists, developers, and visionaries find the support they need to turn their ideas into reality. With a vision to democratize access to resources, we created a platform that connects individuals with like-minded supporters who believe in their dreams.</p>
      <p className='text-base' >Empowering dreams is at the heart of what we do. We’ve built a space where passionate individuals can connect with a community that believes in their potential. By enabling supporters to contribute directly to the people and projects they care about, we’re fostering a culture of collaboration, creativity, and growth.Great ideas shouldn’t be limited by financial barriers. </p>
      <p className="text-base"> Whether it’s a student pursuing education, an artist crafting their masterpiece, a developer building the next big app, or an innovator solving real-world problems, Fund the Future exists to help them thrive. We believe that small contributions, when pooled together, can create monumental change—fueling creativity, education, and innovation across the nation. </p>
      <p className="text-base">We believe in a world where creativity and innovation flourish without financial barriers - where passionate creators can bring their boldest ideas to life without compromise, and where supporters become genuine partners in making dreams reality. This is a future where artistic integrity isn't sacrificed for commercial success, where niche talents find their perfect audience, and where every contribution creates visible impact. We're building an ecosystem that makes crowdfunding intuitive and rewarding, where local innovations stand shoulder-to-shoulder with global trends, and where the journey from inspiration to execution becomes dramatically shorter. Ultimately, we envision a cultural shift where supporting visionary ideas becomes second nature, transforming how society nurtures and values creative potential.</p>
      </div>
    </div>
    </>
  )
}

export default page

export const metadata = {
  title: "About - Fund The Future",
}
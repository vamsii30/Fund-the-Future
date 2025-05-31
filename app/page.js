import Link from "next/link";

export default function Home() {
  return (
    <>
   <div className="flex justify-center flex-col  items-center text-white h-[65vh] gap-4 px-5 md:px-0 text-xs md:text-base">
    <div className="font-bold md:text-3xl text-xl flex gap-1 justify-center ">Fund The Future <span><img src="\coin.gif" width={40} alt="" /></span></div>
    <p>
      A crowdfunding platform for creators. Get funded by your fans and followers.
    </p>
    <div>
      <Link href={"/login"}>
    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
      </Link>
      <Link href={"/about"}>
    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </Link>
    </div>
   </div>
   <div className="bg-white h-1 opacity-10">
     </div>
     <div className="text-white container mx-auto py-8 h-[65vh] pb-16 pt-16 px-3 md:px-1">
      <h2 className="text-2xl font-bold text-center my-6 ">Your Supporters can Fund you</h2>
      <div className="flex gap-5 justify-around py-8">
        <div className="item flex flex-col items-center justify-center">
          <img className=" bg-slate-400 rounded-full p-2 " src="/man.gif" width={80} alt="" />
          <p className="font-bold text-center">Fund Yourself</p>
          <p className="text-center">Every penny matters.Fund Yourself❤️</p>
        </div>
        <div className="item flex flex-col items-center justify-center">
          <img className=" bg-slate-400 rounded-full p-2 " src="/frnd.gif" width={80} alt="" />
          <p className="font-bold text-center">Friends Fund you</p>
          <p className="text-center">Your friends will fund to develop</p>
        </div>
         <div className="item flex flex-col items-center justify-center ">
          <img className=" bg-slate-400 rounded-full p-2" src="/fans.gif" width={80} alt="" />
          <p className="font-bold text-center">Fans want to help</p>
          <p className="text-center">Your fans are available to help you</p>
        </div>
      </div>
     </div>
     <div className="bg-white h-1 opacity-10">
     </div>
     <div className="text-white container mx-auto py-16 px-5 md:px-0 gap-5 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center my-4">Learn more about us</h2>
      <p className='text-base text-center' >Empowering dreams is at the heart of what we do. We’ve built a space where passionate individuals can connect with a community that believes in their potential.  </p>
      <p className="text-base text-center"> Whether it’s a student pursuing education, an artist crafting their masterpiece, a developer building the next big app, or an innovator solving real-world problems, Fund the Future exists to help them thrive.</p>
      <p className='text-base text-center'>At Fund the Future, we’re on a mission to empower dreamers, creators, and innovators across India by bridging the gap between passion and possibility. Our platform is more than just a crowdfunding space—it’s a thriving community where students, artists, developers, and visionaries find the support they need to turn their ideas into reality. </p>

     
     </div>
    </>
  );
}

export const metadata = {
  title: "Fund The Future",
  description: "A crowdfunding platform for creators. Get funded by your fans and followers.",
};

import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>rehire</title>
      </Head>
      <div className="flex flex-col justify-center items-center h-full w-full bg-white font-roboto">
        <div className="flex flex-row justify-between items-end h-[10%] w-full md:w-5/6 mt-8 text-black border-b-2 border-slate-900">
          <div className="ml-6 md:ml-2 mb-4 md:mb-2 text-xl md:text-4xl font-bold">
            <Image src={"/logo.png"} alt="rehire logo" width={130} height={80} />
          </div>
          <div className="mb-5 md:mb-2 mr-6 md:mr-2 md:text-xl italic">
            <button className="gradient px-6 py-2 rounded-3xl text-white text-sm md:text-base shadow-xl" onClick={()=> window.open("https://forms.gle/NpZaz8jPBoYEBLDPA", "_blank")}>
              Hiring?
            </button>
          </div>
        </div>
        <div className="h-[85%] w-full md:w-5/6 p-4 gradient">
          <iframe
            src="https://airtable.com/embed/shrev2gtcqs7LNNCG?backgroundColor=green&viewControls=on"
            frameBorder="0"
            onMouseWheel=""
            width="100%"
            height="100%"
            className="airtable"
          ></iframe>
        </div>
        <div className="flex justify-center items-center text-base md:text-lg italic h-[8%] w-full bg-white p-4 text-black">
            Created by Chirag Gupta (
            <a className="underline text-blue-500"
              href="https://twitter.com/core_chirag"
            >
              @core_chirag
            </a>
            )
          </div>
      </div>
    </div>
  );
}

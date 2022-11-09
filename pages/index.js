import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>rehire</title>
      </Head>
      <div className="flex flex-col justify-center items-center h-full w-full bg-white">
        <div className="flex flex-col lg:flex-row items-start lg:justify-between lg:items-end w-full md:w-4/6 mt-8 text-black border-b-2 border-slate-900">
          <div className="lg:ml-2 md:mb-2 text-xl md:text-4xl font-bold">
            rehire
          </div>
          <div className="md:mb-2 text-[12px] md:text-xl italic">
            reviving the hiring scene.
          </div>
        </div>
        <div className="h-4/6 w-full md:w-4/6 p-4 bg-amber-300">
          <iframe
            class="airtable-embed"
            src="https://airtable.com/embed/shrev2gtcqs7LNNCG?backgroundColor=green&viewControls=on"
            frameborder="0"
            onmousewheel=""
            width="100%"
            height="100%"
            className="airtable"
          ></iframe>
        </div>
        <div className="flex justify-center items-center text-xl h-1/6 w-full md:w-4/6 bg-emerald-400 p-4">
          Created by Chirag Gupta (<a className="text-emerald-800" href="https://twitter.com/core_chirag">@core_chirag</a>)
        </div>
      </div>
    </div>
  );
}

import { CenterLimitWidth } from "@/components/CenterLimitWidth";
import FullImageHero from "@/components/FullImageHero";

import BuildSpaceIcon from "@/assets/buildspace.svg";
import { Attribution } from "@/components/Attribution";
import GradualTextOnView from "@/components/GradualTextOnView";

export default function Home() {

  /* eslint-disable react/no-unescaped-entities */
  const gradualText = "look at what's around you do you feel inspired your life is just a cage if it's not pushing you higher all the way all the way we come along this way all the way all the way we made friends along all the way all the way...";

  return (

    <main className="flex flex-col items-center bg-[#0f0f0f] text-white">
      <FullImageHero imageSrc="/img/sfbg01.jpg" gradientFromColor="from-[#0f0f0f]" >
        <div
          className="absolute top-5 right-5">
          <Attribution imageCredit={(<a href="https://unsplash.com/photos/a-view-of-a-city-from-a-hill-above-the-clouds-X7GnLpLdl0M">img by Cedric Letsch</a>)} /></div>
      </FullImageHero>
      <div className="relative h-screen"></div>
      <div className="-mt-56 z-10 ">
        <CenterLimitWidth>

          <div className="w-full text-center">
            <h1 className="text-6xl md:text-8xl font-bold pb-4">bldsp fls</h1>
            <h2 className="text-4xl md:text-6xl font-bold">nextjs starter project<br></br>let's build something epic<br></br>\m/</h2>
          </div>
        </CenterLimitWidth>
      </div>

      <CenterLimitWidth>
        <div className="w-full text-center">
          <div className="py-12 space-y-8">
            <p className="font-bold">feel free to use this for whatever</p>
            <GradualTextOnView text={gradualText} />
          </div>
        </div>
        <div className="pt-4 w-full text-center">
          <p className="font-bold">made with heart emoji - <a href="http://www.scottplusplus.com" target="_blank">ScottPlusPlus</a> for <a href="https://buildspace.so/home" target="_blank"><BuildSpaceIcon className="inline-block h-4 w-auto fill-white" /></a> s5</p>
        </div>
      </CenterLimitWidth>
    </main>
  );
}


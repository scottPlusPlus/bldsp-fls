import { Attribution } from "@/components/Attribution";
import { CenterLimitWidth } from "@/components/CenterLimitWidth";
import BuildSpaceIcon from "@/assets/buildspace.svg";
import FullImageHero from "@/components/FullImageHero";
import GrainTexture from "@/components/GrainTexture";
import TypingTextOnView from "@/components/TypingTextOnView";

export default function Home() {

  /* eslint-disable react/no-unescaped-entities */
  const gradualText = "look at what's around you do you feel inspired your life is just a cage if it's not pushing you higher all the way all the way we come along this way all the way all the way we made friends along all the way all the way...          ";
  const cssText = "font-bold";

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
            <h2 className="text-4xl md:text-6xl font-bold">nextjs project<br></br>let's build epic things<br></br>\m/</h2>
          </div>
        </CenterLimitWidth>
      </div>

      <CenterLimitWidth>
        <div className="w-full text-center">
          <div className="py-12 space-y-8">
            <p className={cssText}>feel free to <u><a href="https://github.com/scottPlusPlus/bldsp-fls" target="_blank">use this</a></u> for whatevs</p>

            <p className={cssText}>GPT-Style Typing:</p>
            <TypingTextOnView text={gradualText} repeat={true} />

            <p className={cssText}>Grainy Image:</p>
            <div className="flex flex-wrap gap-8 justify-center items-center">
              <div className="w-96 h-72 relative">
                <img
                  src="/img/ss_grainy_image.jpg"
                  alt="san francisco"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <GrainTexture />
              </div>
              <div className="w-96 h-72 relative">
                <img
                  src="/img/sfbg03.jpg"
                  alt="san francisco"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <GrainTexture />
              </div>
            </div>

          </div>
          <p className={cssText}>made with heart emoji - <a href="http://www.scottplusplus.com" target="_blank">ScottPlusPlus</a> for <a href="https://buildspace.so/home" target="_blank"><BuildSpaceIcon className="inline-block h-4 w-auto fill-white" /></a> s5</p>
        </div>
      </CenterLimitWidth>
    </main>
  );
}


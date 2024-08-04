import { DestinationFilter } from '../import';
import './HeroVideo.css';

const HeroVideo = () => {
     return (
          <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white">
               <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <video
                         className="min-w-full min-h-full absolute object-cover"
                         src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                         type="video/mp4"
                         autoPlay
                         muted
                         loop
                    ></video>
               </div>
               <div className="video-content space-y-2 z-10 flex flex-col gap-10 px-4 md:px-8 lg:px-16">
                    <div className="flex flex-col">
                         <h1 className="font-light text-4xl md:text-5xl lg:text-6xl">Welcome to University</h1>
                         <h3 className="font-light text-xl md:text-2xl lg:text-3xl">
                              with <span className="text-blue-500 font-bold">
                                   {/* <span className="bg-gradient-to-r from-blue-500 via-green-500 via-red-500 to-orange-500 bg-clip-text text-transparent font-bold">
                                        C
                                   </span> */}
                                   COL Global</span>

                         </h3>
                    </div>
                    <DestinationFilter />
               </div>
          </section>
     );
};

export default HeroVideo;

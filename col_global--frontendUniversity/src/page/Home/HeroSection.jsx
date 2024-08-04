import Slider from 'react-slick';
import PropTypes from 'prop-types';
import oneliderSettingsAuto from '../../components/silderSettings/oneliderSettingsAuto';
import carouselImages from '../../data/carouselImages';


const Card = ({ imgSrc, index }) => (
     <div className=" h-full w-full rounded-lg">
          <img src={imgSrc} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-lg " />
     </div>
);


Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     index: PropTypes.number.isRequired,
};
const HeroSection = () => {
     return (
          <section className="relative h-[50vh] md:h-[75vh] flex flex-col items-center justify-center text-center text-white">
               <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <Slider {...oneliderSettingsAuto}>
                         {carouselImages.map((image, index) => (
                              <Card key={index} imgSrc={image.imgSrc} index={index + 1} />
                         ))}
                    </Slider>
               </div>
               <div className="video-content space-y-2 z-10 flex flex-col gap-10">
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 gap-8">
                         <div className='flex flex-col gap-1'>
                              <h1 className="text-4xl md:text-6xl font-bold">Your Global Education Hub</h1>
                              <p className="text-lg md:text-2xl">Start Your Journey With Us</p>
                         </div>
                         <button className="px-6 py-3 text-lg font-semibold text-white border rounded-md">
                              Get Started
                         </button>
                    </div>
               </div>
          </section>
     );
};

export default HeroSection;

import Slider from 'react-slick';
import PropTypes from 'prop-types';
import oneliderSettingsAuto from '../../components/silderSettings/oneliderSettingsAuto';
import carouselImages from '../../data/carouselImages';
import { Link } from 'react-router-dom';
import { DestinationFilter } from '../../container/import';


const Card = ({ imgSrc, index }) => (
     <div key={index}
          className="h-screen w-screen flex items-center justify-center"
          style={{
               backgroundImage: `url(${imgSrc})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
          }}
     />
);


Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     index: PropTypes.number.isRequired,
};
const HeroSection = () => {
     return (
          <section className="relative flex flex-col h-[77vh] items-center justify-center text-center text-white">
               <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <Slider {...oneliderSettingsAuto}>
                         {carouselImages.map((image, index) => (
                              <Card key={index} imgSrc={image.imgSrc} index={index + 1} />
                         ))}
                    </Slider>
               </div>
               <div className="video-content space-y-2 md:p-20 p-10 z-10 flex flex-col gap-10">
                    <div className='absolute top-0 left-[20%]'>
                         <DestinationFilter />
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 gap-8">
                         <div className='flex flex-col gap-1'>
                              <h1 className="text-lg sm:text-2xl md:text-4xl font-bold">Your Global Education Hub</h1>
                              <p className="text-sm sm:text-lg md:text-2xl">Start Your Journey With Us</p>
                         </div>
                         <Link to={`all-country`}>
                              <button className="px-6 py-3 text-lg font-semibold text-white border rounded-md">
                                   Get Started
                              </button>
                         </Link>
                    </div>
               </div>
          </section>
     );
};

export default HeroSection;
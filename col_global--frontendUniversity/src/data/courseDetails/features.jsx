import { FaHandsHelping, FaChalkboardTeacher, FaCloudDownloadAlt, FaDesktop } from 'react-icons/fa';
const features = [
     { icon: <FaHandsHelping className='text-2xl' />, title: 'Skill-based, hands-on learning', description: 'Practice new skills by completing job-related tasks.' },
     { icon: <FaChalkboardTeacher className='text-2xl' />, title: 'Expert guidance', description: 'Follow along with pre-recorded videos from experts using a unique side-by-side interface.' },
     { icon: <FaCloudDownloadAlt className='text-2xl' />, title: 'No downloads or installation required', description: 'Access the tools and resources you need in a pre-configured cloud workspace.' },
     { icon: <FaDesktop className='text-2xl' />, title: 'Available only on desktop', description: 'This Guided Project is designed for laptops or desktop computers with a reliable Internet connection, not mobile devices.' },
];

export default features;

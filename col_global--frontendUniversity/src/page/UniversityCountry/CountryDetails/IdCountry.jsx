import CounrtyScholarship from "../../../container/Scholarship/CounrtyScholarship";
import CountryHero from "./CountryHero";
import LifeStyle from "./LifeStyle";
import SilderSelectCountryUniversity from "./SilderSelectCountryUniversity";

const IdCountry = () => {
     return (
          <div className="flex flex-col">
               <CountryHero />
               <SilderSelectCountryUniversity />
               <CounrtyScholarship />
               <LifeStyle />
          </div>
     )
}

export default IdCountry;
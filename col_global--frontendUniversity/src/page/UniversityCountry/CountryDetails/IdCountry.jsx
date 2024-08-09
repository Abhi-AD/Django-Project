import CountryHero from "./CountryHero";
import LifeStyle from "./LifeStyle";
import SilderSelectCountryUniversity from "./SilderSelectCountryUniversity";

const IdCountry = () => {
     return (
          <div className="flex flex-col gap-10">
               <CountryHero />
               <SilderSelectCountryUniversity />
               <LifeStyle />
          </div>
     )
}

export default IdCountry;
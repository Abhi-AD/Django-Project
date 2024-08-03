import { LifeStyle } from "../../../components/import";
import { SelectEventsSilder, SilderSelectUniversity } from "../../../container/import"
import CountryHero from "./CountryHero";

const IdCountry = () => {
     return (
          <div className="flex flex-col gap-10 mb-2">
               <CountryHero />
               <SilderSelectUniversity />

               <SelectEventsSilder />
               <LifeStyle />
          </div>
     )
}

export default IdCountry;
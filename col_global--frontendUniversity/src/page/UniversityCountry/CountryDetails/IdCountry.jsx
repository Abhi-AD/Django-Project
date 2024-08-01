import { LifeStyle } from "../../../components/import";
import { EventsSilder, Scholarship, TopUniversity } from "../../../container/import"
import CountryHero from "./CountryHero";

const IdCountry = () => {
     return (
          <div className="flex flex-col gap-10">
               <CountryHero />
               <TopUniversity />
               <Scholarship />
               <EventsSilder />
               <LifeStyle />
          </div>
     )
}

export default IdCountry;
import React from "react";
import SectionHome from "../home/SectionHome";
import SectionRentals from "../rentals/SectionRentals";
import SectionCategorie from "../categorie/SectionCategorie";
import About from "../about/About";
import Contact from "../contact/Contact";
import SectionBloc from "../bloc/SectionBloc";
import BasDePage from "../basdePage/BasDePage";
import CopyRight from "../copyRight/CopyRight";
import NavBar from "../header/NavBar";


function Accueil() {
  return (
    <div className="h-full">
      <NavBar  />
    

      <SectionHome   />
      <SectionRentals className="w-full mb-24" />
      <SectionCategorie className="flex flex-col items-center" />
      <About className="mt-24 "/>
      <Contact className="mt-24 flex justify-center"/>
      <SectionBloc className="mt-24"/>
      <BasDePage className="mt-24"/>
      <CopyRight/>



    </div>
  );
}

export default Accueil;

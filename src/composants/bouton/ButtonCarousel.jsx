import React from "react";

// import { Button } from "primereact/button";

import { Chip } from 'primereact/chip';
        

function ButtonCarousel({name}) {
  return (
    <div className="card flex flex-wrap gap-2">
      {/* <Button rounded  >{name}</Button> */}
      <Chip label= {name} className="bg-black/5 text-black w-[20vh] p-2 h-[50px]/ flex justify-center text-sm rounded-full "/>
    </div>
  );
}

export default ButtonCarousel;

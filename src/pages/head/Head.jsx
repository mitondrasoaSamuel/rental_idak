import React from "react";
import Ligne from "../../composants/ligne/Ligne";

import { Button } from "primereact/button";
import Card from "../../composants/card/Card";
import Mark from "../../assets/Mask group.png";
import Mark2 from "../../assets/image 26.png";
import Mark3 from "../../assets/image 27.png";

import Slider from "react-slick";
import ButtonCarousel from "../../composants/bouton/ButtonCarousel";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(128, 128, 128, 0.5)",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(128, 128, 128, 0.5)",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SectionCategorie({ className }) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1134,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  // =========================================================================================================

  const mapBouton = [
    {
      name: "All Items (5125)",
    },
    {
      name: "Residential Spaces (64)",
    },
    {
      name: "Sports Venues",
    },
    {
      name: "Meeting Spaces",
    },
    {
      name: "Vans & Buses",
    },
    {
      name: "Cars & SUVs ",
    },
    {
      name: "Lorries & Industrial Vehicles",
    },
  ];

  return (
    <div className={className}>
      <div className=" w-[420px]  sm:w-[595px] lg:w-[950px] xl:w-[1200px] 2xl:w-[1450px] flex flex-col justify-around items-center gap-y-14">


        <div className=" w-[60vh]  flex flex-col justify-between items-center gap-y-5">
          <h2 className="font-bold text-3xl  md:text-5xl text-black ">Featured Listings</h2>
          <Ligne className="flex justify-center gap-x-2" />
        </div>

        <div className=" w-full flex flex-col items-center h-[1374px]/ bg-red-300/ space-y-14">


          <div className="w-full flex flex-col justify-center     ">
            <Slider {...settings}>
              {mapBouton.map(({ name }) => (
                <ButtonCarousel name={name} />
              ))}
            </Slider>
          </div>

          {/* ============================================= section 2 ================================================================ */}
          <div className=" w-full  bg-red-500/ space-y-[60px] ">


            <div className=" w-full  flex flex-col gap-y-5 lg:items-center 2xl:flex-row 2xl:gap-x-5 2xl:justify-center   ">

              {/* <div className="flex flex-col gap-y-5 lg:gap-x-5 lg:flex-row  "> */}

                  <div className=" w-full lg:w-[48vh]  h-[605px] border border-black/25 rounded-lg">
                    <Card
                      style={{
                        backgroundImage: `url(${Mark})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        borderRadius: `2px`,
                      }}
                    />
                </div>

                <div className=" w-full lg:w-[48vh] h-[605px] border border-black/25 rounded-lg">
                  <Card
                    style={{
                      backgroundImage: `url(${Mark2})`,
                      backgroundRepeat: `no-repeat`,
                      backgroundSize: `cover`,
                      backgroundPosition: `center`,
                      borderRadius: `5px`,
                    }}
                  />
                </div>

              {/* </div> */}
              
              
              {/* <div className=" w-full h-[605px] lg:w-[48vh]   border border-black/25 rounded-lg"> */}
                <Card
                  style={{
                    backgroundImage: `url(${Mark3})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    borderRadius: `5px`,
                  }}
                />
              {/* </div> */}
              
            </div>

            {/* ====-------------------------------------- */}
            {/* <div className=" w-full  flex flex-col gap-y-5 lg:items-center 2xl:flex-row 2xl:gap-x-5 2xl:justify-center   ">

              <div className="flex flex-col gap-y-5 lg:gap-x-5 lg:flex-row  ">

                  <div className=" w-full lg:w-[48vh]  h-[605px] border border-black/25 rounded-lg">
                    <Card
                      style={{
                        backgroundImage: `url(${Mark})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        borderRadius: `2px`,
                      }}
                    />
                </div>

                <div className=" w-full lg:w-[48vh] h-[605px] border border-black/25 rounded-lg">
                  <Card
                    style={{
                      backgroundImage: `url(${Mark2})`,
                      backgroundRepeat: `no-repeat`,
                      backgroundSize: `cover`,
                      backgroundPosition: `center`,
                      borderRadius: `5px`,
                    }}
                  />
                </div>

              </div>
              
              
              <div className=" w-full h-[605px] lg:w-[48vh]   border border-black/25 rounded-lg">
                <Card
                  style={{
                    backgroundImage: `url(${Mark3})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    borderRadius: `5px`,
                  }}
                />
              </div>
              
            </div> */}
            {/* =================== */}
            
          </div>
        </div>


        <div>
            <Button label="Load More" severity="danger" rounded />
        </div>
      </div>
    </div>
  );
}

export default SectionCategorie;

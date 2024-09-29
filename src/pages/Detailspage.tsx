import Navbar from "@/components/Navbar/navbar";
import Slider from "react-slick";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer/Footer";

export default function Details() {
  const { yachtId } = useParams<{ yachtId: string }>();
  const yachts = useSelector((state: RootState) => state.yacht);
  const list = yachts.find((c) => c.id.toString() === yachtId);
  const [selectedImage, setSelectedImage] = useState(list?.images[0]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full lg:w-[1000px] mx-auto my-4 p-6">
        {list ? (
          <div className="flex flex-col">
            <img src={selectedImage} />
            <div className="w-full flex justify-center">
              <div className="w-1/2">
                <Slider {...settings}>
                  {list.images.map((image, index) => (
                    <div key={index} className="p-2">
                      <img
                        onClick={() => setSelectedImage(image)}
                        src={image}
                        alt={`Yacht ${list.name}`}
                        className="h-24 w-32 object-cover rounded-sm cursor-pointer"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <p className="my-6">{list.description}</p>
            <div className="border-[1px] p-4">
              <h1 className="uppercase">Specifications</h1>
              <p className="uppercase border-t-[1px] mt-2">
                Fuel capacity: {list.fuelCapacity}
              </p>
              <p className="uppercase border-t-[1px] mt-2">
                Cruising speed: {list.cruiseSpeed}
              </p>
              <p className="uppercase border-t-[1px] mt-2">
                Maximum speed: {list.maxSpeed}
              </p>
              <p className="uppercase border-t-[1px] mt-2">
                Guests: {list.people}
              </p>
              <p className="uppercase border-t-[1px] mt-2">
                Guests Beds: {list.beds}
              </p>
              <p className="uppercase border-t-[1px] mt-2">
                Builder: {list.builder}
              </p>
              <p className="uppercase border-t-[1px] mt-2">
                Length: {list.size}
              </p>
              <p className="uppercase border-t-[1px] mt-2">Name: {list.name}</p>
              <p className="uppercase border-t-[1px] mt-2">
                Model: {list.model}
              </p>
              <p className="uppercase border-t-[1px] mt-2">
                Price per Day: ${list.pricePerDay}
              </p>
              <p className="uppercase border-t-[1px] mt-2">
                Price per Week: ${list.pricePerWeek}
              </p>
              <p className="uppercase border-t-[1px] mt-2">
                Location: {list.location}
              </p>
            </div>
          </div>
        ) : (
          <p>Yacht not found</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

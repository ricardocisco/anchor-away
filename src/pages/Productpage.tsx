import YachtCard from "@/components/Card/YachtCard";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import SelectLocation from "@/components/Select/SelectLocation";
import SliderBed from "@/components/Slider/SliderBed";
import SliderGuest from "@/components/Slider/SliderGuest";
import SliderLenght from "@/components/Slider/SliderLenght";
import SliderPrice from "@/components/Slider/SliderPrice";
import SliderYear from "@/components/Slider/SliderYear";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Product() {
  const yachts = useSelector((state: RootState) => state.yacht);
  const buscar = useSelector((state: RootState) => state.query.query);
  const slidePrice = useSelector((state: RootState) => state.query.slidePrice);
  const slideBed = useSelector((state: RootState) => state.query.slideBeds);
  const slideSize = useSelector((state: RootState) => state.query.slideLength);
  const slideYear = useSelector((state: RootState) => state.query.slideYear);
  const slideGuest = useSelector((state: RootState) => state.query.slideGuests);
  const selectLocation = useSelector(
    (state: RootState) => state.query.selectLocation
  );

  const filteredList = yachts.filter(
    (yacht) =>
      yacht.name.toLowerCase().includes(buscar.toLowerCase()) &&
      yacht.model.toLowerCase().includes(buscar.toLowerCase()) &&
      yacht.pricePerDay >= slidePrice &&
      yacht.beds >= slideBed &&
      yacht.size >= slideSize &&
      yacht.year >= slideYear &&
      yacht.people >= slideGuest &&
      (selectLocation ? yacht.country === selectLocation : true)
  );

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto">
        <div className="w-full md:w-[320px] h-full bg-wth p-6">
          <p className="p-4 text-lg">{filteredList.length} Yachts Found</p>
          <SliderPrice />
          <SliderBed />
          <SliderLenght />
          <SliderYear />
          <SliderGuest />
          <SelectLocation />
        </div>
        <div className="flex-1 p-4">
          <SearchBar />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredList.map((yacht, index) => (
              <YachtCard key={index} {...yacht} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

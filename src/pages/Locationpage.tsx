import Navbar from "@/components/Navbar/navbar";
import { locations } from "@/data/data";

export default function Location() {
  return (
    <div>
      <Navbar />
      <div className="w-[1000px] mx-auto">
        <p className="text-3xl text-center mt-4">Locations</p>
        <div className="my-4">
          {locations.map((location, index) => (
            <div
              key={index}
              className="relative h-96 w-full mb-4 hover:scale-105 cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${location.img})` }}
              ></div>
              <div className="absolute inset-0 bg-white opacity-40"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <p className="text-black text-3xl font-semibold">
                  {location.nome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { dataProps, viewList } from "@/redux/reducers/itens";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function YachtCard({
  id,
  name,
  model,
  pricePerDay,
  people,
  beds,
  images,
}: dataProps) {
  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch(viewList());
  };

  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg  max-w-sm w-full mx-auto my-5 hover:scale-105">
      <img className="h-[240px] object-cover" src={images[0]} alt={model} />
      <h2 className="text-lg font-semibold uppercase my-2">{name}</h2>
      <p className="text-sm font-semibold uppercase">{model}</p>
      <div className="flex gap-10 my-4">
        <p className="text-gray-700 text-sm">
          Guests: {people} Sleeps: {beds}
        </p>
        <p className="text-gray-700 text-sm">Price/Day: ${pricePerDay}</p>
      </div>
      <Link
        to={`/datails/${id}`}
        onClick={handleDispatch}
        className="py-2 px-8 bg-blue my-4 text-white rounded-sm"
      >
        Sobre
      </Link>
    </div>
  );
}

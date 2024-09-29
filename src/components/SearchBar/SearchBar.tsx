import { setQuery } from "@/redux/reducers/busca";
import { RootState } from "@/redux/store";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBar() {
  const dispatch = useDispatch();

  const query = useSelector((state: RootState) => state.query.query);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(event.target.value));
  };

  return (
    <div className="flex items-center bg-gray-200 rounded-md py-2 px-4">
      <Search size={18} color="black" />
      <input
        placeholder="Pesquisar por um yacht..."
        value={query}
        onChange={handleSearch}
        className="focus:outline-none bg-transparent ml-3 w-full"
      />
    </div>
  );
}

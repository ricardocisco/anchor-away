import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setLocation } from "@/redux/reducers/busca";

export default function SelectLocation() {
  const dispatch = useDispatch();

  const location = useSelector(
    (state: RootState) => state.query.selectLocation
  );

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLocation(event.target.value));
  };

  return (
    <div className="w-full p-4">
      <select
        value={location}
        onChange={handleSelect}
        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Selecione um local</option>{" "}
        <option value="Monaco">Monaco</option>
        <option value="Spain">Spain</option>
        <option value="Greece">Greece</option>
        <option value="Italy">Italy</option>
        <option value="France">France</option>
        <option value="Croatia">Croatia</option>
        <option value="Montenegro">Montenegro</option>
        <option value="Usa">Usa</option>
      </select>
    </div>
  );
}

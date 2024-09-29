import { setGuest } from "@/redux/reducers/busca";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "../ui/slider";
import { Label } from "../ui/label";

export default function SliderGuest() {
  const dispatch = useDispatch();

  const guests = useSelector((state: RootState) => state.query.slideGuests);

  const handleChange = (value: number) => {
    dispatch(setGuest(value));
  };

  return (
    <div className="p-4">
      <Label>Guests: {guests}</Label>
      <Slider
        value={[guests]}
        onValueChange={(value) => handleChange(value[0])}
        min={0}
        max={18}
        step={2}
      />
    </div>
  );
}

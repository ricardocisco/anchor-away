import { setYear } from "@/redux/reducers/busca";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "../ui/slider";
import { Label } from "../ui/label";

export default function SliderYear() {
  const dispatch = useDispatch();

  const year = useSelector((state: RootState) => state.query.slideYear);

  const handleChange = (value: number) => {
    dispatch(setYear(value));
  };

  return (
    <div className="p-4">
      <Label>Year: {year}</Label>
      <Slider
        value={[year]}
        onValueChange={(value) => handleChange(value[0])}
        min={1980}
        max={2024}
        step={10}
      />
    </div>
  );
}

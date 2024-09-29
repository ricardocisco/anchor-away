import { setLenght } from "@/redux/reducers/busca";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "../ui/slider";
import { Label } from "../ui/label";

export default function SliderLenght() {
  const dispatch = useDispatch();

  const size = useSelector((state: RootState) => state.query.slideLength);

  const handleChange = (value: number) => {
    dispatch(setLenght(value.toString()));
  };

  return (
    <div className="p-4">
      <Label>Length: {size.toString()}</Label>
      <Slider
        value={[Number(size)]}
        onValueChange={(value) => handleChange(value[0])}
        min={0}
        max={75}
        step={5}
      />
    </div>
  );
}

import { setPrice } from "@/redux/reducers/busca";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "../ui/slider";
import { Label } from "../ui/label";

export default function SliderPrice() {
  const dispatch = useDispatch();

  const price = useSelector((state: RootState) => state.query.slidePrice);

  const handleChange = (value: number) => {
    dispatch(setPrice(value));
  };

  return (
    <div className="p-4">
      <Label>Prices: {price}</Label>
      <Slider
        value={[price]}
        onValueChange={(value) => handleChange(value[0])}
        min={0}
        max={15000}
        step={100}
      />
    </div>
  );
}

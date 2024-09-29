import { setBed } from "@/redux/reducers/busca";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "../ui/slider";
import { Label } from "../ui/label";

export default function SliderBed() {
  const dispatch = useDispatch();

  const beds = useSelector((state: RootState) => state.query.slideBeds);

  const handleChange = (value: number) => {
    dispatch(setBed(value));
  };

  return (
    <div className="p-4">
      <Label>Beds: {beds}</Label>
      <Slider
        value={[beds]}
        onValueChange={(value) => handleChange(value[0])}
        min={1}
        max={10}
        step={1}
      />
    </div>
  );
}

import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface SectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  reverse?: boolean;
  buttonLink?: string;
}

export default function SectionHome({
  title,
  description,
  buttonText,
  imageUrl,
  reverse,
  buttonLink,
}: SectionProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center py-2`}
    >
      <div className="w-full md:w-1/2 p-6">
        <img src={imageUrl} alt={title} className="rounded-lg w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base mb-6">{description}</p>
        <Button asChild variant="outline" className="bg-blue text-white p-6">
          <Link to={buttonLink ?? "/"}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
}

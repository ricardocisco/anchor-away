import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/navbar";
import SectionHome from "@/components/Section/SectionHome";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="w-full 2xl:w-[1400px] mx-auto">
        <SectionHome
          title="Discover Our Fleet"
          description="From sleek modern designs to classic wooden boats, our diverse collection of yachts caters to every taste and style."
          buttonText="Discover Yachts"
          imageUrl="/yatch.jpg"
          buttonLink="/yachts"
        />
        <SectionHome
          title="Introducing the Azra Yacht: Luxury Redefined"
          description="The Azra Yacht is a true marvel of engineering and design. With state-of-the-art technology, this vessel offers an unparalleled yachting experience."
          buttonText="Book now"
          imageUrl="/yatch2.jpg"
          reverse
          buttonLink="/yachts"
        />
        <SectionHome
          title="Elevate Your Yachting"
          description="Imagine the thrill of gliding across the waves, the wind in your hair, the sun on your face. Our premium yachts are designed to provide you with unparalleled comfort."
          buttonText="Personalize Your Journey"
          imageUrl="/yatch3.jpg"
          buttonLink="/yachts"
        />
        <SectionHome
          title="Explore Our Yacht"
          description="From sleek motor yachts to classic sailboats, our diverse collection of vessels offers something for every adventurer."
          buttonText="Discover Yachts"
          imageUrl="/yatch4.jpg"
          buttonLink="/yachts"
        />
      </div>
      <div className="flex justify-center w-full 2xl:w-[1400px] mx-auto">
        <div className="flex flex-col p-8">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl lg:text-3xl mt-2">
              Elevate Your Yachting Journey
            </h1>
            <h2 className="text-2xl lg:text-3xl mt-2">
              Discover the Difference
            </h2>
            <p className="text-base lg:text-xl mt-2">
              At our yacht rental company, we are dedicated to providing you
              <br />
              with an unparelleledexperience on the water. Our fleet of premium
              <br />
              yachts is meticulously maintaned
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-evenly gap-5 my-5">
            <img src="/yatch7.jpg" className="lg:w-1/3 rounded-sm" />
            <img src="/yatch5.jpg" className="lg:w-1/3 rounded-sm" />
            <img src="/yatch6.jpg" className="lg:w-1/3 rounded-sm" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

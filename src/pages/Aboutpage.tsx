import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:w-[800px] mx-auto gap-4 my-2 p-8">
        <h1 className="text-xl md:text-3xl font-semibold">About Us</h1>
        <p className="text-lg md:text-xl">
          Welcome to Anchor Away, where luxury meets the open waters. Our yacht
          rental service is dedicated to offering you an unparalleled
          experience, whether you're planning a serene getaway, a lavish
          celebration, or a corporate retreat on the water.
        </p>
        <h2 className="text-xl md:text-3xl font-semibold">Who We Are</h2>
        <p className="text-lg md:text-xl">
          At Anchor Away, we believe that every voyage should be as unique as
          our clients. With a fleet of meticulously maintained, premium yachts,
          we provide top-tier service and personalized itineraries to ensure
          that your time with us is nothing short of extraordinary. Our team of
          experienced professionals is committed to delivering seamless and
          unforgettable adventures, from the moment you book to the last sunset
          you watch aboard.
        </p>
        <h2 className="text-xl md:text-3xl font-semibold">Our Fleet</h2>
        <p className="text-lg md:text-xl">
          Our collection of yachts ranges from sleek, intimate vessels for
          smaller gatherings to larger, extravagant yachts perfect for grand
          occasions. Each yacht is equipped with modern amenities and luxurious
          interiors to ensure comfort and style while you explore the seas.
        </p>
        <h2 className="text-xl md:text-3xl font-semibold">Why Choose Us</h2>
        <ul>
          <li className="text-lg md:text-xl">
            <strong className="text-xl md:text-2xl">Luxury Yachts:</strong>
            <br />
            We offer a diverse fleet of world-class yachts, each carefully
            selected for its elegance and performance.
          </li>
          <li className="text-lg md:text-xl">
            <strong className="text-xl md:text-2xl">
              Tailored Experiences:
            </strong>
            <br />
            Whether you're looking for a quiet escape or an exciting adventure,
            we work closely with you to craft a custom itinerary that suits your
            desires.
          </li>
          <li className="text-lg md:text-xl">
            <strong className="text-xl md:text-2xl">Professional Crew:</strong>
            <br />
            Our highly trained and dedicated crew members ensure that every
            detail of your journey is taken care of, allowing you to relax and
            enjoy the experience.
          </li>
          <li className="text-lg md:text-xl">
            <strong className="text-xl md:text-2xl">
              Exclusive Destinations:
            </strong>
            <br />
            Sail to some of the most beautiful and exclusive destinations in the
            world, from tropical paradises to hidden coves.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

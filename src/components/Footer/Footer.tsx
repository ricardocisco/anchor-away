export default function Footer() {
  return (
    <div className="w-full bg-wth items-center">
      <div className="w-full 2xl:w-[1400px] flex flex-wrap justify-evenly items-center mx-auto p-6">
        <div className="p-4">
          <p className="text-2xl font-semibold">Explore</p>
          <ul className="mt-2 cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Yachts</li>
            <li>Location</li>
          </ul>
        </div>
        <div className="p-4">
          <p className="text-2xl font-semibold">Connect</p>
          <ul className="mt-2 cursor-pointer">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="p-4">
          <p className="text-2xl font-semibold">Support</p>
          <ul className="mt-2 cursor-pointer">
            <li>FAQs</li>
            <li>Policies</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div>
        <section className="py-10 ">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
            <p className="text-lg mb-8 text-center">
              We’re excited to help you plan your next luxury yacht experience!
            </p>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <form
                action="/submit-contact"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-10 text-center">
              <h3 className="text-2xl font-semibold mb-4">Visit Us</h3>
              <p className="text-lg mb-6">
                Come meet us at our office by the marina!
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0906010046347!2d-122.41941568468192!3d37.77492977975865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2aa287fb%3A0x1cbf07734f5a4d2b!2s123+Marina+Blvd%2C+Ocean+City%2C+FL!5e0!3m2!1sen!2sus!4v1630340092398!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full h-80 md:h-96 rounded-lg shadow-lg"
              ></iframe>
            </div>

            <div className="mt-10 text-center">
              <h2 className="text-2xl">Get in Touch</h2>
              <p className="text-lg">
                We are available 7 days a week from 9 AM to 8 PM to answer any
                inquiries you may have.
              </p>
            </div>

            <div className="mt-10 text-center">
              <p className="text-lg">Phone: +1 (123) 456-7890</p>
              <p className="text-lg">
                Email:{" "}
                <a
                  href="mailto:info@youryachtcompany.com"
                  className="text-blue-600 hover:underline"
                >
                  info@youryachtcompany.com
                </a>
              </p>
              <p className="text-lg">
                Address: 123 Marina Boulevard, Ocean City, FL 12345
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

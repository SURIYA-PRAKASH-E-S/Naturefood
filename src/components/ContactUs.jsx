import Navbar from './Navbar';
import Footer from './Footer';

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-semibold text-green-600 mb-6">Contact Us</h1>

        <div className="space-y-6">
          {/* Email Section */}
          <div>
            <h2 className="text-xl font-semibold">Our Email</h2>
            <p className="text-gray-700">
              Reach us at: <a href="mailto:support@naturefood.com" className="text-green-600">support@naturefood.com</a>
            </p>
          </div>

          {/* Location Section */}
          <div>
            <h2 className="text-xl font-semibold">Our Location</h2>
            <p className="text-gray-700">
              Visit us at: 123 Organic St, Green Valley, Eco City, Earth
            </p>
          </div>

          {/* Google Map Embed Section */}
          <div>
            <h2 className="text-xl font-semibold">Find Us on the Map</h2>
            <iframe
              title="Nature Food Location"
              className="w-full h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243532.13854691573!2d-73.935242!3d40.730610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1d207f9c47%3A0x8ab3deba99c8f9f4!2sNew%20York%20City%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1676939266027!5m2!1sen!2sin"
              frameBorder="0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

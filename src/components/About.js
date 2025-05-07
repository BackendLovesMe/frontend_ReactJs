
import { aboutUsUrl } from "../Utils/constants";

const AboutUs = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto text-gray-800">

      {/* Hero Section */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-800">
          About <span className="text-blue-500">Food Zee</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Delicious meals, delivered fast. Discover why Food Zee is your go-to platform for food delivery.
        </p>
        <img
          src={aboutUsUrl}
          alt="Food Zee Banner"
          className="w-full h-72 object-cover rounded-2xl mt-8 shadow-xl"
        />
      </div>

      {/* Mission */}
      <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          At Food Zee, our mission is to connect food lovers with their favorite
          local restaurants. We believe in fast delivery, great taste, and
          customer satisfaction.
        </p>
      </div>

      {/* What makes us special */}
      <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
          What Makes Us Different?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-600">
          <li>Curated restaurant partnerships</li>
          <li>Real-time tracking</li>
          <li>Exclusive discounts & offers</li>
          <li>24/7 customer support</li>
        </ul>
      </div>

      {/* Team */}
      <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Meet the Team</h2>
        <p className="text-gray-600 leading-relaxed">
          Food Zee was founded by passionate foodies (Akshat) who wanted to
          simplify the food delivery experience. Our small but mighty team is
          dedicated to giving you the best service possible.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
          Order Now
        </button>
      </div>
      
    </div>
  );
};

export default AboutUs;

import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h1>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="example@example.com"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">Your Message</label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 h-32"
            />
          </div>

          <div>
            <button type="submit" className="w-full bg-yellow-600 text-white p-3 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600">Send Message</button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">Or reach us at:</p>
          <p className="text-blue-500">akshatMishra@FoodZee.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

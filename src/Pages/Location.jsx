import React from "react";

const Location = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Location
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Location Details */}
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700">
              Find Us Here
            </h3>
            <p className="text-lg text-gray-600">
              Galleria Shopping Complex, <br />
              Jollarpar Road, <br />
              Zindabazar, Sylhet, Bangladesh
            </p>
            <p className="text-lg text-gray-600">
              Open Hours: Mon - Sat, 9 AM - 6 PM
            </p>
            <p className="text-lg text-gray-600">
              Contact Us: <a href="tel:+880123456789" className="text-blue-500 underline">+880123456789</a>
            </p>
          </div>

          {/* Google Map */}
          
        </div>
      </div>
    </section>
  );
};

export default Location;

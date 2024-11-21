import React from "react";

const Location = () => {
  return (
    <section className="bg-gray-50 py-16 mt-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Location
        </h2>
        <p className="text-gray-500 text-lg w-[60%] mx-auto text-center mb-10">We're nestled in the heart of Sylhet, offering a convenient and accessible location for students, visitors, and professionals alike. Discover us at the vibrant hub of Jollarpar Road, Zindabazar—a place where innovation meets community</p>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Location Details */}
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700">
              Find Us Here
            </h3>
            <p className="text-lg text-gray-600">
              Headway Engineering Institute, <br />
              Galleria Shopping Complex, <br />
              Jollarpar Road, Zindabazar, <br />
              Sylhet, Bangladesh
            </p>
            <p className="text-lg text-gray-600">
              Open Hours: Mon - Sat, 9 AM - 6 PM
            </p>
            <p className="text-lg text-gray-600">
              Contact Us:{" "}
              <a href="tel:+880123456789" className="text-blue-500 underline">
                +880123456789
              </a>
            </p>
          </div>

          {/* Google Map */}
          <div className="lg:w-1/2 h-80 w-full">
            <iframe
              title="Our Location"
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.1032894706295!2d91.86488267614553!3d24.89445817790725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d5fb867345%3A0x5e2eb5893dfda5c7!2sHeadway%20Engineering%20Institute!5e0!3m2!1sen!2sin!4v1732190315808!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

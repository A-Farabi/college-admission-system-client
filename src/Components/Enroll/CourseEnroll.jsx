import React from 'react';

const EnrollForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const fullName = form.fullName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const course = form.course.value;
        const message = form.message.value;

        const formData = { fullName, email, phone, course, message };

        console.log('Form Submitted:', formData);
        // Add your API call or form handling logic here
        alert('Your application has been submitted successfully!');

        // Clear the form after submission
        form.reset();
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 mt-10">
            <h2 className="text-2xl font-bold text-center mb-4">Enroll for a Course</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Course</label>
                    <select
                        name="course"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>
                            Select a course
                        </option>
                        <option value="Computer Engineering">Computer Engineering</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Architecture">Architecture</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Electrical Fisheries">Electrical Fisheries</option>
                        <option value="Pharmacy">Pharmacy</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Message (Optional)</label>
                    <textarea
                        name="message"
                        placeholder="Add a message (optional)"
                        rows="4"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                >
                    Enroll Now
                </button>
            </form>
        </div>
    );
};

export default EnrollForm;

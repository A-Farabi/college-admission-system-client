import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter, FaX } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Footer = () => {

    const handleSubscribe = () => {

        const emailInput = document.querySelector('input[type="email"]');
        const emailValue = emailInput.value.trim();
        const checkbox = document.getElementById('terms');

        // validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValue) {
            Swal.fire({
                title: "ওই জুনিয়র !!",
                text: "ঠিকঠাক মতো ইমেইল দে।",
                imageUrl: "https://i.ibb.co.com/ZTfg6Kg/animation2.gif",
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: "Custom image"
            });   
            return;
        }

        if (!emailRegex.test(emailValue)) {
            Swal.fire({
                title: "ওই জুনিয়র !!",
                text: "ঠিকঠাক মতো ইমেইল দে।",
                imageUrl: "https://i.ibb.co.com/ZTfg6Kg/animation2.gif",
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: "Custom image"
            });  
            return;
        }

        if (!checkbox.checked) {
            Swal.fire({
                        title: "হালা !!",
                        text: "টার্মস এন্ড কন্ডিশন একসেপ্ট করবে কে ??",
                        imageUrl: "https://i.ibb.co.com/ZTfg6Kg/animation2.gif",
                        imageWidth: 400,
                        imageHeight: 300,
                        imageAlt: "Custom image"
                    });    
            return;
        }

        Swal.fire({
                    title: "Thanks Junior!",
                    text: "You Will Get Your Newsletter, Once It's Available",
                    imageUrl: "https://i.ibb.co.com/486Tg1t/animation.gif",
                    imageWidth: 400,
                    imageHeight: 300,
                    imageAlt: "Custom image"
                  }); 
    }

    return (
        <div>
            <footer className="bg-gray-800 text-gray-200 py-8">
                {/* Subscribe Section */}
                <div className="text-center space-y-4 px-4">
                    <h2 className="text-xl font-bold">Subscribe to our newsletter</h2>
                    <p className="text-gray-400">
                        Get expert advice for your journey to university delivered to your inbox each month. It’s short, and worthwhile — we promise!
                    </p>
                    <div className="flex flex-col items-center space-y-4">
                        <input
                            type="email"
                            id='email'
                            placeholder="farabisyl2017@gmail.com"
                            className="w-full max-w-md px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                        />
                        <div className="flex items-center space-x-2 text-gray-400">
                            <input type="checkbox" id="terms" className="w-4 h-4" />
                            <label htmlFor="terms" className="text-sm">
                                I confirm I am over 16 and agree to the Terms and Conditions and Privacy Notice.
                            </label>
                        </div>
                        <button onClick={handleSubscribe} className="px-6 py-2 bg-gray-600 text-white rounded-md transition hover:bg-yellow-600">
                            SUBSCRIBE NOW
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-gray-600" />

                {/* Footer Links & Copyright */}
                <div className="flex flex-col items-center space-y-6">
                    {/* Links */}
                    <div className="lg:flex text-center space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gray-300">About</a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">Contact us</a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">FAQs</a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">Terms and conditions</a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">Cookie policy</a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">Privacy</a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <Link className="text-gray-400 hover:text-gray-300 text-2xl"><FaFacebook></FaFacebook></Link>
                        <Link className="text-gray-400 hover:text-gray-300 text-2xl"><FaInstagram></FaInstagram></Link>
                        <Link className="text-gray-400 hover:text-gray-300 text-2xl"><FaSquareXTwitter></FaSquareXTwitter></Link>
                        <Link className="text-gray-400 hover:text-gray-300 text-2xl"><FaLinkedin></FaLinkedin></Link>
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-500 text-xl text-center">
                        Copyright © 2024 — Headway Engineering Institute
                    </p>
                    {/* Developer Contact */}
                    <div className="text-center">
                        <p className="text-lg font-semibold text-yellow-500">
                            Contact Developer:{" "}
                            <a
                                href="https://linkedin.com/in/mazidalfarabi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-yellow-500 hover:text-yellow-400"
                            >
                                linkedin.com/in/mazidalfarabi
                            </a>
                        </p>
                    </div>
                </div>
            </footer>        </div>
    );
};

export default Footer;
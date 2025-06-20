// src/components/ContactForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import contactImg from '../../assets/contact.png'; // Make sure this path is correct

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    country: '',
    phone: '',
    message: ''
  });

  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [userId] = useState(() => 'user_' + Math.random().toString(36).substr(2, 9));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      user_id: userId,
      ...formData
    };

    try {
      const response = await axios.post(
        'https://apxtoken.pythonanywhere.com/user/',
        payload,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      alert('Form submitted successfully!');
      console.log('POST response:', response.data);

      setFormData({ email: '', name: '', country: '', phone: '', message: '' });
    } catch (error) {
      alert('Error submitting form');
      console.error('POST error:', error.response?.data || error.message);
    }
  };

  const handleGetData = async () => {
    try {
      const response = await axios.get('https://apxtoken.pythonanywhere.com/user/');
      setFetchedUsers(response.data);
    } catch (error) {
      console.error('GET error:', error);
    }
  };

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 flex flex-col md:flex-row gap-10 items-center md:items-start justify-between">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h6 className="text-green-600 text-sm md:text-base mb-2">CONTACT US</h6>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-left">
            Reach out to us by<br />filling the form
          </h1>
          <img src={contactImg} alt="Contact" className="rounded-xl w-full h-auto max-w-md" />
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2">
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Business Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border border-gray-300 rounded px-3 py-2 text-sm"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="border border-gray-300 rounded px-3 py-2 text-sm"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-700 mb-1">Country*</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                  required
                >
                  <option value="" disabled>Select your country</option>
                  <option value="USA">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="India">India</option>
                  <option value="Australia">Australia</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Japan">Japan</option>
                  <option value="Mexico">Mexico</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-700 mb-1">Phone No</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us a little about the project..."
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white w-full px-6 py-3 rounded text-sm font-semibold cursor-pointer"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={handleGetData}
            className="mt-4 bg-gray-100 text-sm px-4 py-2 rounded hover:bg-gray-200 text-gray-800"
          >
            Fetch All Users (GET)
          </button>
        </form>
      </div>

      {/* Table to show fetched users */}
      {fetchedUsers.length > 0 && (
        <div className="mt-12 max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-semibold mb-4">Submitted Users:</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2 text-left">Name</th>
                  <th className="border px-3 py-2 text-left">Email</th>
                  <th className="border px-3 py-2 text-left">Country</th>
                  <th className="border px-3 py-2 text-left">Phone</th>
                  <th className="border px-3 py-2 text-left">Message</th>
                </tr>
              </thead>
              <tbody>
                {fetchedUsers.map((user, index) => (
                  <tr key={index} className="border-t">
                    <td className="border px-3 py-2">{user.name}</td>
                    <td className="border px-3 py-2">{user.email}</td>
                    <td className="border px-3 py-2">{user.country}</td>
                    <td className="border px-3 py-2">{user.phone}</td>
                    <td className="border px-3 py-2">{user.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm; 

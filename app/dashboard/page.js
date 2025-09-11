"use client"
import React, { useState } from "react";

// Reusable Input Component
const FormInput = ({ label, name, value, onChange, type = "text" }) => {
  return (
    <div className="mt-4">
      <label
        htmlFor={name}
        className="block text-gray-300 mb-1 text-sm"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 rounded-md bg-[#1c2541] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

// Main Dashboard Form
const DashboardForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    profilePicture: "",
    coverPicture: "",
    razorpayId: "",
    razorpaySecret: "",
  });

  // handleChange for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Send formData to backend here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0a0f1c]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f1629] p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-white text-2xl font-semibold text-center mb-6">
          Welcome to your Dashboard
        </h2>

        <FormInput
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <FormInput
          label="Profile Picture"
          name="profilePicture"
          value={formData.profilePicture}
          onChange={handleChange}
        />
        <FormInput
          label="Cover Picture"
          name="coverPicture"
          value={formData.coverPicture}
          onChange={handleChange}
        />
        <FormInput
          label="Razorpay Id"
          name="razorpayId"
          value={formData.razorpayId}
          onChange={handleChange}
        />
        <FormInput
          label="Razorpay Secret"
          name="razorpaySecret"
          value={formData.razorpaySecret}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default DashboardForm;

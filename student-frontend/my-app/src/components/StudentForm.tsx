"use client";

import { useState } from "react";
import { addStudent } from "@/lib/api";

export default function StudentForm() {
  const [form, setForm] = useState({
    name: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addStudent(form);
    setForm({ name: "", address: "" });
    window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 md:p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-3 mb-6"
    >
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={form.name}
        onChange={handleChange}
        className="border p-2 rounded w-full text-black"
        required
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        className="border p-2 rounded w-full text-black"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}
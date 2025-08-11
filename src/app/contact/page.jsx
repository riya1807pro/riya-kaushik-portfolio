"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  reason: z.string().min(1, "Select a reason"),
  message: z.string().min(1, "Message is required")
});

const Contact = () => {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setStatus("");
        reset();
      } else {
        toast.error("Error sending message");
        setStatus("Error");
      }
    } catch {
      toast.error("Something went wrong");
      setStatus("Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 transition-all ">
      <Toaster position="top-center" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl bg-white/80 backdrop-blur-xl border border-purple-100 shadow-lg rounded-3xl p-10 space-y-8 transition-all"
      >
        <h2 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-semibold text-purple-600">
              <FaUser className="inline mr-1" /> Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              {...register("name")}
              className="w-full p-3 rounded-lg bg-purple-50 text-gray-800 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
            />
            {errors.name && (
              <p className="text-pink-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-semibold text-purple-600">
              <FaEnvelope className="inline mr-1" /> Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="w-full p-3 rounded-lg bg-purple-50 text-gray-800 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
            />
            {errors.email && (
              <p className="text-pink-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-semibold text-purple-600">
              <FaPhone className="inline mr-1" /> Phone
            </label>
            <input
              type="tel"
              placeholder="Your phone"
              {...register("phone")}
              className="w-full p-3 rounded-lg bg-purple-50 text-gray-800 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
            />
            {errors.phone && (
              <p className="text-pink-400 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-semibold text-purple-600">
              <MdOutlineSubject className="inline mr-1" /> Reason
            </label>
            <select
              {...register("reason")}
              className="w-full p-3 rounded-lg bg-purple-50 text-gray-800 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
            >
              <option value="">Select reason</option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Collaboration">Collaboration</option>
              <option value="General Question">General Question</option>
              <option value="Other">Other</option>
            </select>
            {errors.reason && (
              <p className="text-pink-400 text-sm mt-1">{errors.reason.message}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold text-purple-600">
              <FaRegCommentDots className="inline mr-1" /> Message
            </label>
            <textarea
              rows="4"
              placeholder="Your message"
              {...register("message")}
              className="w-full p-3 rounded-lg bg-purple-50 text-gray-800 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
            ></textarea>
            {errors.message && (
              <p className="text-pink-400 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>
        </div>
        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-10 py-2 rounded-lg bg-gradient-to-r from-pink-200 to-purple-200 text-gray-800 font-bold shadow-lg transform hover:scale-105 transition duration-300
              ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {status || "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
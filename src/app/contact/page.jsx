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
    <div className="min-h-screen flex items-center justify-center py-12 ">
      <Toaster position="top-center" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full min-w-4xl m-5 bg-[#1e1e3f]/80 backdrop-blur-xl border border-purple-500/30 shadow-2xl rounded-3xl p-10 space-y-8"
      >
        <h2 className="text-4xl font-extrabold text-center bg-clip-text text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-semibold text-purple-300">
              <FaUser className="inline mr-1" /> Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              {...register("name")}
              className="w-full p-3 rounded-lg bg-[#2c2c54]/70 text-white border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {errors.name && (
              <p className="text-pink-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-semibold text-purple-300">
              <FaEnvelope className="inline mr-1" /> Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="w-full p-3 rounded-lg bg-[#2c2c54]/70 text-white border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {errors.email && (
              <p className="text-pink-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-semibold text-purple-300">
              <FaPhone className="inline mr-1" /> Phone
            </label>
            <input
              type="tel"
              placeholder="Your phone"
              {...register("phone")}
              className="w-full p-3 rounded-lg bg-[#2c2c54]/70 text-white border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {errors.phone && (
              <p className="text-pink-400 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-semibold text-purple-300">
              <MdOutlineSubject className="inline mr-1" /> Reason
            </label>
            <select
              {...register("reason")}
              className="w-full p-3 rounded-lg bg-[#2c2c54]/70 text-white border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
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
            <label className="block mb-1 font-semibold text-purple-300">
              <FaRegCommentDots className="inline mr-1" /> Message
            </label>
            <textarea
              rows="4"
              placeholder="Your message"
              {...register("message")}
              className="w-full p-3 rounded-lg bg-[#2c2c54]/70 text-white border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
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
            className={`px-10 py-2  rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-xl transform hover:scale-105 transition duration-300
              ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {status || "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact
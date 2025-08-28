"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  reason: z.string().min(1, "Select a reason"),
  message: z.string().min(1, "Message is required"),
});

const Contact = () => {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
    <section className="relative min-h-screen flex items-center justify-center py-16 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_70%)]" />

      <Toaster position="top-center" />

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit(onSubmit)}
        className="relative w-full max-w-3xl bg-gray-900/60 backdrop-blur-xl border border-purple-500/20 hover:border-purple-400/40 transition rounded-3xl shadow-lg p-10 space-y-8 z-10"
      >
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-semibold text-purple-300">
              <FaUser className="inline mr-1" /> Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              {...register("name")}
              className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600/30 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            {errors.name && (
              <p className="text-pink-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold text-purple-300">
              <FaEnvelope className="inline mr-1" /> Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600/30 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            {errors.email && (
              <p className="text-pink-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-semibold text-purple-300">
              <FaPhone className="inline mr-1" /> Phone
            </label>
            <input
              type="tel"
              placeholder="Your phone"
              {...register("phone")}
              className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600/30 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            {errors.phone && (
              <p className="text-pink-400 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Reason */}
          <div>
            <label className="block mb-1 font-semibold text-purple-300">
              <MdOutlineSubject className="inline mr-1" /> Reason
            </label>
            <select
              {...register("reason")}
              className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600/30 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
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

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold text-purple-300">
              <FaRegCommentDots className="inline mr-1" /> Message
            </label>
            <textarea
              rows="4"
              placeholder="Your message"
              {...register("message")}
              className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-600/30 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            ></textarea>
            {errors.message && (
              <p className="text-pink-400 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>
        </div>

        {/* Button */}
        <div className="text-center pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className={`px-10 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-lg relative overflow-hidden transition-all
              ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <span className="relative z-10">{status || "Send Message"}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 hover:opacity-100 transition" />
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;

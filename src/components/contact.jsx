"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent successfully 🚀");
    reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-300 via-blue-100 to-purple-200 p-6">
      <Toaster position="top-center" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="backdrop-blur-xl bg-white/70 border border-indigo-200 rounded-2xl shadow-2xl p-10 w-full max-w-3xl"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-semibold text-indigo-700">
              <FaUser className="inline mr-1" /> Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              {...register("name")}
              className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold text-indigo-700">
              <FaEnvelope className="inline mr-1" /> Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-semibold text-indigo-700">
              <FaPhone className="inline mr-1" /> Phone
            </label>
            <input
              type="tel"
              placeholder="Your phone number"
              {...register("phone")}
              className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Reason */}
          <div>
            <label className="block mb-1 font-semibold text-indigo-700">
              <MdOutlineSubject className="inline mr-1" /> Reason
            </label>
            <select
              {...register("reason")}
              className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="">Select reason</option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Other">Other</option>
            </select>
            {errors.reason && (
              <p className="text-red-600 text-sm mt-1">{errors.reason.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold text-indigo-700">
              <FaRegCommentDots className="inline mr-1" /> Message
            </label>
            <textarea
              rows="4"
              placeholder="Your message"
              {...register("message")}
              className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 rounded-xl shadow bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:scale-105 transition-transform duration-300
              ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isSubmitting ? "Sending..." : "Send Message 🚀"}
          </button>
        </div>
      </form>
    </div>
  );
};

"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function PredictPage() {
  const { register, handleSubmit, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log("Submitted data:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="w-full py-20 px-6 sm:px-10 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Get a Fair Credit Score — Based on Your Real Story
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Upload your UPI transactions, bills, and a short voice message. We'll use AI to assess your creditworthiness fairly, not just through traditional bank records.
          </p>
          <a href="#form-section">
            <button className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition">
              Start Your Application
            </button>
          </a>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-8">
        <h2 className="text-3xl font-bold text-center">Why We Ask for These Documents</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">UPI Summary</h3>
            <p className="text-sm text-gray-600">Shows consistent income through digital payments.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Bill Receipts</h3>
            <p className="text-sm text-gray-600">Indicates responsibility through timely payments.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Voice Message</h3>
            <p className="text-sm text-gray-600">Gives context to your effort, reliability, and intent.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-purple-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">How Your Data Helps You</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            We use advanced AI models to combine your financial behavior with your personal narrative. This gives you access to loans, services, and credit even if you don’t have formal documents.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="form-section" className="py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-4xl mx-auto bg-white shadow-xl p-10 sm:p-14 rounded-2xl border border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-10">Upload Your Details</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

            {/* UPI PDF */}
            <div>
              <label className="block text-sm font-medium mb-2">UPI Transaction PDF</label>
              <input
                type="file"
                {...register("upiSummaryPdf")}
                accept="application/pdf"
                className="w-full text-sm text-gray-600 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-100 file:text-blue-800 hover:file:bg-blue-200 transition"
                required
              />
            </div>

            {/* Images */}
            <div>
              <label className="block text-sm font-medium mb-2">Upload Bill Screenshots</label>
              <input
                type="file"
                {...register("documents")}
                multiple
                accept="image/*"
                className="w-full text-sm text-gray-600 file:py-2 file:px-4 file:rounded file:border-0 file:bg-indigo-100 file:text-indigo-800 hover:file:bg-indigo-200 transition"
                required
              />
            </div>

            {/* Audio */}
            <div>
              <label className="block text-sm font-medium mb-2">Upload Voice Message (MP3/WAV)</label>
              <input
                type="file"
                {...register("audio")}
                accept="audio/*"
                className="w-full text-sm text-gray-600 file:py-2 file:px-4 file:rounded file:border-0 file:bg-purple-100 file:text-purple-800 hover:file:bg-purple-200 transition"
                required
              />
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-block bg-blue-600 text-white text-lg font-semibold px-10 py-3 rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition duration-300 shadow-lg"
              >
                Submit Application
              </button>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="mt-6 text-center text-green-700 bg-green-100 border border-green-300 px-4 py-3 rounded-lg font-medium">
                Submission successful! We’ll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

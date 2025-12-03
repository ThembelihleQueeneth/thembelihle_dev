import React, { useState } from "react";
import { Button } from "../components/Button";

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh (required for controlled form)
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (field: keyof FormFields, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      className="py-16 px-6 md:px-20 bg-linear-to-br from-white via-yellow-50 to-yellow-100 relative overflow-hidden"
      id="contact"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 relative">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-linear-to-br from-yellow-300 to-yellow-500 rounded-full animate-bounce-slow shadow-lg"></div>

            {/* Eyes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex gap-3 mb-2">
                <div className="w-2 h-3 bg-black rounded-full animate-blink"></div>
                <div className="w-2 h-3 bg-black rounded-full animate-blink animation-delay-200"></div>
              </div>
            </div>

            {/* Smile */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-4 border-b-2 border-black rounded-b-full"></div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-black to-yellow-600 bg-clip-text text-transparent">
          Let's Work Together
        </h1>

        <p className="text-black/70 mb-10 text-lg">
          I'm available for freelance work and full-time opportunities.
          Feel free to reach out — I'd love to collaborate! 🚀
        </p>
      </div>

   
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mldqnvdl"
        method="POST"
      >
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl space-y-6 relative z-10 border border-black/10">

          {/* Name */}
          <div className="group">
            <label className="block font-semibold mb-2 text-black group-focus-within:text-yellow-600 transition-colors">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter your name"
              className="w-full p-4 border-2 border-black/20 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all duration-300 hover:border-black"
            />
          </div>

          {/* Email */}
          <div className="group">
            <label className="block font-semibold mb-2 text-black group-focus-within:text-yellow-600 transition-colors">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Enter your email"
              className="w-full p-4 border-2 border-black/20 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all duration-300 hover:border-black"
            />
          </div>

          {/* Subject */}
          <div className="group">
            <label className="block font-semibold mb-2 text-black group-focus-within:text-yellow-600 transition-colors">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              placeholder="Enter subject"
              className="w-full p-4 border-2 border-black/20 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all duration-300 hover:border-black"
            />
          </div>

          {/* Message */}
          <div className="group">
            <label className="block font-semibold mb-2 text-black group-focus-within:text-yellow-600 transition-colors">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Write your message..."
              className="w-full p-4 border-2 border-black/20 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none resize-none transition-all duration-300 hover:border-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button
              text={isSubmitted ? "✓ Sent!" : "Send Message"}
              onClick={() => {}}
              
            />
          </div>
        </div>
      </form>

      {/* Success message (now correctly outside the form wrapper) */}
      {isSubmitted && (
        <div className="mt-4 p-4 bg-yellow-200 border border-yellow-500 text-black rounded-lg text-center animate-fade-in">
          Thanks for reaching out! I'll get back to you soon. 😊
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-blob { animation: blob 7s infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-blink { animation: blink 4s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }

        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}

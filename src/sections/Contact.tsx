import { Button } from "../components/Button";

export const Contact = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Work Together
        </h1>

        <p className="text-gray-600 mb-10">
          I'm available for freelance work and full-time opportunities.
          Feel free to reach out, I’d love to collaborate!
        </p>
      </div>

      <form className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
        
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block font-medium mb-1">Subject</label>
          <input
            type="text"
            placeholder="Enter subject"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
           
            placeholder="Write your message..."
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button text="Submit" />
        </div>

      </form>
    </section>
  );
};

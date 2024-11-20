"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setShowNotification(true);
      setEmail(""); // Clear the input field

      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col items-center justify-center p-8 text-green-800">
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Thank you for subscribing! We will keep you updated.</span>
          </div>
        </div>
      )}

      <main className="flex flex-col items-center gap-8 max-w-2xl text-center">
        <div className="text-green-600 text-7xl mb-4 ">🌿</div>

        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Pure Organix Store
        </h1>

        <p className="text-xl md:text-2xl text-green-700 mb-8">
          Your destination for organic products is coming soon!
        </p>

        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <p className="text-green-600 mb-4">
            We&apos;re working hard to bring you the finest organic products.
            Stay tuned for our launch!
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex gap-4 flex-col sm:flex-row justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email for updates"
              className="px-4 py-2 rounded-full border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
            >
              Notify Me
            </button>
          </form>
        </div>

        <div className="mt-12 flex gap-6">
          <a
            href="https://instagram.com/pureorganixstore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/pureorganixstore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/pureorganixstore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800"
          >
            Twitter
          </a>
        </div>
      </main>

      <footer className="mt-16 text-sm text-green-600">
        © {new Date().getFullYear()} Pure Organix Store. All rights reserved.
      </footer>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface LoginDropdownProps {
  mode: "dropdown" | "modal";
  onClose: () => void;
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

function LoginForm({ onClose }: { onClose: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="login-username"
          className="block text-sm font-medium text-navy-300 mb-1.5"
        >
          Username
        </label>
        <input
          ref={usernameRef}
          type="text"
          id="login-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full px-3 py-2.5 bg-navy-800 border border-navy-700 rounded-md text-white text-sm placeholder:text-navy-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          placeholder="Enter username"
        />
      </div>
      <div>
        <label
          htmlFor="login-password"
          className="block text-sm font-medium text-navy-300 mb-1.5"
        >
          Password
        </label>
        <input
          type="password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2.5 bg-navy-800 border border-navy-700 rounded-md text-white text-sm placeholder:text-navy-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          placeholder="Enter password"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gold-500 text-navy-950 font-semibold px-4 py-2.5 rounded-md hover:bg-gold-400 transition-colors text-sm"
      >
        Sign In
      </button>
    </form>
  );
}

export default function LoginDropdown({ mode, onClose, containerRef }: LoginDropdownProps) {
  useEffect(() => {
    if (mode !== "dropdown") return;

    function handleClickOutside(e: MouseEvent) {
      const ref = containerRef?.current;
      if (ref && !ref.contains(e.target as Node)) {
        onClose();
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mode, onClose]);

  useEffect(() => {
    if (mode !== "modal") return;

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mode, onClose]);

  if (mode === "dropdown") {
    return (
      <motion.div
        initial={{ opacity: 0, y: -8, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.95 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="absolute right-0 top-full mt-2 w-72 bg-navy-900 border border-navy-800 rounded-lg shadow-xl p-5"
      >
        <h3 className="text-white font-semibold text-sm mb-4">Investor Login</h3>
        <LoginForm onClose={onClose} />
      </motion.div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute inset-x-4 top-1/2 -translate-y-1/2 max-w-sm mx-auto bg-navy-900 border border-navy-800 rounded-xl p-6 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-navy-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        <h3 className="text-white font-semibold mb-4">Investor Login</h3>
        <LoginForm onClose={onClose} />
      </motion.div>
    </div>
  );
}

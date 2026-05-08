import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const SERVICE_ID = "service_33wb82p";
const TEMPLATE_ID = "dvly00s";
const PUBLIC_KEY = "QaDSvUI89k8FjDCUJ";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("loading");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message },
        PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-cream-100 dark:bg-dark-950">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-ink-300 dark:text-dark-500 mb-4">
              — Contact
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-ink-900 dark:text-cream-100 leading-[1.15] mb-6">
              Let's work<br />
              together
            </h2>
            <p className="text-ink-500 dark:text-dark-400 leading-relaxed mb-10 max-w-md">
              Feel free to reach out if you want to collaborate, have a
              question, or just want to connect. I'm always open to new
              opportunities.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-cream-300 dark:border-dark-700 flex items-center justify-center text-ink-400 dark:text-dark-500">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs text-ink-300 dark:text-dark-600 mb-0.5">Email</p>
                  <a
                    href="mailto:yuvrajsingh18811@gmail.com"
                    className="text-sm font-medium text-ink-700 dark:text-cream-200 hover:text-ink-900 dark:hover:text-cream-100 transition-colors"
                  >
                    yuvrajsingh18811@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-cream-300 dark:border-dark-700 flex items-center justify-center text-ink-400 dark:text-dark-500">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs text-ink-300 dark:text-dark-600 mb-0.5">Location</p>
                  <p className="text-sm font-medium text-ink-700 dark:text-cream-200">
                    Mohali, Punjab, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { href: "https://github.com/YuvrajSingh1811", Icon: Github },
                { href: "https://www.linkedin.com/in/yuvraj-singh-62a6b1286/", Icon: Linkedin },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream-300 dark:border-dark-700 flex items-center justify-center text-ink-400 dark:text-dark-500 hover:border-ink-900 dark:hover:border-cream-300 hover:text-ink-900 dark:hover:text-cream-100 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-dark-800 border border-cream-300 dark:border-dark-700 rounded-2xl p-8 space-y-5"
          >
            {[
              { label: "Name", name: "name", type: "text", placeholder: "Your name" },
              { label: "Email", name: "email", type: "email", placeholder: "your@email.com" },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name}>
                <label className="block text-xs font-medium text-ink-400 dark:text-dark-500 mb-2 tracking-wide uppercase">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  value={form[name as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 dark:bg-dark-900 border border-cream-300 dark:border-dark-700 text-ink-900 dark:text-cream-100 placeholder-ink-300 dark:placeholder-dark-600 focus:outline-none focus:border-ink-900 dark:focus:border-cream-300 transition-colors text-sm"
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-medium text-ink-400 dark:text-dark-500 mb-2 tracking-wide uppercase">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="w-full px-4 py-3 rounded-xl bg-cream-50 dark:bg-dark-900 border border-cream-300 dark:border-dark-700 text-ink-900 dark:text-cream-100 placeholder-ink-300 dark:placeholder-dark-600 focus:outline-none focus:border-ink-900 dark:focus:border-cream-300 transition-colors resize-none text-sm"
              />
            </div>

            {status === "success" && (
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm">
                <CheckCircle size={16} />
                Message sent! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle size={16} />
                Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ink-900 dark:bg-cream-100 text-white dark:text-ink-900 text-sm font-medium hover:opacity-80 transition-opacity cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader size={14} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={14} />
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

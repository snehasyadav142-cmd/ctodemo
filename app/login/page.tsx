"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if (!email || !password) {
      setError("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsSubmitting(false);
      return;
    }

    const success = await login(email, password);
    
    if (success) {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black font-sans px-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
          <div className="flex flex-col items-center mb-8">
            <svg
              viewBox="0 0 69 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-black dark:fill-white h-8 mb-6"
            >
              <path d="M13.7917 24.3604C12.4622 25.3549 10.7895 25.8884 8.82032 25.8884C6.66971 25.8884 4.87412 25.3543 3.47587 24.3604H13.7917Z"></path>
              <path d="M27.8204 24.3604C26.802 25.2894 25.534 25.8884 24.1756 25.8884C22.4188 25.8884 21.02 25.339 20.108 24.3604H27.8204Z"></path>
              <path d="M44.5726 24.3604C43.0194 25.3511 41.0762 25.8884 38.8367 25.8884C36.5972 25.8884 34.6541 25.3511 33.1008 24.3604H44.5726Z"></path>
              <path d="M6.10452 21.7838C6.64469 22.5408 7.32257 23.0964 8.12748 23.4234H2.40008C1.94592 22.9414 1.55318 22.3936 1.22435 21.7838H6.10452Z"></path>
              <path d="M15.9753 21.7838C15.6457 22.3936 15.2602 22.9415 14.8213 23.4234H11.8608C12.7015 23.0973 13.4264 22.543 14.0227 21.7838H15.9753Z"></path>
              <path d="M23.2016 21.7838C23.3205 22.5267 23.6272 23.0906 24.0875 23.4234H19.4507C19.2008 22.9377 19.0348 22.3887 18.9611 21.7838H23.2016Z"></path>
              <path d="M29.6415 21.7838C29.3929 22.3649 29.0672 22.9198 28.6798 23.4234H26.2913C26.809 23.0921 27.2884 22.5303 27.6965 21.7838H29.6415Z"></path>
              <path d="M34.7756 21.7838C35.1876 22.498 35.7076 23.0447 36.3327 23.4234H31.8901C31.3725 22.9406 30.9182 22.3925 30.5327 21.7838H34.7756Z"></path>
              <path d="M47.1403 21.7838C46.7548 22.3925 46.3005 22.9406 45.7829 23.4234H41.3477C41.9765 23.0447 42.5011 22.4979 42.9178 21.7838H47.1403Z"></path>
              <path d="M4.97293 19.2072C5.1237 19.8073 5.31836 20.3552 5.55486 20.8468H0.788749C0.585257 20.3346 0.420002 19.7875 0.293988 19.2072H4.97293Z"></path>
              <path d="M16.9458 19.2072C16.8042 19.7876 16.6278 20.3347 16.4179 20.8468H14.6376C14.9063 20.3562 15.1356 19.8083 15.3244 19.2072H16.9458Z"></path>
              <path d="M23.146 20.8468H18.9172V19.2072H23.146V20.8468Z"></path>
              <path d="M33.879 19.2072C33.9937 19.8097 34.1454 20.3562 34.3337 20.8468H30.0171C30.0067 20.8251 29.9961 20.8035 29.9859 20.7817C29.9802 20.8034 29.9741 20.8251 29.9682 20.8468H28.1326C28.3289 20.3505 28.4984 19.8012 28.6354 19.2072H33.879Z"></path>
              <path d="M48.2582 19.2072C48.1017 19.7867 47.8998 20.3339 47.6561 20.8468H43.3651C43.5558 20.3562 43.71 19.8097 43.8264 19.2072H48.2582Z"></path>
              <path d="M4.61127 16.6306C4.63883 17.207 4.69545 17.7543 4.78 18.2703H0.128844C0.056725 17.7466 0.0134713 17.1997 0 16.6306H4.61127Z"></path>
              <path d="M17.2781 17.2464C17.2423 17.5969 17.1958 17.9383 17.1392 18.2703H15.5758C15.6704 17.8506 15.7479 17.4096 15.8073 16.9484L17.2781 17.2464Z"></path>
              <path d="M23.146 18.2703H18.9172V16.6306H23.146V18.2703Z"></path>
              <path d="M33.6225 16.6306C33.6374 17.2111 33.6755 17.7576 33.7361 18.2703H28.8183C28.902 17.7493 28.9618 17.2012 28.9946 16.6306H33.6225Z"></path>
              <path d="M48.643 16.6306C48.6191 17.199 48.5595 17.7459 48.4664 18.2703H43.9719C44.0335 17.7576 44.072 17.211 44.0873 16.6306H48.643Z"></path>
              <path d="M23.146 6.89115H28.9193V8.56739H23.146V15.6937H18.9172V8.56739H15.8592L16.4324 14.49L14.9983 14.6762C14.0055 9.75933 13.1963 8.00865 9.8132 7.85966C6.45181 7.85968 4.61542 10.5441 4.592 15.6937H0.00268892C0.175472 9.48821 3.32011 6.14613 8.93079 6.14613C9.77653 6.14614 10.7326 6.25781 11.8725 6.51853C13.152 6.78855 14.2702 6.89115 15.697 6.89115C19.7286 6.89112 21.3074 4.20914 22.0796 0H23.146V6.89115Z"></path>
              <path d="M38.8367 6.14613C44.6383 6.14616 48.4971 9.86614 48.6497 15.6937H44.092C44.0101 10.6034 42.1785 7.97132 38.8367 7.97128C35.5308 7.97128 33.6998 10.6034 33.618 15.6937H29.0235C29.1761 9.86611 33.0351 6.14613 38.8367 6.14613Z"></path>
            </svg>
            <h1 className="text-2xl font-semibold text-black dark:text-white">
              Welcome Back
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              Sign in to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                placeholder="you@example.com"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                placeholder="••••••••"
                disabled={isSubmitting}
              />
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black dark:bg-white text-white dark:text-black py-2 px-4 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
            Demo: Use any email and password (min 6 characters)
          </p>
        </div>
      </div>
    </div>
  );
}

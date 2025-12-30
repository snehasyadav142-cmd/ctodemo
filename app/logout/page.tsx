"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function LogoutPage() {
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    logout();
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  }, [logout, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black font-sans">
      <div className="text-center">
        <div className="mb-4">
          <svg
            viewBox="0 0 69 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-black dark:fill-white h-8 mx-auto"
          >
            <path d="M13.7917 24.3604C12.4622 25.3549 10.7895 25.8884 8.82032 25.8884C6.66971 25.8884 4.87412 25.3543 3.47587 24.3604H13.7917Z"></path>
            <path d="M27.8204 24.3604C26.802 25.2894 25.534 25.8884 24.1756 25.8884C22.4188 25.8884 21.02 25.339 20.108 24.3604H27.8204Z"></path>
            <path d="M44.5726 24.3604C43.0194 25.3511 41.0762 25.8884 38.8367 25.8884C36.5972 25.8884 34.6541 25.3511 33.1008 24.3604H44.5726Z"></path>
            <path d="M38.8367 6.14613C44.6383 6.14616 48.4971 9.86614 48.6497 15.6937H44.092C44.0101 10.6034 42.1785 7.97132 38.8367 7.97128C35.5308 7.97128 33.6998 10.6034 33.618 15.6937H29.0235C29.1761 9.86611 33.0351 6.14613 38.8367 6.14613Z"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-black dark:text-white mb-2">
          Logging out...
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          You will be redirected to the login page
        </p>
      </div>
    </div>
  );
}

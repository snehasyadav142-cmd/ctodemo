"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function DashboardPage() {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router, mounted]);

  if (!mounted || isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="text-black dark:text-white">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const stats = [
    { label: "Total Projects", value: "12", change: "+2 this month" },
    { label: "Active Tasks", value: "28", change: "+5 this week" },
    { label: "Completed", value: "156", change: "+12 this week" },
    { label: "Team Members", value: "8", change: "No change" },
  ];

  const recentActivity = [
    { action: "Completed task", item: "Update homepage design", time: "2 hours ago" },
    { action: "Created project", item: "Mobile App Redesign", time: "5 hours ago" },
    { action: "Commented on", item: "Authentication flow", time: "1 day ago" },
    { action: "Updated task", item: "Database optimization", time: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <svg
                viewBox="0 0 69 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-black dark:fill-white h-6"
              >
                <path d="M13.7917 24.3604C12.4622 25.3549 10.7895 25.8884 8.82032 25.8884C6.66971 25.8884 4.87412 25.3543 3.47587 24.3604H13.7917Z"></path>
                <path d="M27.8204 24.3604C26.802 25.2894 25.534 25.8884 24.1756 25.8884C22.4188 25.8884 21.02 25.339 20.108 24.3604H27.8204Z"></path>
                <path d="M44.5726 24.3604C43.0194 25.3511 41.0762 25.8884 38.8367 25.8884C36.5972 25.8884 34.6541 25.3511 33.1008 24.3604H44.5726Z"></path>
                <path d="M6.10452 21.7838C6.64469 22.5408 7.32257 23.0964 8.12748 23.4234H2.40008C1.94592 22.9414 1.55318 22.3936 1.22435 21.7838H6.10452Z"></path>
                <path d="M38.8367 6.14613C44.6383 6.14616 48.4971 9.86614 48.6497 15.6937H44.092C44.0101 10.6034 42.1785 7.97132 38.8367 7.97128C35.5308 7.97128 33.6998 10.6034 33.618 15.6937H29.0235C29.1761 9.86611 33.0351 6.14613 38.8367 6.14613Z"></path>
              </svg>
              <span className="ml-3 text-lg font-semibold text-black dark:text-white">
                Dashboard
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Welcome, <span className="font-medium text-black dark:text-white">{user.name}</span>
              </div>
              <button
                onClick={logout}
                className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Here's what's happening with your projects today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800"
            >
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                {stat.label}
              </div>
              <div className="text-3xl font-bold text-black dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-500">
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black dark:bg-white mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-black dark:text-white">
                      <span className="font-medium">{activity.action}</span>{" "}
                      <span className="text-zinc-600 dark:text-zinc-400">
                        {activity.item}
                      </span>
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-black dark:text-white">
                <div className="font-medium">Create New Project</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  Start a new project from scratch
                </div>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-black dark:text-white">
                <div className="font-medium">Add Team Member</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  Invite someone to collaborate
                </div>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-black dark:text-white">
                <div className="font-medium">View Reports</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  Check your analytics and insights
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
            User Information
          </h2>
          <div className="space-y-2">
            <div className="flex">
              <span className="text-sm text-zinc-600 dark:text-zinc-400 w-24">
                User ID:
              </span>
              <span className="text-sm text-black dark:text-white font-mono">
                {user.id}
              </span>
            </div>
            <div className="flex">
              <span className="text-sm text-zinc-600 dark:text-zinc-400 w-24">
                Email:
              </span>
              <span className="text-sm text-black dark:text-white">
                {user.email}
              </span>
            </div>
            <div className="flex">
              <span className="text-sm text-zinc-600 dark:text-zinc-400 w-24">
                Name:
              </span>
              <span className="text-sm text-black dark:text-white">
                {user.name}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

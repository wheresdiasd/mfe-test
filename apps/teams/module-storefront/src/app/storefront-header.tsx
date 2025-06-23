// apps/teams/module-storefront/src/app/storefront-header.tsx
import { useEffect, useState } from "react";

export default function StorefrontHeader() {
  const [activityCount, setActivityCount] = useState(0);

  useEffect(() => {
    const handleActivityUpdate = (event: CustomEvent) => {
      setActivityCount(event.detail.count);
    };

    window.addEventListener(
      "activities:count-updated",
      handleActivityUpdate as EventListener,
    );

    window.dispatchEvent(new CustomEvent("activities:request-count"));

    return () => {
      window.removeEventListener(
        "activities:count-updated",
        handleActivityUpdate as EventListener,
      );
    };
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">Zephy MFE Test</h1>
          </div>
          <nav className="flex space-x-8">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Home
            </a>
            <div className="relative flex items-center">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Activities
              </a>
              {activityCount > 0 && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 ml-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                  {activityCount}
                </span>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

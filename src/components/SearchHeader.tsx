"use client";

export default function SearchHeader({
  query,
  quickFilters,
}: {
  query: string;
  quickFilters: string[];
}) {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
          FIND YOUR NEXT CAR
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          1,784,503 Vehicles Available
        </p>

        {/* Search bar */}
        <div className="mt-5 flex items-center gap-3">
          <div className="relative flex-1">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </div>
            <input
              type="text"
              defaultValue={query}
              className="w-full rounded-full border border-gray-200 bg-white py-3 pl-12 pr-12 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
              placeholder="Search vehicles..."
            />
            <button className="absolute right-14 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
            </button>
          </div>
          <button className="rounded-full bg-red-500 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-600 transition-colors">
            Search
          </button>
        </div>

        {/* Quick filters */}
        <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
          {quickFilters.map((filter) => (
            <button
              key={filter}
              className="rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

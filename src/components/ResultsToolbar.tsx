"use client";

import { FilterTag } from "@/types/vehicle";
import FilterChip from "./FilterChip";

export default function ResultsToolbar({
  totalResults,
  sortBy,
  filters,
  featureFilters,
  onRemoveFilter,
  onReset,
}: {
  totalResults: number;
  sortBy: string;
  filters: FilterTag[];
  featureFilters: FilterTag[];
  onRemoveFilter: (id: string) => void;
  onReset: () => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {/* Top row: result count + sort + primary filters */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="white"
              stroke="white"
              strokeWidth="1"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </span>
          <div>
            <p className="text-base font-bold text-gray-900">
              {totalResults.toLocaleString()} vehicles found
            </p>
            <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
              Sort by: {sortBy}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Primary filter chips */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <FilterChip key={f.id} filter={f} onRemove={onRemoveFilter} />
          ))}
        </div>
      </div>

      {/* Second row: feature filters + reset */}
      <div className="flex flex-wrap items-center justify-end gap-2">
        {featureFilters.map((f) => (
          <FilterChip key={f.id} filter={f} onRemove={onRemoveFilter} />
        ))}
        <button
          onClick={onReset}
          className="rounded-full bg-gray-900 px-4 py-1.5 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

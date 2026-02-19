"use client";

import { FilterTag } from "@/types/vehicle";

export default function FilterChip({
  filter,
  onRemove,
}: {
  filter: FilterTag;
  onRemove?: (id: string) => void;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700">
      {filter.label}
      {filter.removable && onRemove && (
        <button
          onClick={() => onRemove(filter.id)}
          className="ml-0.5 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label={`Remove ${filter.label} filter`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </span>
  );
}

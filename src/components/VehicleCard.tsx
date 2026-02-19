"use client";

import { Vehicle } from "@/types/vehicle";

function BadgeTag({ badge }: { badge: Vehicle["badge"] }) {
  if (!badge) return null;

  if (badge === "excellent-price") {
    return (
      <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        Excellent Price
      </span>
    );
  }

  if (badge === "price-drop") {
    return (
      <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
        Price Drop
      </span>
    );
  }

  return null;
}

function ColorSwatch({ hex }: { hex: string }) {
  return (
    <span
      className="inline-block h-5 w-5 rounded-full border border-gray-200"
      style={{ backgroundColor: hex }}
    />
  );
}

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(vehicle.price);

  const formattedPreviousPrice = vehicle.previousPrice
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(vehicle.previousPrice)
    : null;

  const formattedMileage = new Intl.NumberFormat("en-US").format(
    vehicle.mileage
  );

  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden">
      {/* Image Area */}
      <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden">
        <BadgeTag badge={vehicle.badge} />

        {/* Share & Favorite */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <button className="rounded-full p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
            </svg>
          </button>
          <button className="rounded-full p-1.5 text-gray-400 hover:text-red-500 transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>

        {/* Vehicle illustration placeholder */}
        <div className="w-full h-full flex items-center justify-center">
          <svg
            viewBox="0 0 400 200"
            className="w-4/5 h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SUV body */}
            <rect
              x="60"
              y="80"
              width="280"
              height="70"
              rx="12"
              fill={vehicle.exteriorColorHex}
            />
            {/* SUV roof */}
            <path
              d="M120 80 L150 40 L300 40 L320 80"
              fill={vehicle.exteriorColorHex}
              stroke={vehicle.exteriorColorHex}
              strokeWidth="2"
            />
            {/* Windows */}
            <path
              d="M155 45 L165 75 L230 75 L230 45Z"
              fill="#c8e6ff"
              opacity="0.7"
            />
            <rect
              x="240"
              y="45"
              width="65"
              height="30"
              rx="2"
              fill="#c8e6ff"
              opacity="0.7"
            />
            {/* Wheels */}
            <circle cx="130" cy="155" r="28" fill="#333" />
            <circle cx="130" cy="155" r="16" fill="#888" />
            <circle cx="130" cy="155" r="6" fill="#333" />
            <circle cx="300" cy="155" r="28" fill="#333" />
            <circle cx="300" cy="155" r="16" fill="#888" />
            <circle cx="300" cy="155" r="6" fill="#333" />
            {/* Headlights */}
            <rect
              x="335"
              y="95"
              width="12"
              height="18"
              rx="4"
              fill="#ffd700"
              opacity="0.8"
            />
            <rect
              x="53"
              y="95"
              width="12"
              height="18"
              rx="4"
              fill="#ff4444"
              opacity="0.8"
            />
            {/* Front grille */}
            <rect x="340" y="118" width="8" height="25" rx="2" fill="#555" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5">
        {/* Title & Price */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-gray-900 leading-tight">
            {vehicle.year} {vehicle.make} {vehicle.model}
            {vehicle.trim && (
              <>
                <br />
                {vehicle.trim}
              </>
            )}
          </h3>
          <div className="text-right shrink-0">
            {formattedPreviousPrice && (
              <span className="text-sm text-gray-400 line-through block">
                was {formattedPreviousPrice}
              </span>
            )}
            <span className="text-xl font-bold text-red-500">
              {formattedPrice}
            </span>
          </div>
        </div>

        {/* Mileage & Est. Monthly */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {formattedMileage}mi
          </span>
          <span className="text-blue-600">
            Est. ${vehicle.estimatedMonthly}/mo
          </span>
        </div>

        {/* Divider */}
        <hr className="border-gray-100" />

        {/* Exterior */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Exterior:</span>
          <span className="flex items-center gap-2 text-gray-700">
            {vehicle.exteriorColor}
            <ColorSwatch hex={vehicle.exteriorColorHex} />
          </span>
        </div>

        {/* Interior */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Interior:</span>
          <span className="flex items-center gap-2 text-gray-700">
            {vehicle.interiorColor}
            <ColorSwatch hex={vehicle.interiorColorHex} />
          </span>
        </div>

        {/* Divider */}
        <hr className="border-gray-100" />

        {/* Match & Refine */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            {vehicle.matchPercent}% Match
          </span>
          <button className="text-sm font-medium text-gray-700 underline hover:text-gray-900">
            Refine your search
          </button>
        </div>

        {/* Divider */}
        <hr className="border-gray-100" />

        {/* Dealer info */}
        <div className="flex items-center justify-between text-sm">
          <a
            href="#"
            className="font-medium text-blue-700 underline hover:text-blue-900"
          >
            {vehicle.dealerName}
          </a>
          <span className="flex items-center gap-1 text-gray-500">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {vehicle.dealerDistance}mi
          </span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          {vehicle.hasWarranty && (
            <span className="flex items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Warranty
            </span>
          )}
          {vehicle.isInspected && (
            <span className="flex items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Inspected
            </span>
          )}
          {vehicle.ownerCount > 0 && (
            <span className="flex items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              {vehicle.ownerCount} Owner
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

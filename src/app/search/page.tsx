"use client";

import { useState } from "react";
import SearchHeader from "@/components/SearchHeader";
import ResultsToolbar from "@/components/ResultsToolbar";
import VehicleCard from "@/components/VehicleCard";
import {
  mockVehicles,
  mockFilters,
  mockFeatureFilters,
  quickFilters,
} from "@/data/mock-vehicles";

export default function SearchPage() {
  const [filters, setFilters] = useState(mockFilters);
  const [featureFilters, setFeatureFilters] = useState(mockFeatureFilters);

  const handleRemoveFilter = (id: string) => {
    setFilters((prev) => prev.filter((f) => f.id !== id));
    setFeatureFilters((prev) => prev.filter((f) => f.id !== id));
  };

  const handleReset = () => {
    setFilters([]);
    setFeatureFilters([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchHeader
        query="SUV under 35k with low miles"
        quickFilters={quickFilters}
      />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Results toolbar with filters */}
        <ResultsToolbar
          totalResults={247}
          sortBy="Recommended"
          filters={filters}
          featureFilters={featureFilters}
          onRemoveFilter={handleRemoveFilter}
          onReset={handleReset}
        />

        {/* Vehicle grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </main>
    </div>
  );
}

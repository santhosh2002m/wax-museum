import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Users, Edit3, UserPlus, Search } from "lucide-react";

const GuideScore = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const guides = [
    {
      id: 1,
      name: "Rahman",
      number: "9019296034",
      vehicleType: "guide",
      score: 646,
    },
    {
      id: 704,
      name: "Loki",
      number: "9380320892",
      vehicleType: "big car",
      score: 548,
    },
    {
      id: 192,
      name: "Sathish",
      number: "9141352476",
      vehicleType: "tt",
      score: 502,
    },
    {
      id: 459,
      name: "Babu",
      number: "9901225482",
      vehicleType: "tt",
      score: 436,
    },
    {
      id: 1632,
      name: "Rohith",
      number: "7676911516",
      vehicleType: "big car",
      score: 410,
    },
    {
      id: 506,
      name: "Anif",
      number: "9740280814",
      vehicleType: "guide",
      score: 410,
    },
    {
      id: 239,
      name: "Sallem",
      number: "9986635586",
      vehicleType: "guide",
      score: 399,
    },
    {
      id: 326,
      name: "Maaz",
      number: "7019990255",
      vehicleType: "car",
      score: 394,
    },
    {
      id: 53,
      name: "Santhosh",
      number: "9880400535",
      vehicleType: "auto",
      score: 388,
    },
    {
      id: 1079,
      name: "Arjun",
      number: "8861844325",
      vehicleType: "big car",
      score: 388,
    },
    {
      id: 1333,
      name: "Anis",
      number: "9901269631",
      vehicleType: "guide",
      score: 376,
    },
    {
      id: 892,
      name: "Inayak",
      number: "9845814929",
      vehicleType: "guide",
      score: 370,
    },
  ];

  const filteredGuides = guides.filter((guide) =>
    guide.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 fixed h-full">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 ml-64 p-6 lg:p-10">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b bg-gray-50">
            <div className="flex items-center gap-3">
              <Users className="w-7 h-7 text-primary" />
              <h1 className="text-2xl font-bold text-gray-800">Guide Scores</h1>
            </div>

            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search for guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 w-64 rounded-xl border-gray-300 focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Add Guide */}
              <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-sm">
                <UserPlus className="w-4 h-4" /> Add Guide
              </Button>

              {/* Back */}
              <Button
                onClick={() => navigate("/ticket")}
                className="bg-gray-700 hover:bg-gray-800 text-white rounded-xl shadow-sm"
              >
                Back
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="p-6 flex-1 overflow-hidden">
            <div className="overflow-y-auto max-h-[70vh] rounded-lg border border-gray-200">
              <table className="w-full border-collapse text-sm">
                <thead className="sticky top-0 bg-primary text-white z-10">
                  <tr>
                    {[
                      "ID",
                      "Guide Name",
                      "Guide Number",
                      "Vehicle Type",
                      "Score",
                      "Action",
                    ].map((head) => (
                      <th
                        key={head}
                        className="py-3 px-4 text-left font-medium"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredGuides.length > 0 ? (
                    filteredGuides.map((guide) => (
                      <tr
                        key={guide.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-3 px-4 text-gray-600">{guide.id}</td>
                        <td className="py-3 px-4 font-medium text-gray-800">
                          {guide.name}
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          {guide.number}
                        </td>
                        <td className="py-3 px-4 capitalize text-gray-600">
                          {guide.vehicleType}
                        </td>
                        <td
                          className={`py-3 px-4 font-semibold ${
                            guide.score > 500
                              ? "text-green-600"
                              : guide.score > 400
                              ? "text-orange-500"
                              : "text-red-500"
                          }`}
                        >
                          {guide.score}
                        </td>
                        <td className="py-3 px-4">
                          <Button
                            size="sm"
                            className="flex items-center gap-1 bg-primary hover:bg-primary/80 text-white rounded-lg shadow-sm"
                          >
                            <Edit3 className="w-4 h-4" /> Edit
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={6}
                        className="py-16 text-center text-gray-500"
                      >
                        <div className="flex flex-col items-center justify-center space-y-3">
                          <Users className="w-12 h-12 text-gray-400" />
                          <p className="text-lg font-semibold">
                            No guides found
                          </p>
                          <span className="text-sm text-gray-400">
                            Try adjusting your search.
                          </span>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideScore;

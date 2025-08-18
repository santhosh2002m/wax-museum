import React from "react";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileText, History as HistoryIcon } from "lucide-react";

const History = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar fixed */}
      <div className="w-64 fixed h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6 lg:p-10 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-lg">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <div className="flex items-center gap-2">
              <HistoryIcon className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">History</h1>
            </div>
            <Button
              onClick={() => navigate("/ticket")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 h-11 rounded-lg shadow-md transition-all"
            >
              Back
            </Button>
          </div>

          {/* Table */}
          <div className="p-6 overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-600 text-white text-sm">
                  {[
                    "S.No",
                    "Invoice No",
                    "Guide Name",
                    "Guide Number",
                    "Vehicle Type",
                    "Date",
                    "Show Name",
                    "Adult",
                    "Total Paid",
                  ].map((head) => (
                    <th
                      key={head}
                      className="text-left py-3 px-4 font-medium sticky top-0 bg-blue-600"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-200">
                {/* Empty State */}
                <tr>
                  <td colSpan={9} className="text-center py-16 text-gray-500">
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <FileText className="w-12 h-12 text-gray-400" />
                      <p className="text-lg font-medium">
                        No history records found
                      </p>
                      <span className="text-sm text-gray-400">
                        Completed bookings will appear here.
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;

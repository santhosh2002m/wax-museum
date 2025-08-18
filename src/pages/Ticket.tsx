import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2, Printer } from "lucide-react";

type TicketRow = {
  showName: string;
  adult: string;
  ticketPrice: string;
  totalPrice: string;
};

const Ticket = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [guideName, setGuideName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [rows, setRows] = useState<TicketRow[]>([
    { showName: "", adult: "", ticketPrice: "", totalPrice: "" },
  ]);
  const [tax, setTax] = useState("0");

  // calculate final amount
  const subtotal = rows.reduce(
    (acc, row) => acc + (parseFloat(row.totalPrice) || 0),
    0
  );
  const finalAmount = subtotal + (subtotal * (parseFloat(tax) || 0)) / 100;

  const handleRowChange = (
    index: number,
    field: keyof TicketRow,
    value: string
  ) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;

    if (field === "adult" || field === "ticketPrice") {
      const adult = parseFloat(updatedRows[index].adult) || 0;
      const price = parseFloat(updatedRows[index].ticketPrice) || 0;
      updatedRows[index].totalPrice = String(adult * price);
    }

    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([
      ...rows,
      { showName: "", adult: "", ticketPrice: "", totalPrice: "" },
    ]);
  };

  const deleteRow = (index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar fixed */}
      <div className="w-64 fixed h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6 lg:p-10 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <h1 className="text-3xl font-bold text-gray-800">Wax Museum (1)</h1>
            <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
              WAX MUSEUM
            </span>
          </div>

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Vehicle Type
              </label>
              <Select value={vehicleType} onValueChange={setVehicleType}>
                <SelectTrigger className="h-11 rounded-lg">
                  <SelectValue placeholder="Select Vehicle Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="car">Car</SelectItem>
                  <SelectItem value="bus">Bus</SelectItem>
                  <SelectItem value="bike">Bike</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                ID/Guide Name
              </label>
              <Input
                placeholder="Vehicle No / Guide Name"
                value={guideName}
                onChange={(e) => setGuideName(e.target.value)}
                className="h-11 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Guide Mobile Number
              </label>
              <Input
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="h-11 rounded-lg"
              />
            </div>
          </div>

          {/* Dynamic Ticket Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6"
            >
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Show Name
                </label>
                <Select
                  value={row.showName}
                  onValueChange={(val) =>
                    handleRowChange(index, "showName", val)
                  }
                >
                  <SelectTrigger className="h-11 rounded-lg">
                    <SelectValue placeholder="Select Show" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="celebrity-show">
                      Celebrity Show
                    </SelectItem>
                    <SelectItem value="history-show">History Show</SelectItem>
                    <SelectItem value="sports-show">Sports Show</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Adult
                </label>
                <Input
                  type="number"
                  value={row.adult}
                  onChange={(e) =>
                    handleRowChange(index, "adult", e.target.value)
                  }
                  className="h-11 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Ticket Price
                </label>
                <Input
                  type="number"
                  value={row.ticketPrice}
                  onChange={(e) =>
                    handleRowChange(index, "ticketPrice", e.target.value)
                  }
                  className="h-11 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Total Price
                </label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    value={row.totalPrice}
                    readOnly
                    className="h-11 rounded-lg bg-gray-100"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteRow(index)}
                    className="px-4 rounded-lg flex items-center gap-1"
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Add More Button */}
          <div className="flex justify-end mb-6">
            <Button
              onClick={addRow}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 h-11 shadow-md flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add More
            </Button>
          </div>

          {/* Tax & Print Row */}
          <div className="flex flex-col md:flex-row justify-end gap-6 items-end">
            <div className="text-right">
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Tax (%)
              </label>
              <Input
                type="number"
                value={tax}
                onChange={(e) => setTax(e.target.value)}
                className="h-11 w-32 rounded-lg"
              />
            </div>

            <div className="text-right">
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Final Total Amount
              </label>
              <Input
                type="number"
                value={finalAmount.toFixed(2)}
                readOnly
                className="h-11 w-44 rounded-lg bg-gray-100"
              />
            </div>

            <Button
              onClick={handlePrint}
              className="bg-green-600 hover:bg-green-700 text-white h-11 px-10 rounded-lg shadow-md flex items-center gap-2"
            >
              <Printer className="w-5 h-5" /> Print
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;

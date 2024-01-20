import React, { useState, useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import profile1 from "../../images/profile1.jpeg";
import profile2 from "../../images/profile2.jpeg";
import profile3 from "../../images/profile3.jpeg";
import profile4 from "../../images/profile4.jpeg";
import profile5 from "../../images/profile5.jpeg";
import profile6 from "../../images/profile6.jpeg";
function Dashboard() {
  const [manualId, setManualId] = useState("");
  const [scannedCode, setScannedCode] = useState("");
  const [inputMode, setInputMode] = useState("scanner"); // 'scanner' or 'manual'
  const qrScannerRef = useRef(null);

  useEffect(() => {
    if (inputMode === "scanner") {
      // Initialize the QR Scanner
      qrScannerRef.current = new Html5QrcodeScanner(
        "qr-reader",
        { fps: 10, qrbox: 250 },
        false
      );

      qrScannerRef.current.render(
        (decodedText) => {
          setScannedCode(decodedText);
          // Handle the scanned QR code by navigating to the link

          if (isValidHttpUrl(decodedText)) {
            window.location.href = decodedText;
          }
        },
        (error) => {
          console.error("Error scanning QR:", error);
        }
      );
    }

    // Cleanup function
    return () => {
      if (qrScannerRef.current) {
        qrScannerRef.current.clear();
        qrScannerRef.current = null;
      }
    };
  }, [inputMode]);

  const isValidHttpUrl = (string) => {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  };

  const handleInputChange = (e) => {
    setManualId(e.target.value);
  };

  const handleGoClick = () => {
    if (isValidHttpUrl(manualId)) {
      window.open(manualId, "_blank");
    } else {
      alert("Please enter a valid URL.");
    }
  };

  const tableData = [
    {
      id: 1,
      date: "10/1/24",
      type: "Journal Adjustment",
      debit: 150,
      credit: 0,
      balance: 150,
    },
    {
      id: 2,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 3,
      date: "10/3/24",
      type: "Journal Adjustment",
      debit: 150,
      credit: 0,
      balance: 300,
    },
    {
      id: 4,
      date: "15/2/24",
      type: "Journal Adjustment",
      debit: 230,
      credit: 150,
      balance: 380,
    },
    {
      id: 5,
      date: "10/2/24",
      type: "Journal Adjustment",
      debit: 50,
      credit: 130,
      balance: 300,
    },
    {
      id: 6,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 7,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 8,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 9,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 10,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="screen-h flex items-center justify-center">
        <div>
          <h2 className="text-xl font-semibold my-5 text-wrap text-slate-500">
            Scan QR Or Enter Customer Id Manualy
          </h2>
          <div className="flex justify-center mb-4 ">
            <label className="inline-flex  mr-6">
              <input
                type="radio"
                className="form-radio w-5 h-5"
                name="inputMode"
                value="scanner"
                checked={inputMode === "scanner"}
                onChange={() => setInputMode("scanner")}
              />
              <span className="ml-2">Scan QR Code</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio w-6 h-5"
                name="inputMode"
                value="manual"
                checked={inputMode === "manual"}
                onChange={() => setInputMode("manual")}
              />
              <span className="ml-2">Manual Input</span>
            </label>
          </div>

          {inputMode === "scanner" ? (
            <div className="flex justify-center ">
              <div id="qr-reader" className="w-[300px]"></div>
            </div>
          ) : (
            <div className="flex justify-center ">
              <input
                type="text"
                placeholder="Enter ID Here"
                className="shadow border rounded py-2 px-3 text-gray-700"
                value={manualId}
                onChange={handleInputChange}
              />
              <button
                onClick={handleGoClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
      <p>{scannedCode}</p>

      {/* table */}
      <div className="flex w-100 justify-between mt-3 px-4">
        <div className="flex">
          <div className="leading-8 text-lg">
            <p>Customer Name:</p>
            <p>Meter No:</p>
            <p>Origin:</p>
            <p>Customer Address:&nbsp;&nbsp;</p>
          </div>

          <div className="leading-8 font-semibold ml-3">
            <p>Harry</p>
            <p>10956</p>
            <p>RUMA PANGSA</p>
            <p>51200 KUALA LAMPUR </p>
          </div>
        </div>

        <div>
          <p>
            Customer ID: <b>10267</b>
          </p>
          <img className="mt-1 w-[130px]" src={profile1} alt="" />
        </div>
      </div>

      <div className="overflow-x-auto ">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                No.
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Date
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Billing Type
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Debit{" "}
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Credit
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Balance
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="text-left py-3 px-4">{row.id}</td>
                <td className="text-left py-3 px-4">{row.date}</td>
                <td className="text-left py-3 px-4">{row.type}</td>
                <td className="text-left py-3 px-4">{row.debit}</td>
                <td className="text-left py-3 px-4">{row.credit}</td>
                <td className="text-left py-3 px-4">{row.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* table */}
    </div>
  );
}

export default Dashboard;

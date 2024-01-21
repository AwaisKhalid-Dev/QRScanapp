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
  const [customerID, setCustomerID] = useState(null);
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
          else {
            setCustomerID(decodedText);
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
    setCustomerID(manualId);
    // if (isValidHttpUrl(manualId)) {
    //   window.open(manualId, "_blank");
    // } else {
    //   alert("Please enter a valid URL.");
    // }
  };
 const StaticData = [
    {
      id:10267,
      name: "Harry",
      meter: "5667",
      origin: "Gombak",
      adress:"51200 KUALA LAMPUR",
      profile:profile1,
    },
   
    {
      id:20550,
      name: "John",
      meter: "6745",
      origin: "DownTown",
      adress:"51200 KUALA LAMPUR",
      profile:profile2,
    },
   
    {
      id:15689,
      name: "Vue",
      meter: "3245",
      origin: "CityCenter",
      adress:"51200 KUALA LAMPUR",
      profile:profile3,
    },
   
    {
      id:40012,
      name: "Harry",
      meter: "9006",
      origin: "Capital",
      adress:"51200 KUALA LAMPUR",
      profile:profile4,
    },
   
    {
      id:14452,
      name: "Poul",
      meter: "2366",
      origin: "MainCity",
      adress:"51200 KUALA LAMPUR",
      profile:profile5,
    },
   
    {
      id:99826,
      name: "Vicky",
      meter: "2543",
      origin: "Kuala Lumpur",
      adress:"51200 KUALA LAMPUR",
      profile:profile6,
    },
   
  ]


const dummyList =[
  //customer 10267
  {
    id: 1,
    customerID:10267,
    date: "10/1/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 0,
    balance: 180,
  },

  {
    id: 2,
    customerID:10267,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 50,
    credit: 180,
    balance: 50,
  },
  {
    id: 3,
    customerID:10267,
    date: "8/3/24",
    type: "Journal Adjustment",
    debit: 70,
    credit: 0,
    balance: 120,
  },
  {
    id: 4,
    customerID:10267,
    date: "10/4/24",
    type: "Journal Adjustment",
    debit: 30,
    credit: 0,
    balance: 150,
  },
  {
    id: 5,
    customerID:10267,
    date: "15/5/24",
    type: "Journal Adjustment",
    debit: 50,
    credit: 50,
    balance: 150,
  },
  {
    id: 6,
    customerID:10267,
    date: "10/6/24",
    type: "Journal Adjustment",
    debit: 20,
    credit: 170,
    balance:0,
  },
  {
    id: 7,
    customerID:10267,
    date: "12/7/24",
    type: "Journal Adjustment",
    debit: 70,
    credit: 0,
    balance: 70,
  },
  {
    id: 8,
    customerID:10267,
    date: "08/8/24",
    type: "Journal Adjustment",
    debit: 90,
    credit: 0,
    balance: 160,
  },
  {
    id: 9,
    customerID:10267,
    date: "11/9/24",
    type: "Journal Adjustment",
    debit: 110,
    credit: 100,
    balance: 170,
  },
  {
    id: 10,
    customerID:10267,
    date: "15/10/24",
    type: "Journal Adjustment",
    debit: 50,
    credit: 200,
    balance: 20,
  },

  //customer 20550


  {
    id: 1,
    customerID:20550,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },

  {
    id: 2,
    customerID:20550,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 3,
    customerID:20550,
    date: "10/3/24",
    type: "Journal Adjustment",
    debit: 150,
    credit: 0,
    balance: 300,
  },
  {
    id: 4,
    customerID:20550,
    date: "15/2/24",
    type: "Journal Adjustment",
    debit: 230,
    credit: 150,
    balance: 380,
  },
  {
    id: 5,
    customerID:20550,
    date: "10/2/24",
    type: "Journal Adjustment",
    debit: 50,
    credit: 130,
    balance: 300,
  },
  {
    id: 6,
    customerID:20550,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 7,
    customerID:20550,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 8,
    customerID:20550,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 9,
    customerID:20550,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 10,
    customerID:20550,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },

  //customer 15689
  
  {
    id: 1,
    customerID:15689,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },

  {
    id: 2,
    customerID:15689,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 3,
    customerID:15689,
    date: "10/3/24",
    type: "Journal Adjustment",
    debit: 150,
    credit: 0,
    balance: 300,
  },
  {
    id: 4,
    customerID:15689,
    date: "15/2/24",
    type: "Journal Adjustment",
    debit: 230,
    credit: 150,
    balance: 380,
  },
  {
    id: 5,
    customerID:15689,
    date: "10/2/24",
    type: "Journal Adjustment",
    debit: 50,
    credit: 130,
    balance: 300,
  },
  {
    id: 6,
    customerID:15689,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 7,
    customerID:15689,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 8,
    customerID:15689,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 9,
    customerID:15689,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 10,
    customerID:15689,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },


  //customer 40012
  
  {
    id: 1,
    customerID:40012,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },

  {
    id: 2,
    customerID:40012,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 3,
    customerID:40012,
    date: "10/3/24",
    type: "Journal Adjustment",
    debit: 150,
    credit: 0,
    balance: 300,
  },
  {
    id: 4,
    customerID:40012,
    date: "15/2/24",
    type: "Journal Adjustment",
    debit: 230,
    credit: 150,
    balance: 380,
  },
  {
    id: 5,
    customerID:40012,
    date: "10/2/24",
    type: "Journal Adjustment",
    debit: 50,
    credit: 130,
    balance: 300,
  },
  {
    id: 6,
    customerID:40012,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 7,
    customerID:40012,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 8,
    customerID:40012,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 9,
    customerID:40012,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 10,
    customerID:40012,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },


  //customer 14452
  
  {
    id: 1,
    customerID:14452,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },

  {
    id: 2,
    customerID:14452,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 3,
    customerID:14452,
    date: "10/3/24",
    type: "Journal Adjustment",
    debit: 150,
    credit: 0,
    balance: 300,
  },
  {
    id: 4,
    customerID:14452,
    date: "15/2/24",
    type: "Journal Adjustment",
    debit: 230,
    credit: 150,
    balance: 380,
  },
  {
    id: 5,
    customerID:14452,
    date: "10/2/24",
    type: "Journal Adjustment",
    debit: 50,
    credit: 130,
    balance: 300,
  },
  {
    id: 6,
    customerID:14452,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 7,
    customerID:14452,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 8,
    customerID:14452,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 9,
    customerID:14452,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 10,
    customerID:14452,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },

   //customer 99826
  
   {
    id: 1,
    customerID:99826,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },

  {
    id: 2,
    customerID:99826,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 3,
    customerID:99826,
    date: "10/3/24",
    type: "Journal Adjustment",
    debit: 150,
    credit: 0,
    balance: 300,
  },
  {
    id: 4,
    customerID:99826,
    date: "15/2/24",
    type: "Journal Adjustment",
    debit: 230,
    credit: 150,
    balance: 380,
  },
  {
    id: 5,
    customerID:99826,
    date: "10/2/24",
    type: "Journal Adjustment",
    debit: 50,
    credit: 130,
    balance: 300,
  },
  {
    id: 6,
    customerID:99826,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 7,
    customerID:99826,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 8,
    customerID:99826,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 9,
    customerID:99826,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },
  {
    id: 10,
    customerID:99826,
    date: "12/2/24",
    type: "Journal Adjustment",
    debit: 180,
    credit: 180,
    balance: 150,
  },

  

]


const filteredCustomerIndex = StaticData.findIndex(item => parseInt(item.id) === parseInt(customerID));
const filteredList = dummyList.filter(item => parseInt(item.customerID) === parseInt(customerID));

  return (
    <div className="container mx-auto p-4 ">
      <div className="screen-h flex items-center justify-center my-5 ">
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
      <div className="flex w-100 justify-between mt-[80px] px-4">
        <div className="flex">
          <div className="leading-8 text-lg">
            <p>Customer:</p>
            <p>Meter No:</p>
            <p>Origin:</p>
            <p>Customer Address:&nbsp;&nbsp;</p>
          </div>

          <div className="leading-8 font-semibold ml-3">
            <p>{StaticData[filteredCustomerIndex]?.name   || "N/A"}</p>
            <p>{StaticData[filteredCustomerIndex]?.meter  || "N/A"}</p>
            <p>{StaticData[filteredCustomerIndex]?.origin || "N/A"}</p>
            <p>{StaticData[filteredCustomerIndex]?.adress || "N/A"}</p>
          </div>
        </div>

        <div>
          <p>
            Customer ID: <b>{StaticData[filteredCustomerIndex]?.id || "N/A" }</b>
          </p>
          <img className="mt-1 w-[130px]" src={StaticData[filteredCustomerIndex]?.profile || "N/A"} alt="" />
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
            {filteredList.map((row, index) => (
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

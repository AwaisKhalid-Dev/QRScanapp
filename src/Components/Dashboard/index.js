import React, { useState, useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

function Dashboard() {
  const [manualId, setManualId] = useState('');
  const [inputMode, setInputMode] = useState('scanner'); // 'scanner' or 'manual'
  const qrScannerRef = useRef(null);

  useEffect(() => {
    if (inputMode === 'scanner') {
      // Initialize the QR Scanner
      qrScannerRef.current = new Html5QrcodeScanner(
        "qr-reader", { fps: 10, qrbox: 250 }, false);
      
      qrScannerRef.current.render(
        decodedText => {
          // Handle the scanned QR code by navigating to the link
          if (isValidHttpUrl(decodedText)) {
            window.location.href = decodedText;
          }
        },
        error => {
          console.error('Error scanning QR:', error);
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
      window.open(manualId, '_blank');
    } else {
      alert('Please enter a valid URL.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        
      <label className="inline-flex items-center mr-6">
          <input type="radio"
                 className="form-radio"
                 name="inputMode"
                 value="scanner"
                 checked={inputMode === 'scanner'}
                 onChange={() => setInputMode('scanner')} />
          <span className="ml-2">Scan QR Code</span>
        </label>
        <label className="inline-flex items-center">
          <input type="radio"
                 className="form-radio"
                 name="inputMode"
                 value="manual"
                 checked={inputMode === 'manual'}
                 onChange={() => setInputMode('manual')} />
          <span className="ml-2">Manual Input</span>
        </label>


      </div>

      {inputMode === 'scanner' ? (
        <div className="flex justify-center">
          <div id="qr-reader" style={{ width: '300px' }}></div>
        </div>
      ) : (
        <div className="flex justify-center">
          <input type="text"
                 placeholder="Enter URL"
                 className="shadow border rounded py-2 px-3 text-gray-700"
                 value={manualId}
                 onChange={handleInputChange} />
          <button onClick={handleGoClick} 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go
          </button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

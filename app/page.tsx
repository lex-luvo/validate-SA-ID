"use client"

import { useState } from 'react';
import { isIdNumberValid, getRandomInvalidMessage } from '../lib/validateIdNumber';

export default function Home() {
  const [idNumber, setIdNumber] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const handleValidate = () => {
    if (idNumber.length < 13) {
      setValidationMessage("⏳ That ID is too short to be South African. Try 13 digits.");
      return;
    }
    if (idNumber.length > 13) {
      setValidationMessage("🚫 That ID is too long. South African IDs only have 13 digits.");
      return;
    }

    const result = isIdNumberValid(idNumber);
    setValidationMessage(
        result
            ? `✅ ${idNumber} is valid!`
            : `❌ ${getRandomInvalidMessage()}`
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdNumber(e.target.value);
    setValidationMessage("");
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-red-950">
        <div className="p-6 rounded shadow-md w-full max-w-md">
          <p className="text-2xl text-white font-bold text-center mb-4">
            Validate if a given South African ID number is legit and avoid getting scammed!
          </p>
          <input
              type="text"
              value={idNumber}
              onChange={handleInputChange}
              placeholder="Enter 13-digit ID number"
              className="w-full border px-4 py-2 rounded mb-4 text-white bg-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
              onClick={handleValidate}
              className="w-full bg-red-400 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Find out
          </button>

          {validationMessage && (
              <p className={`mt-4 text-center text-lg font-medium ${validationMessage.startsWith("✅") ? "text-green-500" : "text-red-500"}`}>
                {validationMessage}
              </p>
          )}
        </div>
      </div>
  );
}

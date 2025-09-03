"use client";
import React from "react";
import Image from "next/image";

interface SecretPanelProps {
  setShowSecret: React.Dispatch<React.SetStateAction<boolean>>;
}

const SecretPanel: React.FC<SecretPanelProps> = ({ setShowSecret }) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-70 z-40"
        onClick={() => setShowSecret(false)}
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-6 rounded-xl shadow-lg z-50 w-96">
        <button
          className="absolute top-3 right-4 text-red-500 text-2xl"
          onClick={() => setShowSecret(false)}
        >
          ×
        </button>
        <div className="flex flex-col items-center">
          <Image
            src="/hina.jpeg"
            alt="Foto istri Gabriel"
            width={150}
            height={150}
            className="rounded-full border-4 border-pink-400 shadow-md"
          />
          <h3 className="mt-4 text-xl text-pink-400">Special Section 💕</h3>
          <p className="text-gray-300 text-center mt-2">
            <strong className="text-pink-400">Sorasaki Hina</strong> adalah
            karakter istimewa dan istri saya.
          </p>
        </div>
      </div>
    </>
  );
};

export default SecretPanel;

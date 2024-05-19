import React, { useState } from "react";
import Modal from "./Modal";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1>
        Connect with us on{" "}
        <a
          className="text-blue-600 hover:text-blue-800"
          href="https://linkedin.com"
          target="_blank"
        >
          LinkedIn
        </a>
      </h1>
      <button onClick={() => setIsOpen(true)}> Open Popup</button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header={<p className="text-xl font-bold text-red-400">Hi</p>}
        footer={<button onClick={() => setIsOpen(false)}>OK</button>}
      >
        <p>Test paragraph</p>
      </Modal>
    </>
  );
}

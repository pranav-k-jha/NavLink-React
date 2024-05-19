import React, { useState } from "react";
import Modal from "./Modal";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <h1>
      Connect with us on{" "}
      <a className="text-blue-600 hover:text-blue-800" href="https://linkedin.com" target="_blank">
        LinkedIn
      </a>
    </h1>
    <button onClick={() => setIsOpen(true)}> Open Popup</button>
    <Modal  isOpen={isOpen}
            setIsOpen={setIsOpen} header={<p className="text-red-400 font-bold text-xl">Hi</p>} footer={<button>OK</button>}>
              <p>Test paragraph</p>
            </Modal>
    </>
  );
}

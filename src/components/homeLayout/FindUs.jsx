import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-4">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full ">
          <button className="btn join-item bg-white justify-start"> <FaFacebook/> Facebook</button>
          <button className="btn join-item bg-white justify-start"> <FaTwitter/> Twitter</button>
          <button className="btn join-item bg-white justify-start"> <FaInstagram/> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;

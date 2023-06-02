import React from "react";
import {
  FaYoutubeSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-14 px-6 grid lg:grid-cols-3 gap-6 text-gray-500">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          COMPANY NAME
        </h1>
        <p className="py-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quo
          delectus nesciunt pariatur impedit! Voluptatum aut distinctio vitae
          nostrum autem. Tempore corporis sed atque officia eveniet aperiam
          repellendus quaerat doloribus.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={40} />
          <FaGithubSquare size={40} />
          <FaInstagramSquare size={40} />
          <FaTwitterSquare size={40} />
          <FaYoutubeSquare size={40} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
          <h3 className="font-medium my-2">Services</h3>
          <ul>
            <li className="py-2">Service 1</li>
            <li className="py-2">Service 2</li>
            <li className="py-2">Service 3</li>
            <li className="py-2">Service 4</li>
            <li className="py-2">Service 5</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium my-2">Benefits</h3>
          <ul>
            <li className="py-2">Benefit 1</li>
            <li className="py-2">Benefit 2</li>
            <li className="py-2">Benefit 3</li>
            <li className="py-2">Benefit 4</li>
            <li className="py-2">Benefit 5</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium my-2">Documents</h3>
          <ul>
            <li className="py-2">Document 1</li>
            <li className="py-2">Document 2</li>
            <li className="py-2">Document 3</li>
            <li className="py-2">Document 4</li>
            <li className="py-2">Document 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

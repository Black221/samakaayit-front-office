import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";

const ServiceSelection = () => {
  const [services, setServices] = useState<any[]>([]);
  // const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // const navigate = useNavigate();
  
  // const handleButtonClick = (index: number) => {
  //   setActiveIndex(index); 
  //   navigate("services/"+ services[index]._id);
  // };
  
  useEffect(() => {
    fetch(BASE_URL + "/services/byInstitution/66d374377bc1913f767e4458")
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        setServices(json.data);
      });
  }, []);

  return (

    <div className="bg-white p-6 rounded-xl shadow-md w-75 max-h-[700px]">
      <h2 className="text-lg font-semibold mb-4 font-body">Services</h2>
      <ul className="space-y-4">
        {services.map((service, index) => (
          <NavLink
            key={index}
            to={"services/"+ services[index]._id}
            className={({ isActive }) =>
              isActive
                ? "block bg-primary-700 text-white font-medium px-4 py-2 rounded-lg"
                : "block bg-gray-100 text-gray-800 hover:bg-primary-50 hover:text-gray-900 font-medium px-4 py-2 rounded-lg"
            }
          >
            {service.name}
          </NavLink>
        //   <button
        //   key={index}
        //   onClick={() => handleButtonClick(index)}
        //   className={`block font-medium px-4 py-2 rounded-lg ${
        //     activeIndex === index
        //       ? "bg-primary-700 text-white" 
        //       : "bg-gray-100 text-gray-800 hover:bg-primary-50 hover:text-gray-900" 
        //   }`}
        // >
        //   {service.name}
        // </button>
        ))}
      </ul>
    </div>
  );
};

export default ServiceSelection;

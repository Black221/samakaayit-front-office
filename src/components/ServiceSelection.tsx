import { NavLink } from "react-router-dom";

const ServiceSelection = () => {
  const services = [
    { route: "Certificat-de-mariage", label: "Certificat de mariage" },
    { route: "Certificat-de-naissance", label: "Certificat de naissance" },
    { route: "Certificat-de-deces", label: "Certificat de décès" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-75 max-h-[700px]">
      <h2 className="text-lg font-semibold mb-4 font-body">Services</h2>
      <ul className="space-y-4">
        {services.map((service, index) => (
          <NavLink
            key={index}
            to={service.route}
            className={({ isActive }) =>
              isActive
                ? "block bg-primary-700 text-white font-medium px-4 py-2 rounded-lg"
                : "block bg-white text-gray-800 hover:bg-primary-50 hover:text-gray-900 font-medium px-4 py-2 rounded-lg"
            }
          >
            {service.label}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default ServiceSelection;

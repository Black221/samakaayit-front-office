import { BASE_URL } from "../constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NavLink } from "react-router-dom";

// const Skeleton = () => {
//   return (
//     <div className="p-6 rounded-xl shadow-md w-75 max-h-[700px]">
//        <h2 className="text-lg font-semibold mb-4 font-body">Services</h2>
//         <div className="h-full flex-col flex w-40 space-y-4 rounded-lg ">
//           {Array(6).fill(0).map((_, i) => (
//             <div key={i} className="animate-pulse w-full h-8 rounded-lg mb-3 bg-neutral-200"></div>
//           ) )}
//         </div>
//     </div>
//   )
// }

const ServiceSelection = () => {
  // const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getAllServices = async () => {
    const response = await axios.get(BASE_URL + "/services/byInstitution/66d374377bc1913f767e4458");
    return response.data.data;
  };

  const {data} = useQuery({
    queryKey: ['services'],
    queryFn: getAllServices,
  })

  console.log("data", data);


  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-75 max-h-[700px]">
      <h2 className="text-lg font-semibold mb-4 font-body">Services</h2>
      <ul className="space-y-4">
        {
          data && data.map((service: any, index: number) => (
            <NavLink
              key={index}
              // onClick={() => setActiveIndex(index)}
              to={"services/" + service._id}
              className={({ isActive }) => isActive ? "block bg-primary-700 text-white font-medium px-4 py-2 rounded-lg" : "block bg-gray-100 text-gray-800 hover:bg-primary-50 hover:text-gray-900 font-medium px-4 py-2 rounded-lg"}>
              {service.name}
            </NavLink>
          ))
        }
      </ul>
    </div>
  );
};

export default ServiceSelection;

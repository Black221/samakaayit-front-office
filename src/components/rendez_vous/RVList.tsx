import { useNavigate } from "react-router-dom";
import { RVModel } from "../../types/models";
import RVItem from "./RVItem";

interface RVListProps {
  RVs: RVModel[];
}

export default function RVList({ RVs }: RVListProps) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col space-y-5">
      {RVs.map((rv, index) => (
        <RVItem rv={rv} key={index} />
      ))}
      {RVs.length > 3 && (
        <button
          onClick={() => navigate("/messagerie")}
          className="mt-4 text-sm text-primary-700 hover:underline"
        >
          Voir tout
        </button>
      )}
    </div>
  );
}

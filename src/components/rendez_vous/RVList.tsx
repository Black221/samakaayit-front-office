import { RendezVous } from "../../types/models";
import RVItem from "./RVItem";

interface RVListProps {
  RVs: RendezVous[];
}

export default function RVList({ RVs }: RVListProps) {
  return RVs.map((rv, index) => <RVItem rv={rv} key={index} />);
}

import { getRandomColor, capitalizeFirstLetter } from "../../utils";
import { RendezVous } from "../../types/models";
import { getTimeFromDate } from "../../utils";

interface RVProps {
  rv: RendezVous;
}

export default function RVItem({ rv }: RVProps) {
  const randomColor = getRandomColor();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div
          className={`h-10 w-10 rounded-full flex items-center justify-center text-white ${randomColor}`}
        >
          {capitalizeFirstLetter(rv?.citoyen?.name)}
        </div>

        <div className="ml-4">
          <h4 className="font-medium">
            {rv?.citoyen.name} {rv?.citoyen?.surname}
          </h4>
        </div>
      </div>
      <span className="text-sm text-gray-500">
        {getTimeFromDate(rv?.dateAndHour)}
      </span>
    </div>
  );
}

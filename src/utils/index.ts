function getRandomColor(): string {
  const backgroundColors = [
    "bg-primary-900",
    "bg-primary-800",
    "bg-primary-700",
    "bg-primary-600",
    "bg-primary-500",
    "bg-primary-400",
    "bg-primary-300",
    "bg-primary-200",
    "bg-primary-100",
    "bg-primary-50",
    "bg-secondary-900",
    "bg-secondary-800",
    "bg-secondary-700",
    "bg-secondary-600",
    "bg-secondary-500",
    "bg-secondary-400",
    "bg-secondary-300",
    "bg-secondary-200",
    "bg-secondary-100",
    "bg-secondary-50",
    "bg-tertiary-900",
    "bg-tertiary-800",
    "bg-tertiary-700",
    "bg-tertiary-600",
    "bg-tertiary-500",
    "bg-tertiary-400",
    "bg-tertiary-300",
    "bg-tertiary-200",
    "bg-tertiary-100",
    "bg-tertiary-50",
  ];

  const randomIndex = Math.floor(Math.random() * backgroundColors.length);
  return backgroundColors[randomIndex];
}

function capitalizeFirstLetter(str: string | undefined) {
  return str?.charAt(0).toUpperCase();
}

const getDateinFrench = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("fr-FR", options);
};

const getDateOfTypeStringInFrench = (date: string | undefined) => {
  if (date) {
    const formattedDate = new Date(date)
      .toISOString()
      .split("T")[0]
      .split("-")
      .reverse()
      .join("-");
    return formattedDate;
  }
};

const getTimeFromDate = (date: string | undefined) => {
  if (date) {
    const hours = new Date(date).getUTCHours();
    const minutes = new Date(date).getUTCMinutes();

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }
};


/**
 * Format a date string to a human readable format
 * @param isoDate - The date string to format
 * @returns The formatted date string in the format 'YYYY-MM-DD'
 */
const formatDate = (isoDate: string | undefined, separator: string = '-') => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${separator}${month}${separator}${day}`;
}


const normalizeString = (name: string) => {
  return name
  .toLowerCase()
  .replaceAll(' ', '_')
  .replaceAll('-', '_')
  .replaceAll('\'', '_')
  .replaceAll('é', 'e')
  .replaceAll('è', 'e')
  .replaceAll('ê', 'e')
  .replaceAll('à', 'a')
  .replaceAll('ç', 'c')
  .replaceAll('ù', 'u')
  .replaceAll('û', 'u')
  .replaceAll('ô', 'o')
  .replaceAll('î', 'i')
  .replaceAll('ï', 'i')
  .replaceAll('ö', 'o')
  .replaceAll('ü', 'u')
  .replaceAll('â', 'a')
  ;
}

export {
  getRandomColor,
  capitalizeFirstLetter,
  getDateOfTypeStringInFrench,
  getDateinFrench,
  getTimeFromDate,
  formatDate,
  normalizeString
};

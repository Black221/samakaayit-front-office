function getRandomColor(): string {
  const backgroundColors = [
    'bg-primary-900',
    'bg-primary-800',
    'bg-primary-700',
    'bg-primary-600',
    'bg-primary-500',
    'bg-primary-400',
    'bg-primary-300',
    'bg-primary-200',
    'bg-primary-100',
    'bg-primary-50',
    'bg-secondary-900',
    'bg-secondary-800',
    'bg-secondary-700',
    'bg-secondary-600',
    'bg-secondary-500',
    'bg-secondary-400',
    'bg-secondary-300',
    'bg-secondary-200',
    'bg-secondary-100',
    'bg-secondary-50',
    'bg-tertiary-900',
    'bg-tertiary-800',
    'bg-tertiary-700',
    'bg-tertiary-600',
    'bg-tertiary-500',
    'bg-tertiary-400',
    'bg-tertiary-300',
    'bg-tertiary-200',
    'bg-tertiary-100',
    'bg-tertiary-50',
  ];

  const randomIndex = Math.floor(Math.random() * backgroundColors.length);
  return backgroundColors[randomIndex];
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase();
}

export { getRandomColor, capitalizeFirstLetter };

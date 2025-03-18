
export const getMostRecentDate = (firstDate: string, secondDate: string): string => {
  const diff = new Date(firstDate).getTime() - new Date(secondDate).getTime();

  if (diff > 0)
    return firstDate;

  return secondDate;

}

export const getDevelopingYears = (startDate: Date) => {
  const currentDate = new Date();
  const countingCurrentMonth = 1;
  let months;
  months = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
  months -= startDate.getMonth();
  months += currentDate.getMonth() + countingCurrentMonth;
  const numMonths = months <= 0 ? 0 : months;
  const numYears = numMonths / 12;
  return Number(numYears.toFixed(1));
};

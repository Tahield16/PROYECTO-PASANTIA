interface datesType {
  releaseFrom?: string;
  releaseTo?: string;
}
export const verifyDates = (dates?: datesType): string => {
  if (!dates) return "";

  if (!dates.releaseFrom || !dates.releaseTo) return "";

  return `${dates.releaseFrom},${dates.releaseTo}`;
};

import { Experience, Timeline } from "@/types/Timeline";

export const YEAR_HEIGHT = 120;
export const MONTH_HEIGHT = YEAR_HEIGHT / 12;

export const getYears = (options: { timeline: Timeline }): Array<number> => {
  let earliest = Date.now();
  let latest = Date.now();

  for (const history of [
    ...options.timeline.discoveries,
    ...options.timeline.experiences,
  ]) {
    if (history.start < earliest) {
      earliest = history.start;
    }
  }

  const earliestYear = new Date(earliest).getFullYear();
  const latestYear = new Date(latest).getFullYear();
  const years = [];

  for (let year = earliestYear; year <= latestYear; year++) {
    years.push(year);
  }

  return years;
};

export const getYearSpans = (options: {
  experiences: Experience[];
  years: Array<number>;
  yearsReversed: Array<number>;
}): Array<{ bottom: number; top: number }> => {
  const spans: Array<{ bottom: number; top: number }> = [];

  for (const experience of options.experiences) {
    const start = new Date(experience.start);
    const startMonth = start.getMonth() + 1;
    const startYear = start.getFullYear();
    const bottom =
      YEAR_HEIGHT * options.years.indexOf(startYear) +
      MONTH_HEIGHT * startMonth;

    let top = 0;
    if (experience.end !== null) {
      const end = new Date(experience.end);
      const endMonth = end.getMonth() + 1;
      const endYear = end.getFullYear();
      top =
        YEAR_HEIGHT * options.yearsReversed.indexOf(endYear) -
        MONTH_HEIGHT * endMonth;
    }

    spans.push({ bottom, top });
  }

  return spans;
};

export const getYearsReversed = (options: {
  years: Array<number>;
}): Array<number> => {
  return [...options.years].reverse();
};

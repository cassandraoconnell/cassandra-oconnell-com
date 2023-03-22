import { Experience, History } from "@/types/History";

export const YEAR_HEIGHT = 120;
export const MONTH_HEIGHT = YEAR_HEIGHT / 12;

export const getYears = (options: { history: History }): number[] => {
  let earliest = Date.now();
  let latest = Date.now();

  for (const experience of options.history.experience) {
    if (experience.start < earliest) {
      earliest = experience.start;
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

export const getYearsReversed = (options: { years: number[] }): number[] => {
  return [...options.years].reverse();
};

type ExperienceRenderData = {
  id: string;
  position: {
    bottom: number;
    top: number;
  };
  span: string;
} & Experience;

export const getExperienceRenderData = (options: {
  experience: Experience[];
  years: number[];
  yearsReversed: number[];
}): ExperienceRenderData[] => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const experienceRenderData: ExperienceRenderData[] = [];

  for (const experience of options.experience) {
    const start = new Date(experience.start);
    const startMonth = start.getMonth();
    const startYear = start.getFullYear();
    const bottom =
      YEAR_HEIGHT * options.years.indexOf(startYear) +
      MONTH_HEIGHT * startMonth +
      1;
    const from = `${months[startMonth]} ${startYear}`;

    let top = 0;
    let to = "Present";
    if (experience.end !== null) {
      const end = new Date(experience.end);
      const endMonth = end.getMonth();
      const endYear = end.getFullYear();
      top =
        YEAR_HEIGHT * options.yearsReversed.indexOf(endYear) +
        MONTH_HEIGHT * (12 - endMonth + 1);
      to = `${months[endMonth]} ${endYear}`;
    }

    experienceRenderData.push({
      ...experience,
      id: `${experience.company}-${experience.job}`,
      position: { bottom, top },
      span: `${from} — ${to}`,
    });
  }

  return experienceRenderData;
};

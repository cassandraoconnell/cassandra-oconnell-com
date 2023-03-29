import { History } from "@/types/History";
import { BlockProps } from "./Block/Block";
import { InfoProps } from "./Info/Info";

export class TimelineRenderer {
  private _cache: {
    blocks: BlockProps[] | null;
    info: InfoProps[] | null;
    years: number[] | null;
  };

  private readonly _history: History;

  private readonly _months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ] as const;

  constructor(options: { history: History }) {
    this._history = options.history;
    this._cache = {
      blocks: null,
      info: null,
      years: null,
    };
  }

  get blocks() {
    if (this._cache.blocks == null) {
      this._cache.blocks = [];

      const max = new Date(`January 1 ${this.years.at(0)}`).getTime();
      const min = new Date(`January 1 ${this.years.at(-1)}`).getTime();

      for (const experience of this._history.experience) {
        const start = (experience.start - min) / (max - min);
        const end = (experience.end - min) / (max - min);

        this._cache.blocks.push({
          left: `${(1 - end) * 100}%`,
          right: `${start * 100}%`,
        });
      }
    }

    return this._cache.blocks;
  }

  get info() {
    if (this._cache.info == null) {
      this._cache.info = [];

      for (const experience of this._history.experience) {
        const startDate = new Date(experience.start);
        const startMonth = this._months[startDate.getMonth()];
        const startYear = startDate.getFullYear();
        const start = `${startMonth} ${startYear}`;

        let end = "Present";
        if (experience.end) {
          const endDate = new Date(experience.end);
          const endMonth = this._months[endDate.getMonth()];
          const endYear = endDate.getFullYear();
          end = `${endMonth} ${endYear}`;
        }

        this._cache.info.push({
          company: experience.company,
          description: experience.description,
          logoUrl: `url("${experience.logo}")`,
          job: experience.job,
          span: `${start} — ${end}`,
          tags: experience.tags,
        });
      }
    }

    return this._cache.info;
  }

  get years() {
    if (this._cache.years === null) {
      this._cache.years = [];

      let earliest = Date.now();
      let latest = Date.now();

      for (const experience of this._history.experience) {
        if (experience.start < earliest) {
          earliest = experience.start;
        }
      }

      const earliestYear = new Date(earliest).getFullYear();
      const latestYear = new Date(latest).getFullYear() + 1;

      for (let year = latestYear; year >= earliestYear; year--) {
        this._cache.years.push(year);
      }
    }

    return this._cache.years;
  }
}

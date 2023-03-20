export interface Experience {
  company: string;
  description: string | null;
  end: number | null;
  job: string;
  logo: string;
  start: number;
}

export interface Timeline {
  experiences: Experience[];
}

export interface Discovery {
  description: string;
  title: string;
  start: number;
}

export interface Experience {
  company: string;
  description: string;
  end: number | null;
  job: string;
  logo: string;
  start: number;
}

export interface Timeline {
  discoveries: Discovery[];
  experiences: Experience[];
}

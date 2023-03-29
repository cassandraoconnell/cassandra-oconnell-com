export interface Experience {
  company: string;
  description: string | null;
  end: number;
  job: string;
  logo: string;
  start: number;
}

export interface History {
  experience: Experience[];
}

export interface Discovery {
  description: string;
  title: string;
  span: string;
}

export interface Experience {
  company: string;
  description: string;
  jobTitle: string;
  logoUrl: string;
  span: string;
}

export interface Timeline {
  discoveries: Discovery[];
  experiences: Experience[];
}

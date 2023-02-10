export interface User {
  email: string;
  password: string;
}

export interface Talent extends User {
  name: string;
  availability: string[];
  is_displayed: boolean;
  job_modes: string[];
  job_title: string;
  job_types: string[];
  linkedin_url: string;
  photo_url: string;
  skills: string[];
  story: string;
  talent_id: number;
}

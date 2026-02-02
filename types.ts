
export type ViewState = 'onboarding' | 'home' | 'universities' | 'scholarships' | 'process' | 'reviewers' | 'about';

export type CourseCategory = 
  | 'General' 
  | 'Medical' 
  | 'Engineering' 
  | 'Hospitality' 
  | 'Education' 
  | 'Business' 
  | 'Arts & Design' 
  | 'IT' 
  | 'Social Sciences' 
  | 'Cadet'
  | 'Law';

export interface UserProfile {
  preferredCourses: CourseCategory[]; // Multiple selections
  location?: string;
  examReady?: boolean;
  gradesIndicator?: 'Below 80' | '80-89' | '90-94' | '95-100' | 'Prefer not to say';
}

export interface University {
  name: string;
  address?: string;
  categories: CourseCategory[];
  type: 'Private' | 'State' | 'Government';
  link?: string;
  requirements?: string[];
  offersScholarship?: boolean;
  applicationFee?: string;
}

export interface ScholarshipEntry {
  title: string;
  provider: 'Government' | 'Private';
  level: 'SHS/JHS' | 'College' | 'Both';
  tags: string[];
  link?: string;
  requirements?: string[];
}

export interface ReviewerLink {
  channel: string;
  url: string;
  about: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

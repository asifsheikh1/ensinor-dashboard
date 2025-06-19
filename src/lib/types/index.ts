export interface CourseDataTypes {
  title: string;
  category: string;
  duration: string;
  progress: number;
}

export interface ExperienceTypes {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  projects: string[];
}

export interface EductionTypes {
  courseName: string;
  institution: string;
  duration: string;
  location: string;
  gpa: number;
}

export interface CertificationTypes {
  role: string;
  company: string;
  duration: string;
  location: string;
  credentialId: string;
}

export interface QuizTypes {
  quizName: string;
  totalQuestion: number;
  corrected: number;
  date: string;
  duration: string;
  attendance: number;
  answeringStatus: "not answered" | "answered";
  percentage?: number;
}

export interface StateTypes {
    title: string;
    mainText: string;
    subText: string;
    percentage?: number;
}

export interface QuizInGradeTypes {
  quizName: string;
  instructorName: string;
  totalQuestion: number;
  percentage: number;
  date: string;
  answeringStatus: string;
  grade: string;
}

export interface CertificateTypes {
  certificateName: string;
  instructorName: string;
  date: string;
  courseProgress?: number;
}
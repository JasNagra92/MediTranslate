export type RootStackParamList = {
  Home: undefined;
  'Punjabi Chest Pain': {
    language: string;
    questions: Language;
  };
  'Punjabi Abdo Pain': {
    language: string;
    questions: Language;
  };
  'Mandarin Chest Pain': {
    language: string;
    questions: Language;
  };
  'Mandarin Abdo Pain': {
    language: string;
    questions: Language;
  };
  'Hindi Chest Pain': {
    language: string;
    questions: Language;
  };
  'Hindi Abdo Pain': {
    language: string;
    questions: Language;
  };
  'Arabic Chest Pain': {
    language: string;
    questions: Language;
  };
  'Arabic Abdo Pain': {
    language: string;
    questions: Language;
  };
  'Korean Chest Pain': {
    language: string;
    questions: Language;
  };
  'Korean Abdo Pain': {
    language: string;
    questions: Language;
  };
  Punjabi: undefined;
  Mandarin: undefined;
  Korean: undefined;
  Arabic: undefined;
  Hindi: undefined;
  FullScreen: undefined;
  'Suggest A Question': undefined;
};

export type QuestionType = {
  question: string;
  filename: string;
  filetype: string;
  originalText: string;
  phonetic?: string;
};

export type Language = Array<QuestionType>;

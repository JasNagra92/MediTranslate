import type {DrawerScreenProps} from '@react-navigation/drawer';

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

export type Props = DrawerScreenProps<
  RootStackParamList,
  | 'Punjabi Chest Pain'
  | 'Mandarin Chest Pain'
  | 'Arabic Chest Pain'
  | 'Hindi Chest Pain'
  | 'Korean Chest Pain'
  | 'Punjabi Abdo Pain'
  | 'Mandarin Abdo Pain'
  | 'Arabic Abdo Pain'
  | 'Hindi Abdo Pain'
  | 'Korean Abdo Pain'
>;
// Prop type defined is used to type check the screens rendered. DrawerScreenProps defines the route and navigation object
// that is passed to each screen and used to navigate between screens

export type QuestionType = {
  question: string;
  filename: string;
  filetype: string;
  originalText: string;
  phonetic?: string;
};

export type Language = Array<QuestionType>;

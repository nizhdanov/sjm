interface Option {
  id: string;
  value: string;
  label: string;
}

interface Question {
  id: string;
  order: number;
  body: string;
  question: string;
  options: Option[];
}

interface Answer {
  order: number;
  value: string;
}

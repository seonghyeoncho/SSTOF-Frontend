export interface InputMDProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  placeholder: string;
}

export interface PreviewProps {
  value: string;
}
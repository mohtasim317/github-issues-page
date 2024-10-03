export interface IssuesProps {
  key: number;
  title: string;
  number: number;
  login: string;
  created_at: string;
}

export interface SearchBarProps {
  updateSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

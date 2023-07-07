import { FC } from "react";
import styles from './SearchFilter.module.css'

type SearchFilterProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  handleSearch: () => void;
};

export const SearchFilter: FC<SearchFilterProps> = ({
  searchTerm,
  setSearchTerm,
  handleSearch,
}) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input}
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

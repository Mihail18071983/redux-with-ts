import { useFavorites } from "../../hooks/useFavorites";

import { BsFillBookmarkHeartFill } from "react-icons/bs";

import styles from "./Header.module.css";

export const Header = () => {
  const { favorites } = useFavorites();
  const favoritesCount = favorites ? favorites.length : 0;
  return (
    <header className={styles.header}>
          <BsFillBookmarkHeartFill />
          <span>{favoritesCount }</span>
    </header>
  );
};

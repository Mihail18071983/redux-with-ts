import { bindActionCreators } from "@reduxjs/toolkit";

import { useMemo } from "react";
import { useDispatch } from "react-redux";

import  {toggleFavorites}  from "../store/favorites/favorite.slice";

const rootActions = {
  toggleFavorites
};


export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};


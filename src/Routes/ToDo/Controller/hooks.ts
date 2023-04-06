import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { RootState , AppDispatch} from "Store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => AppDispatch = useDispatch;
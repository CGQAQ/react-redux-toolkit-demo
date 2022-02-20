import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, AppRootState } from "./store";

// useDispatch
// useSelector默认不知道我们的store里有什么，遇到告诉他
export const useAppDispatch = () => useDispatch<AppDispatch>();
// 现在就知道类型了
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;

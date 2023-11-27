import { store } from 'entites/store';
import { useDispatch } from "react-redux";
import { AppDispatch } from 'entites/store'

export const useAppDispatch: () => AppDispatch = useDispatch;

import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { loginReduser } from "entities/LoginSlice";



type RootStateLogin = ReturnType<typeof loginReduser>;
export type AppThunkDispatchLogin = ThunkDispatch<RootStateLogin, any, Action>;


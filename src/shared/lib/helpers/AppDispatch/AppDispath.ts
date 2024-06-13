import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { loginReduser } from "entities/LoginSlice";
import { profileReduser } from "pages/ProfilePage/Profileconfig/ProfileSlice";



type RootStateLogin = ReturnType<typeof loginReduser>;
export type AppThunkDispatchLogin = ThunkDispatch<RootStateLogin, any, Action>;

type RootStateData = any;
export type AppThunkDispatchData = ThunkDispatch<RootStateData, any, Action>;


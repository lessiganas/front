import { configureStore } from "@reduxjs/toolkit";
import UserSlices from "./UserSlices";
import TaskSlices from "./TaskSlices";
import PanierSlice from "../PanierSlice";
export default configureStore({reducer:{user:UserSlices,task:TaskSlices,panier:PanierSlice}})
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import envs from "../config/env";
import {LOGOUT} from '../constants/routeNames';
import {navigate} from './../navigation/SlideMenu/RootNavigator';


let headers = {
  // 'Content-Type': 'multipart/form-data',
}
const axiosInstance = axios.create({
     baseURL : envs.BACKEND_URL,
     processData: false,
     mimeType: "multipart/form-data",
     contentType: false,
});
axiosInstance.interceptors.request.use(
     async(config)=>{
     const token = await AsyncStorage.getItem("token");
     if(token){
          config.headers.Authorization = `Bearer ${token}`
     }
     return config;
     
     }, (errors)=>{
          return Promise.reject(errors)
     }
);




axiosInstance.interceptors.response.use(
     (response) =>
       new Promise((resolve, reject) => {
         resolve(response);
       }),
     (error) => {
       if (!error.response) {
         return new Promise((resolve, reject) => {
           reject(error);
         });
       }
   
       if (error.response.status === 403) {
         navigate(LOGOUT, {tokenExpired: true});
       } else {
         return new Promise((resolve, reject) => {
           reject(error);
         });
       }
     },
   );

export default axiosInstance;
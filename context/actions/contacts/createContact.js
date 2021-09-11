import {
     CREATE_CONTACT_LOADING,
     CREATE_CONTACT_FAIL,
     CREATE_CONTACT_SUCCESS
} from './../../../constants/actionTypes/index';
// import axios from '../../../helpers/axiosInstance';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default (form) => (dispatch) => (onSuccess) => {
     // const requestPayload = {
     //      country_code: form.phoneCode || '',
     //      first_name: form.firstName || '',
     //      last_name: form.lastName || '',
     //      phone_number: form.phoneNumber || '',
     //      contact_picture: form.contactPicture || null,
     //      is_favorite: form.isFavorite || false,
     // }
     const token = AsyncStorage.getItem("token");
     const formdata = new FormData();
     formdata.append('country_code', 'VN');
     formdata.append('first_name', form.firstName);
     formdata.append('last_name', form.lastName);
     formdata.append('phone_number', form.phoneNumber);
     formdata.append('contact_picture', {
          uri: form.contactPicture.path,
          name: form.contactPicture.filename || Math.floor(Math.random() * Math.floor(999999999)) + '.jpg',
          type: form.contactPicture.mime,

     });
     formdata.append('is_favorite', form.isFavorite==true ? 1 : 0); // this value is true have error from serve, not add record to db

     // dispatch({
     //      type: CREATE_CONTACT_LOADING
     // })
const headers = {
                    'Content-Type': 'multipart/form-data',
                    Accept : 'application/json',
                    Authorization : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYWRiOTUzMTM5M2I0MmVhZGU4NDU5NWYyNDc1ZmNkMmM4OWM2NzE4OTRiNDYzNjgwYWY3OGU4YTQ1NDBjYzMxOTI2YzZhYmE4ZTgyODQ2Y2YiLCJpYXQiOjE2MzEzOTMxNjEuMTA0MDc1LCJuYmYiOjE2MzEzOTMxNjEuMTA0MDgsImV4cCI6MTY2MjkyOTE2MS4wOTAzNDMsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.cHVbGUCR-NUNSp8XgZjxK2946D6DvV7YnYwo8OiQNjyXgRaEgF5MIT97tpet_Ba3i4eML1J4rbVKB2AX0oMTyZ7waNs2dABUm5i7Q6w-E134kcaIDFycsZl6EOXlrkSc_RBGZVZSWlpCmuZD7X2pQPGVwHTGYgDItn975xZF-IL5u4kAU6wdHqFPDsfXARzwthGdNXioQjgjtkcKa37cFFhzFH6-NjVcniDiwj-CW_dmyZ4bfK8Z9LyF2Bsv6o69KkNgB3fH_8Jt1ywDhr5ZzqhDv31-AsitnjYQewHdxFqfzLdlgITwbQbVPjRXV1oeLUIwDozJP9Q5uu2kptfiC8_tgHMPGddavA7wQB8g_KP6sgvUPeGgj6UZC69awSbwwW_5Fd4st6b_EHBPjYbXJmKm5WEzdwfZmvGyB5zyQ-vlGpSLrRPP8f7NkaQDBPsWfGJaS1Xb2thD4erfaTx-xiYkshXP3pL_1pKg39x27wECWiO-0WcL-P3PBDgi-93az9y3ac0PQIHrYejwC6P2mqO0LhpDjFeDxvocczdrQvahfwrqUTwpUsE3k0kiV2RCQZGBG7a-DK28Z7qODg4u1VJNociTRUzcmrzGCE4gCd64OHo7HR34DPK_LnXidbpW1crDBR0l5RJbKrimkFX7HyWlsMSa7RB4DACHZGes_EE'
               }
const data = {
     country_code : 'VN',
     first_name : form.firstName,
     last_name : form.lastName,
     phone_number : form.phoneNumber,
     is_favorite : 1
}
     // axios.post('user/contacts', formdata);
console.log("data : " ,token);
     // axios({
     //      url    : 'http://api.vanhiep.net/api/user/contacts',
     //      method : 'post',
     //      data   : data,
     //      headers : headers
     //           })
     //           .then(function (response) {
     //                   console.log("response :", response);
     //          })
     //          .catch(function (error) {
     //                   console.log("error from image :", error);
     //          })
     
     axios.post(
          'http://api.vanhiep.net/api/user/contacts', 
          formdata, 
          {headers : headers}
          )
          .then((res) => {
               console.log(res.data);
               dispatch({
                    type: CREATE_CONTACT_SUCCESS,
                    payload: res.data.contacts,
               });

               onSuccess()
          })
          .catch((err) => {
               console.log("Vao loi :" , err);
               dispatch({
                    type: CREATE_CONTACT_FAIL,
                    payload: err.response
                         ? err.response.data
                         : { error: 'Something went wrong, try again' },
               });
          });


     //  fetch('http://api.vanhiep.net/api/user/contacts', {
     //           method: 'POST',
     //           headers: {
     //                'Accept': 'application/json',
     //                'Content-Type': 'multipart/form-data',
     //           },
     //           body: requestPayload,
     //      }).then((response) => {
     //           console.log(response);
     //      })
     //      .catch((error) => {
     //           console.log(error);
     //           dispatch({
     //                type: CREATE_CONTACT_FAIL,
     //                payload: err.response ?
     //                     err.response.data :
     //                     {
     //                          error: 'Something went wrong, try again'
     //                     },
     //           });
     //      });


}
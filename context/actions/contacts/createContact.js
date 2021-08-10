import {
     CREATE_CONTACT_LOADING,
     CREATE_CONTACT_FAIL,
     CREATE_CONTACT_SUCCESS
} from './../../../constants/actionTypes/index';
// import axios from '../../../helpers/axiosInstance';
import axios from 'axios';



export default (form) => (dispatch) => (onSuccess) => {
     // const requestPayload = {
     //      country_code: form.phoneCode || '',
     //      first_name: form.firstName || '',
     //      last_name: form.lastName || '',
     //      phone_number: form.phoneNumber || '',
     //      contact_picture: form.contactPicture || null,
     //      is_favorite: form.isFavorite || false,
     // }

     const formdata = new FormData();
     formdata.append('country_code', form.phoneCode);
     formdata.append('first_name', form.firstName);
     formdata.append('last_name', form.lastName);
     formdata.append('phone_number', form.phoneNumber);
     formdata.append('contact_picture', {
          uri: form.contactPicture.path,
          name: form.contactPicture.filename || Math.floor(Math.random() * Math.floor(999999999)) + '.jpg',
          type: form.contactPicture.mime,

     });
     formdata.append('is_favorite', form.isFavorite);

     dispatch({
          type: CREATE_CONTACT_LOADING
     })
const headers = {
                    'Content-Type': 'multipart/form-data',
               }

     axios.post('user/contacts', formdata, {headers});

     // axios.post('user/contacts', requestPayload)
     //      .then((res) => {
     //           console.log(res.data);
     //           dispatch({
     //                type: CREATE_CONTACT_SUCCESS,
     //                payload: res.data.contacts,
     //           });

     //           onSuccess()
     //      })
     //      .catch((err) => {
     //           console.log(err);
     //           dispatch({
     //                type: CREATE_CONTACT_FAIL,
     //                payload: err.response
     //                     ? err.response.data
     //                     : { error: 'Something went wrong, try again' },
     //           });
     //      });



     //  fetch('http://api.vanhiep.net/api/user/contacts', {
     //           method: 'POST',
     //           headers: {
     //                // Accept: 'application/json',
     //                'Content-Type': 'multipart/form-data',
     //           },
     //           body: formdata,
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
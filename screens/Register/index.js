import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import register, { clearAuthState } from '../../context/actions/auth/register';
import RegisterComponent from './../../components/SignUp/index';
import { GlobalContext } from './../../context/Provider';
import { LOGIN } from '../../constants/routeNames';



const SignUp = ()=>{
     const [form, setForm] = useState({});
     const {navigate} = useNavigation();
     const [errors, setErrors] = useState({});
     const {authDispatch, authState: {error, loading, data}} = useContext(GlobalContext);



     useFocusEffect(
          React.useCallback(()=>{
               if(data || error){
                    clearAuthState()(authDispatch)
               }
          },[data, error])
     );
     
     const onChange=({name, value}) => {
          setForm({...form, [name] : value});
          if(value !== ''){

               if(name==='password'){
                    if(value.length < 6){
                         setErrors((prev)=>{
                              return {...prev, [name] : 'This field needs min 6 charecters'}
                         })
                    }else{
                         setErrors((prev)=>{
                              return {...prev, [name] : null}
                         })
                    }

               }else{
                    setErrors((prev)=>{
                         return {...prev, [name] : null}
                    })
               }
          }else{
               setErrors((prev)=>{
                    return {...prev, [name] : 'This field is required'}
               })
          }
     }

     const onSubmit = () => {
          
          if(!form.userName){
               setErrors((prev)=>{
                    return {...prev, userName : "Please add a username"}
               })
          }

          if(!form.firstName){
               setErrors((prev)=>{
                    return {...prev, firstName : "Please add a firstName"}
               })
          }

          if(!form.lastName){
               setErrors((prev)=>{
                    return {...prev, lastName : "Please add a lastName"}
               })
          }

          if(!form.email){
               setErrors((prev)=>{
                    return {...prev, email : "Please add a email"}
               })
          }

          if(!form.password){
               setErrors((prev)=>{
                    return {...prev, password : "Please add a password"}
               })
          }

          if(!form.phone){
               setErrors((prev)=>{
                    return {...prev, phone : "Please type phone number"}
               })
          }

          if(Object.values(form).length===6 && 
          Object.values(form).every(item=>item.trim().length > 0) && 
          Object.values(errors).every(item=>!item)
          )
          {
               register(form)(authDispatch)((response)=>{
                    navigate(LOGIN, {data: response})
               });
          }
     }

   

     return(
          <RegisterComponent 
               onSubmit={onSubmit} 
               onChange={onChange}
               form={form} 
               errors={errors} 
               error={error}
               loading={loading}
          />
     );
}

export default SignUp;
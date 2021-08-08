import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import loginUser from '../../context/actions/auth/loginUser';
import LoginComponent from './../../components/Login';
import { GlobalContext } from './../../context/Provider';

const Login = ()=>{
    const [form, setForm] = useState({});
    const [justSignedUp, setJustSignedUp] = useState(false);
    const {params} = useRoute();

    useEffect(()=>{
        if(params?.data){
            console.log(params);
            setJustSignedUp(true)
            setForm({...form, userName: params.data.user.username})
        }
    }, [params])

    const {authDispatch, authState: {error, loading, data}} = useContext(GlobalContext);

    const onSubmit=()=>{

        if(form.userName && form.password)
        {
            loginUser(form)(authDispatch)
        }
    }

    const onChange=({name, value}) => {
        setJustSignedUp(false)
        setForm({...form, [name] : value});
    }

     const [value, onChangeText] = React.useState('')
     return(
         <LoginComponent
                onSubmit={onSubmit} 
                onChange={onChange}
                form={form} 
                error={error}
                loading={loading}
                justSignedUp={justSignedUp}
         />
     );
}

export default Login;
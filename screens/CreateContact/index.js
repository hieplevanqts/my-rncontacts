import React, { useContext, useRef, useState } from 'react';
import createContact from '../../context/actions/contacts/createContact';
import CreateContactComponent from './../../components/CreateContactComponent/index';
import { GlobalContext } from './../../context/Provider';
import { CONTACT_LIST } from './../../constants/routeNames';
import { useNavigation, useRoute } from '@react-navigation/native';
import uploadImage from './../../helpers/uploadImage';


const CreateContact = ()=>{
     const [form, setForm] = useState({});
     const {navigate} = useNavigation();
     const [uploading, setIsUploading] = useState(false);
     const {params} = useRoute();
     
     const {
          contactsDispatch,
          contactsState: {
            createContact: {loading, error},
          },
        } = useContext(GlobalContext);

     const sheetRef = useRef(null);

     const [localFile, setLocalFile] = useState(null);

     

     const onChangeText=({name, value})=>{
          setForm({...form, [name]: value})
     }

     const onSubmit = () => {
      
      
          if (params?.contact) {
            if (localFile?.size) {
              setIsUploading(true);
              uploadImage(localFile)((url) => {
                setIsUploading(false);
                editContact(
                  {...form, contactPicture: url},
                  params?.contact.id,
                )(contactsDispatch)((item) => {
                  navigate(CONTACT_DETAIL, {item});
                });
              })((err) => {
                console.log('err :>> ', err);
                setIsUploading(false);
              });
            } else {
              editContact(form, params?.contact.id)(contactsDispatch)((item) => {
                navigate(CONTACT_DETAIL, {item});
              });
            }
          } else {
            if (localFile?.size) {
              setIsUploading(true);
              uploadImage(localFile)((url) => {
                console.log(url);
                setIsUploading(false);
                createContact({...form, contactPicture: url})(contactsDispatch)(
                  () => {
                    navigate(CONTACT_LIST);
                  },
                );
              })((err) => {
                setIsUploading(false);
              });
            } else {
              createContact(form)(contactsDispatch)(() => {
                navigate(CONTACT_LIST);
              });
            }
          }
        };

     const closeSheet = ()=>{
          if(sheetRef.current){
               sheetRef.current.close();
          }
     }

     const openSheet = ()=>{
          if(sheetRef.current){
               sheetRef.current.open();
          }
     }

     const toggleValueChange = () => {
          setForm({...form, "isFavorite": !form.isFavorite})
     }

     const onFileSelected = (image) => {
          closeSheet();
          setLocalFile(image);
          console.log(image);
        };

     return(
          <CreateContactComponent
               onSubmit={onSubmit}
               onChangeText={onChangeText}
               form={form}
               setForm={setForm}
               loading={loading || uploading}
               toggleValueChange={toggleValueChange}
               error={error}
               sheetRef={sheetRef}
               closeSheet={closeSheet}
               openSheet={openSheet}
               onFileSelected={onFileSelected}
               localFile={localFile}
          />
     );
}

export default CreateContact;
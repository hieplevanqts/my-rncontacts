import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import PropTypes from 'prop-types';


const AppModal = ({ 
     modalVisible,
     modalFooter,
     modalBody,
     title,
     setModalVisible,
     closeOnTouchOutside,
     }) => {
     return (
          <Modal visible={modalVisible} transparent>
               <View
                    style={styles.wrapper}
               >
                    <View style={styles.modalView}>
                         <ScrollView>
                              <View style={styles.header}>
                                   <TouchableOpacity>
                                        {/* <AntDesign
                                             name="closecircleo"
                                             size={24} color="black"
                                             onPress={() => {
                                                  setModalVisible(false);
                                             }}
                                        /> */}
                                   </TouchableOpacity>

                                   <Text style={styles.title}>{title || 'RNContacts'}</Text>
                                   <View />
                                   <View />
                                   <View />
                                   <View />
                                   <View />
                                   <View />
                                  
                              </View>
                              <View style={styles.footerSeparator} />
                                   <View style={styles.body}>{modalBody}</View>
                                   {modalFooter}
                                   {!modalFooter && (
                                        <View>
                                             <>
                                                  <View style={styles.footerSeparator} />
                                                  <View style={styles.footerItems}>
                                                       <View style={styles.footer}>
                                                            <Text style={styles.footerText}>Privacy Policy</Text>
                                                            <View style={styles.termsView} />
                                                            <Text style={styles.footerText}>Terms of Service</Text>
                                                       </View>
                                                  </View>
                                             </>
                                        </View>
                                   )}
                         </ScrollView>
                    </View>
               </View>
               <Text />
          </Modal>
     );
}

AppModal.propTypes = {
     closeOnTouchOutside: PropTypes.bool,
   };

AppModal.defaultProps = {
     closeOnTouchOutside: true,
};

export default AppModal;

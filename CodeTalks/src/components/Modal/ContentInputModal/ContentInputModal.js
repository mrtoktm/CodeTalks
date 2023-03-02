import React from "react";
import { View, TextInput, Alert } from "react-native";
import Button from "../../Button";
import Modal from "react-native-modal";

import styles from './ContentInputModal.style';

const ContentInputModal = ({button, placeholder, visible, onClose, onSend}) => {
    const [text, setText] = React.useState(null);

    const handleSend = () => {
        if (!text) {
            Alert.alert('Lütfen Oda İsmi Giriniz..');
            return
        } else {
            onSend(text)
            setText(null)
        }

    }
   
    return(
        <Modal style={styles.modal}
        isVisible={visible}
        swipeDirection= 'down'
        onSwipeComplete={onClose} 
        onBackdropPress={onClose}
        onBackButtonPress={onClose}>
        <View style={styles.container}>
            <View style={styles.input_container}>
            <TextInput 
            placeholder={placeholder}
            onChangeText={setText}
            multiline/>
            </View>
            <Button theme="primary" text={button} onPress={handleSend}/>
        </View>
        </Modal>
    )
};

export default ContentInputModal;
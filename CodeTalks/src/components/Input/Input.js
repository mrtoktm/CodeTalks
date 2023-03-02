import React from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './Input.style';

const Input = ({placeholder, onType, icon, values, inSecure}) => {
    return(
        <View style={styles.container}>
            <TextInput
            autoCapitalize="none"
            style={styles.input}
            value={values}
            onChangeText={onType}
            placeholder={placeholder}
            secureTextEntry={inSecure}
            placeholderTextColor="white"/>
            <Icon style={styles.icon} name={icon} size={25} color="white"/>
        </View>
    )
}

export default Input;
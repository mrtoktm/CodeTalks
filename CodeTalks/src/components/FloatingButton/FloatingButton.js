import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './FloatingButton.style';

const FloatingButton = ({ onPress, icon}) => {
    return(
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Icon name={icon} size={35} color="white"/>
            </TouchableOpacity>
    )
};

export default FloatingButton;
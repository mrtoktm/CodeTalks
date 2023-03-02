import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from './Button.style';

const Button = ({text, theme, onPress}) => {
    return(
        <TouchableOpacity style={styles[theme].container} onPress={onPress}>
            <Text style={styles[theme].title}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;
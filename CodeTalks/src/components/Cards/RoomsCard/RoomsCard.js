import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from './RoomsCard.style';

const RoomsCard = ({name, onPress}) => {
    return(
            <TouchableOpacity onPress={onPress}>
                <View style={styles.container}>
                <Text style={styles.title}>{name}</Text>
                </View>
            </TouchableOpacity>
    )
}

export default RoomsCard;
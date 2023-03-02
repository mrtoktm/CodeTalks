import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width/2.2,
        height: Dimensions.get('window').height/4,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#FF7518',
        margin: 10,
        justifyContent: 'center',
    },
    title: {
        color: '#FF7518',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
});
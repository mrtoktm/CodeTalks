import { StyleSheet } from "react-native";

export default {
    primary: StyleSheet.create({
        container: {
            padding: 8,
            margin: 10,
            borderRadius: 10,
            alignItems: 'center',
            backgroundColor: '#FFAA33',
            borderWidth: 2,
            borderColor: "white",
        },
        title: {
            marginLeft: 5,
            fontWeight: 'bold',
            fontSize: 17,
            color: 'white',
        },
    }),

    secondary: StyleSheet.create({
        container: {
            padding: 8,
            margin: 10,
            borderRadius: 10,
            alignItems: 'center',
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: '#FFAA33',
        },
        title: {
            fontWeight: 'bold',
            fontSize: 17,
            color: '#FFAA33',
        },
    }),
};
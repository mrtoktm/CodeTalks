import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Button from "../../../components/Button/Button";
import Input from '../../../components/Input';
import auth from '@react-native-firebase/auth';
import styles from './Login.style';
import { showMessage } from "react-native-flash-message";
import { Formik } from "formik";

const initialFormValues = {
    usermail: '',
    password: '',
}

const Login = ({ navigation }) => {

    async function handleFormSubmit(formValues) {
        try {
            await auth().signInWithEmailAndPassword(
                formValues.usermail,
                formValues.password
            );
        } catch (error) {
            showMessage({
                message: 'Hatalı giriş',
                type: 'danger',
            });
        }
    }

    function handleSignUp() {
        navigation.navigate('SignPage');
    }
return (
    <SafeAreaView style={styles.container}>
        <View style={styles.top_container}>
            <View style={styles.title_container}>
                <Text style={styles.title}>CodeTalks</Text>
                <Text style={styles.text}>Talk everything..</Text>
            </View>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <View style={styles.input_container}>
                            <Input
                                onType={handleChange('usermail')}
                                placeholder="e-postanızı giriniz.."
                                icon="account-circle" />
                            <Input
                                onType={handleChange('password')}
                                placeholder="şifrenizi giriniz.."
                                icon="key" 
                                inSecure/>
                        </View>
                        <View style={styles.button_container}>
                            <Button
                                text="Giriş Yap" theme="primary" 
                                onPress={handleSubmit}/>
                            <Button
                                text="Kayıt Ol" theme="secondary"
                                onPress={handleSignUp}/>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    </SafeAreaView>
    )
}

export default Login;
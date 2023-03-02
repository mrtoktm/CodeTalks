import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Button from "../../../components/Button/Button";
import Input from '../../../components/Input';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import { Formik } from "formik";
import styles from './Sign.style';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign = ({ navigation }) => {

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor',
        type: 'warning',
        color: 'white',
        backgroundColor: '#FFAA33',
      });
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      )
      showMessage({
        message: 'Kullanıcı oluşturuldu',
        type: 'success',
        color: 'white',
      });
      navigation.navigate('LoginPage');
    } catch (error) {

    }
  }
  function handleBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top_container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>We Are Waiting</Text>
          <Text style={styles.text}>To Join Us.. :)</Text>
        </View>
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <>
              <View style={styles.input_container}>
                <Input 
                placeholder="e-postanızı giriniz.." 
                icon="account-circle" 
                onType={handleChange('usermail')}
                values={values.usermail}/>
                <Input 
                placeholder="şifrenizi giriniz.." 
                icon="key" 
                onType={handleChange('password')}
                values={values.password}
                inSecure/>
                <Input 
                placeholder="şifrenizi tekrar giriniz.." 
                icon="key"
                onType={handleChange('repassword')}
                values={values.repassword}
                inSecure/>
              </View>
              <View style={styles.button_container}>
                <Button 
                text="Kayıt Ol" 
                theme="secondary" 
                onPress={handleSubmit} />
                <Button 
                text="Geri" theme="primary" 
                onPress={handleBack} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  )
}

export default Sign;
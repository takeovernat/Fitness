import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { AppScreens, AuthStackParamList } from '../../../navigators/AuthFlowNavigator';
import { StackNavigationProp } from '@react-navigation/stack';


type LoginScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Login>;

interface LoginScreenProps {
    navigation: LoginScreenNavigationProps;
}

const styles = StyleSheet.create({
    btnSignupContainer: {
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    textInput: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 10,
        padding: 18,
        width: '100%'
    },
    textInputContainer: {
        width: '100%'
    },
    txtHello: {
        fontSize: 30
    },
    box:{
      width: 300,
      height: 150,
      marginTop:10 ,
      backgroundColor: 'white',
      width: '105%'
    },
    button: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#3385',
        marginTop: 20,
        padding: 5,
        width: '30%',
        justifyContent: 'center',
        alignSelf: 'center'

    },

});

const LoginScreen: React.FunctionComponent<LoginScreenProps> = (props) => {
    const { navigation } = props;
    const [username, setUsername] = useState<string>('');
    const [pass, setpass] = useState<string>('');
    logged = false;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.txtHello}>Login</Text>
            <View style={styles.box}>

            <View style={styles.textInputContainer}>
                <TextInput
                    value={username}
                    placeholder="username"
                    style={styles.textInput}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput placeholder="password" secureTextEntry={true} style={styles.textInput} />
            </View>
            <View style={styles.button}>
            <Button
            title='Login'
            onPress={() =>{
              if(logged === false){alert("invalid log-in");}
              else{alert("you good!");
              navigation.navigate(AppScreens.Home)
            }
          }}
            />
            </View>
            </View>
            <View style={styles.btnSignupContainer}>
                <Text>Or</Text>
                <Button title="Signup" onPress={() => navigation.navigate(AppScreens.Signup, { username })} />
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

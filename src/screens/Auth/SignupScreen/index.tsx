import React,  { useState } from 'react';
import { ScrollView,SafeAreaView, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { AppScreens, AuthStackParamList } from '../../../navigators/AuthFlowNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type SignupScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Signup>;

export type SignupParams = {
    username: string;
};

interface SignupScreenProps {
    route: { params: SignupParams };
    navigation: SignupScreenNavigationProps;
}

const styles = StyleSheet.create({
    btnLoginContainer: {
      marginTop: 290 ,
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    txtSignupScreen: {
        fontSize: 30
    },
    txtSignupScreenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtUsername: {
        fontSize: 25,
        color: 'grey'
    },
    textInputContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 100,
    },
    textInput: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 10,
        padding: 18,
        width: '100%'
    },
});

const SignupScreen: React.FunctionComponent<SignupScreenProps> = (props) => {
    const { navigation, route } = props;
    const { params } = route;
    const [username, setUsername] = useState<string>('');
    const [pass, setpass] = useState<string>('');
    const [email, setemail] = useState<string>('');

    logged = false;

    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
            <View style={styles.textInputContainer}>
            <TextInput
                value={username}
                placeholder="username"
                style={styles.textInput}
                onChangeText={(text) => setUsername(text)
                }
            />
            <TextInput placeholder="password" secureTextEntry={true} style={styles.textInput}
            value={pass}
            onChangeText={(word) => setpass(word)
            }
            />
              <TextInput placeholder="comfirm password" secureTextEntry={true} style={styles.textInput}
              value={email}
              onChangeText={(em) => setemail(em)}
              />

                <TextInput placeholder="Email" style={styles.textInput} />
            <Button
            title='Signup'
            onPress={() =>{
              if(logged === false){alert("invalid log-in");}
              else{alert("you good!");
              navigation.navigate(AppScreens.Home)
            }
          }}
            />
                <Text style={styles.txtUsername}>{pass}</Text>
            </View>
            <View style={styles.btnLoginContainer}>
                <Text>have an account?</Text>
                <Button title="Login" onPress={() => navigation.pop()} />
            </View>
        </SafeAreaView>
        </ScrollView>
    );
};

export default SignupScreen;

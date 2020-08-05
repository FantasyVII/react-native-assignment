import React, { useState } from 'react';
import { StyleSheet, View, Button, Dimensions, SafeAreaView } from 'react-native';
import CustomInputfield from '../Components/CustomInputfield'
import CustomCheckBox from '../Components/CustomCheckBox'
import DropDown from '../Components/DropDown'
import CustomLoader from '../Components/CustomLoader'
import KeyboardAvoidingScrollView from '../Components/KeyboardAvoidingScrollView'
import { isEmailValidRegex, isAgeValidRegex } from '../Regex'
import { api } from '../API/API'

const { width, height } = Dimensions.get('window')

const DROP_DOWN_DATA = [
    {
        id: 1,
        name: 'Oman'
    },
    {
        id: 2,
        name: 'UAE'
    },
    {
        id: 3,
        name: 'USA'
    }
]

export default function Form(props) {
    const [showLoader, setIsLoaderEnabled] = useState(false);

    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [comment, setComment] = useState('');

    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isAgeValid, setIsAgeValid] = useState(false);
    const [isCommentValid, setIsCommentValid] = useState(false);

    const [showEmailErrorMessage, toggleShowEmailErrorMessage] = useState(false);
    const [showAgeErrorMessage, toggleShowAgeErrorMessage] = useState(false);
    const [showCommentErrorMessage, toggleShowCommentErrorMessage] = useState(false);

    const validateAllInfo = () => {
        let isCommentValid = comment === '' ? false : true;
        setIsCommentValid(isCommentValid)

        toggleShowEmailErrorMessage(!isEmailValid)
        toggleShowAgeErrorMessage(!isAgeValid)
        toggleShowCommentErrorMessage(!isCommentValid)

        if (isEmailValid && isAgeValid && isCommentValid) {
            setIsLoaderEnabled(true)
            api.post('', {
                title: email,
                body: age,
                userId: 1
            }).then(res => {
                console.log(res.data)
                setIsLoaderEnabled(false)
                props.navigation.navigate('Listing')
            })
        }
    }

    return (
        <KeyboardAvoidingScrollView>
            <SafeAreaView style={styles.main}>
                <View style={styles.contentView}>
                    <View style={styles.mainInputFieldView}>
                        <View style={styles.leftInputFieldView}>
                            <CustomInputfield
                                placeholder={'Email'}
                                showErrorMessage={showEmailErrorMessage === true ? true : email === '' ? false : !isEmailValid}
                                errorMessage={'Invalid Email'}
                                onChangeText={(email, isEmailValid) => {
                                    isEmailValid = isEmailValidRegex(email)
                                    setEmail(email)
                                    setIsEmailValid(isEmailValid)
                                    toggleShowEmailErrorMessage(!isEmailValid)
                                }}
                            />
                        </View>

                        <View style={styles.rightInputFieldView}>
                            <CustomInputfield
                                placeholder={'Age'}
                                showErrorMessage={showAgeErrorMessage === true ? true : age === '' ? false : !isAgeValid}
                                errorMessage={'Invalid Age'}
                                onChangeText={(age, isAgeValid) => {
                                    isAgeValid = isAgeValidRegex(age)
                                    setAge(age)
                                    setIsAgeValid(isAgeValid)
                                    toggleShowAgeErrorMessage(!isAgeValid)
                                }}
                            />
                        </View>
                    </View>

                    <View style={styles.itemView}>
                        <CustomCheckBox title={'Subscribe to our newsletter?'} value={(isChecked) => console.log(isChecked)} />
                    </View>

                    <View style={styles.itemView}>
                        <DropDown title={'Countries'} data={DROP_DOWN_DATA} />
                    </View>

                    <View style={styles.itemView}>
                        <CustomInputfield
                            placeholder={'Comment Text Area'}
                            showErrorMessage={showCommentErrorMessage}
                            errorMessage={'Cannot be empty'}
                            multiline={true}
                            onChangeText={(comment) => {
                                setComment(comment)
                                setIsCommentValid(comment === '' ? true : false)
                                toggleShowCommentErrorMessage(isCommentValid)
                            }}
                        />
                    </View>

                    <View style={styles.itemView}>
                        <Button title={'Submit'} onPress={validateAllInfo} />
                        <CustomLoader show={showLoader} />
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingScrollView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '75%'
    },
    mainInputFieldView: {
        flexDirection: 'row'
    },
    leftInputFieldView: {
        flex: 1,
        marginRight: width * 0.1
    },
    rightInputFieldView: {
        flex: 1
    },
    itemView: {
        width: '100%',
        marginTop: height * 0.05
    }
});
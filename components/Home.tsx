import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import firebase from 'firebase/app'
import f1Logo from '../assets/f1Logo.png'

const Home = ({ navigation }: any) => {
    require('@firebase/database');
    // const grandPrixDate = async () => {
    //     const data  = await firebase.database().ref('F1/0/secondPracticeDate').get();
    //     console.log(new Date(data.val()).toString())
    // }
    // grandPrixDate();



    return (
        <TouchableOpacity onPress={() => navigation.navigate('MotorsportInformation')}>
            <View style={styles.container} >
                <View style={styles.imageContainer}>
                    <Image source={f1Logo} style={styles.logo}></Image>
                </View>
                <View style={styles.textContainer}>
                    <Text style={{ fontWeight: "bold", fontSize: 17 }}>Formula 1</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: '#e4e3e1',
        borderWidth: 1,
        borderColor: "#949494",
        flexDirection: "row",
        borderTopWidth: 0
    },
    imageContainer: {
        paddingLeft: 10,
        width: 80,
        height: 80
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 80,
        height: 80
    }
})

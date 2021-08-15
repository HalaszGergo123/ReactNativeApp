import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import firebase from 'firebase/app'
import { checkIfIsConnectedToNetwork } from './helpers/NetworkStateAlert'

checkIfIsConnectedToNetwork();

type Data = {
    id: string,
    raceName: string,
    firstPracticeDate: string,
    secondPracticeDate: string,
    thirdPracticeDate: string,
    qualifyingDate: string,
    raceDate: string
}

const MotorsportInformation = ({ navigation }: any) => {

    const [data, setData] = useState<Data[]>([])

    const extractDate = (date: string) => {
        const dateExtracted = new Date(date).toString().split(' ');
        return dateExtracted;
    }

    useEffect(() => {
        require('@firebase/database');
        const fetchData = async () => {
            const data = await firebase.database().ref('F1').get();
            setData(data.val())
        }
        fetchData();
    }, [])

    useEffect(() => {
        const date = new Date();
        let dateToFirst;
        if (data !== []) {
            for (let i = 0; i < data.length; i++) {
                const firstPracticeDate = new Date(data[i].firstPracticeDate)
                if (firstPracticeDate > date) {
                    dateToFirst = { ...data[i] };
                    data.slice(i, 2)
                    const raceDate = extractDate(dateToFirst.raceDate);
                    dateToFirst.raceName = "Next Race - " + dateToFirst.raceName + " - " + raceDate[1] + ' ' + raceDate[2];
                    data.unshift(dateToFirst);

                    break;
                }
            }
        }
    }, [data])

    const renderItem = ({ item }: any) => {
        return <TouchableOpacity onPress={() => navigation.navigate('RaceInformation', {
            raceData: item
        })}>
            <View style={styles.container} >
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>{item.raceName}</Text>
            </View>
        </TouchableOpacity>
    }

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        >
        </FlatList>
    )
}

export default MotorsportInformation

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: '#e4e3e1',
        borderWidth: 1,
        borderColor: "#949494",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0
    },
})

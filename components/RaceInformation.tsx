import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { checkIfIsConnectedToNetwork } from './helpers/NetworkStateAlert'

checkIfIsConnectedToNetwork();

type Data = {
    id: string,
    raceName: string,
    firstPracticeDate: string,
    secondPracticeDate: string,
    thirdPracticeDate?: string,
    qualifyingDate: string,
    sprintQualifyingDate?: string,
    raceDate: string
}

const RaceInformation = ({ route }: any) => {
    const { raceData }: { raceData: Data } = route.params;

    const createDateFormat = (date: string) => {
        const data = new Date(date).toString().split(' ')

        data.pop()
        data.pop()


        return data.toString().replace(',', ' ').replace(',', ' ').replace(',', ' ').replace(',', ' ').slice(0, -3);
    }

    if (raceData.thirdPracticeDate) {
        return (
            <View style={styles.root}>
                <View style={styles.informationContainer}>
                    <Entypo name="calendar" size={60} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>Free Practice 1</Text>
                        <Text style={styles.descriptionText}>{createDateFormat(raceData.firstPracticeDate)}</Text>
                    </View>
                </View>
                <View style={styles.informationContainer}>
                    <Entypo name="calendar" size={60} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>Free Practice 2</Text>
                        <Text style={styles.descriptionText}>{createDateFormat(raceData.secondPracticeDate)}</Text>
                    </View>
                </View>
                <View style={styles.informationContainer}>
                    <Entypo name="calendar" size={60} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>Free Practice 3</Text>
                        <Text style={styles.descriptionText}>{createDateFormat(raceData.thirdPracticeDate)}</Text>
                    </View>
                </View>
                <View style={styles.informationContainer}>
                    <Entypo name="calendar" size={60} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>Qualifying</Text>
                        <Text style={styles.descriptionText}>{createDateFormat(raceData.qualifyingDate)}</Text>
                    </View>
                </View>
                <View style={styles.informationContainer}>
                    <Entypo name="calendar" size={60} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>Race</Text>
                        <Text style={styles.descriptionText}>{createDateFormat(raceData.raceDate)}</Text>
                    </View>
                </View>
            </View>
        )
    } else if (raceData.sprintQualifyingDate) {
        return (
            <View style={styles.root}>
                <View style={styles.informationContainer}>
                    <Entypo name="calendar" size={60} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>Free Practice 1</Text>
                        <Text style={styles.descriptionText}>{createDateFormat(raceData.firstPracticeDate)}</Text>
                    </View>
                </View>
                <View style={styles.informationContainer}>
                    <Entypo name="calendar" size={60} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>Qualifying</Text>
                        <Text style={styles.descriptionText}>{createDateFormat(raceData.qualifyingDate)}</Text>
                    </View>
                </View>
                <View style={styles.informationContainer}>
                    <Entypo name="calendar" size={60} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>Free Practice 2</Text>
                        <Text style={styles.descriptionText}>{createDateFormat(raceData.secondPracticeDate)}</Text>
                    </View>
                </View>
                <View style={styles.informationContainer}>
                    <Entypo name="calendar" size={60} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>Sprint Qualifying</Text>
                        <Text style={styles.descriptionText}>{createDateFormat(raceData.sprintQualifyingDate)}</Text>
                    </View>
                </View>
                <View style={styles.informationContainer}>
                    <Entypo name="calendar" size={60} color="black" />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>Race</Text>
                        <Text style={styles.descriptionText}>{createDateFormat(raceData.raceDate)}</Text>
                    </View>
                </View>
            </View>
        )
    }

}

export default RaceInformation

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 20,
        paddingTop: 10
    },
    informationContainer: {
        flexDirection: "row",
        paddingTop: 20
    },
    textContainer: {
        marginTop: 9,
        marginLeft: 10
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold"
    },
    descriptionText: {
        fontSize: 16,
        paddingTop: 5
    }
})

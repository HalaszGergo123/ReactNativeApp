import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'

const DATA = [{ id: '1', title: "f1" }, { id: '2', title: "asd" }, { id: '2', title: "asd" }, { id: '2', title: "asd" }, { id: '2', title: "asd" }, { id: '2', title: "asd" }, { id: '2', title: "asd" }, { id: '2', title: "asd" }, { id: '2', title: "asd" }, { id: '2', title: "asd" }, { id: '2', title: "asd" }, { id: '2', title: "asd" }]

const MotorsportInformation = ({ navigation }: any) => {

    const renderItem = ({ item }: any) => {
        return <TouchableOpacity onPress={() => navigation.navigate('MotorsportInformation')}>
            <View style={styles.container} >
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    }

    return (
        <FlatList
            data={DATA}
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

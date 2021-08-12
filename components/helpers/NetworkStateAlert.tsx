import { Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export const checkIfIsConnectedToNetwork = async () => {
    NetInfo.fetch().then(state => {
        if (!state.isConnected) {
            Alert.alert("",
                "Please connect to the internet to proceed further. Click on the \"Connected\" button if you did connect to the internet.",
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    { text: 'Connected' }
                ],
                { cancelable: false },
            )
        }
    });
}

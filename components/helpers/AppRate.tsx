import { Alert, Linking } from "react-native";

const GOOGLE_PACKAGE_NAME = 'com.fissher.wowtc';

export const showAppRateDialog = () => {
    Alert.alert(
        'Rate us',
        'Would you like to share your review with us? This will help and motivate us a lot.',
        [
            { text: 'Sure', onPress: () => openStore() },
            {
                text: 'No Thanks!',
                onPress: () => console.log('No Thanks Pressed'),
                style: 'cancel',
            },
        ],
        { cancelable: false },
    );
    const openStore = () => {
        Linking.openURL(
            `market://details?id=${GOOGLE_PACKAGE_NAME}`,
        ).catch(
            (err) => alert('Please check for Google Play Store')
        );
    }
}
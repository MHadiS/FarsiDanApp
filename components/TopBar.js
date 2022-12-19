import { StyleSheet, Text, View } from 'react-native';


export default function TopBar(props) {
    return (
        <View style={styles.topBar}>
            <Text style={styles.title}>فارسی دان</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        backgroundColor: '#1D81D9',
        paddingTop: 30,
        paddingBottom: 15,
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'right',
    },
})
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';


export default function NavButton(props) {
    const styles = StyleSheet.create({
        buttons: {
            flex: 1,
            backgroundColor: '#1D81D9',
            borderColor: '#092844',
            borderLeftWidth: props.borderWidth,
            justifyContent: 'center',
            alignItems: 'center'
        },
    })
    return (
        <TouchableOpacity style={styles.buttons} onPress={() => console.log(props.screen)}>
            <Icon name={props.iconName} size='35' color='white'></Icon>
        </TouchableOpacity>
    );
}


export default function NavBar() {
    return (
        <View style={styles.navbar}>
            <NavButton iconName='book' screen='syllables'/>
            <NavButton borderWidth='2' iconName='question'/>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        height: 55
    }
});
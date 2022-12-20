import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from '../Style';


var navigationCopy;


export function Question(props) {
    return (
        <TouchableOpacity style={styles.questionContainer} onPress={() => navigationCopy.navigate('questionSolving', props.data)}>
            <Text style={styles.questionText}>{props.data['title']}</Text>
        </TouchableOpacity>
    );
}


export default function QuestionsListScreen({ navigation }) {
    navigationCopy = navigation;
    let data = {
        title: 'سوال املا',
        text: 'کدام کلمه از نظر املایی صحیح است؟',
        option_1: 'سبقت',
        option_2: 'خوز',
        option_3: 'اسطراق سمع',
        option_4: 'مهاوراتی',
        correct_option: 1
    };

    return (
        <View style={styles.questionsScreenContainer}>

            <ScrollView contentContainerStyle={styles.questionsContainer}>
                <Question data={data}/>
            </ScrollView>

            <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate("filters")}>
                <Icon name='up' color='#D3E4F3' size={20} />
                <Text style={styles.filterText}>فیلتر</Text>
            </TouchableOpacity>
        </View>
    );
}

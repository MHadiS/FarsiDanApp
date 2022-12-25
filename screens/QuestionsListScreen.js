import { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from '../Style';


export var navigationCopy, setDataCopy;


function make_url(url, queries={}) {
    Object.keys(queries).map(item => {
        url += '&' + item.toString() + '=' + queries[item];
    });
    return url;
}


export function updateQuestionsList(filters={}) {
    let question_type = filters['question_type']
    let difficulty = filters['difficulty']
    question_type === undefined || question_type === 'all' ? delete filters['question_type']: question_type
    difficulty === undefined || difficulty === 'all' ? delete filters['difficulty']: difficulty
    const URL = make_url('http://193.141.64.229:8000/q/get_q?format=json&accepted=True', filters)
    // console.log(URL);

    fetch(URL, {method: 'GET',})
    .then(response => response.json())
    .then(data => {
        setDataCopy(data)
        // console.log('Response: ', data);
        // console.log('Response Type: ', typeof(data));
    })
    .catch(error => console.log('Error'));
}


function Question(props) {
    return (
        <TouchableOpacity style={styles.questionContainer} onPress={() => navigationCopy.navigate('questionSolving', props.data)}>
            <Text style={styles.questionText}>{props.data.title}</Text>
        </TouchableOpacity>
    );
}


export default function QuestionsListScreen({ navigation }) {
    useEffect(updateQuestionsList, [])

    const [data, setData] = useState([]);

    navigationCopy = navigation;
    setDataCopy = setData;


    return (
        <View style={styles.questionsScreenContainer}>

            <ScrollView contentContainerStyle={styles.questionsContainer}>
                {
                    data.map(item => <Question key={item.id} data={item} />)
                }
            </ScrollView>

            <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate("filters")}>
                <Icon name='up' color='#D3E4F3' size={20} />
                <Text style={styles.filterText}>فیلتر</Text>
            </TouchableOpacity>
        </View>
    );
}

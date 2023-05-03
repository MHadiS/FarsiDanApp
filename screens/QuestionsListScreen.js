import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
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
    let subjectNO = filters['subjectNO']
    question_type === undefined || question_type === 'all' ? delete filters['question_type']: question_type
    difficulty === undefined || difficulty === 'all' ? delete filters['difficulty']: difficulty
    subjectNO === undefined || subjectNO === 'all' ? delete filters['chapter_no']: subjectNO
    console.log("subjectNO", subjectNO);
    const URL = make_url('http://5.182.44.132:80/q/get_q?format=json&accepted=True', filters)
    console.log(URL);

    fetch(URL, {method: 'GET',})
    .then(response => response.json())
    .then(data => {
        setDataCopy(data)
        console.log('Response: ', data);
    })
    .catch(error => console.log('Error'));
}


function summarize(text, summarization_rate) {
    let summarized_text = text.slice(0, summarization_rate)
    if (summarized_text == text) {
        return summarized_text
    }
    else {
        return summarized_text + "..."
    }
}

function difficulty_decoder(difficulty, from_tizhooshan_exam) {
    const converter = {
        'easy': 'آسان',
        'normal': 'متوسط',
        'hard': 'سخت'
    }

    if (from_tizhooshan_exam) {
        return 'تیزهوشانی'
    }
    else {
        return converter[difficulty]
    }
}

function question_type_decoder(question_type) {
    const converter = {
        'diction': 'املا',
        'vocabulary': 'معنی کلمات',
        'history': 'تاریخ',
        'books': 'آثار'
    }
    return converter[question_type]
}

function Question(props) {
    let question = props.data[props.question_index];
    return (
        <TouchableOpacity style={styles.questionContainer} onPress={() => navigationCopy.navigate('questionSolving', {questions: props.data, question_index: props.question_index})}>
            <Text style={styles.questionTitle}>{summarize(question.text, 35)}</Text>
            <View style={styles.questionInfoContainer}>
                <Text style={styles.questionInfoText}>{"سختی : " + difficulty_decoder(question.difficulty, question.from_tizhooshan_exam)}</Text>
                <Text style={styles.questionInfoText}>{"نوع : " + question_type_decoder(question.question_type)}</Text>
                <Text style={styles.questionInfoText}>{"درس : " + String(question.chapter_no)}</Text>
            </View>
        </TouchableOpacity>
    );
}


export default function QuestionsListScreen({ route }) {
    useEffect(updateQuestionsList, [])
    console.log(route);

    const navigation = useNavigation()
    const [data, setData] = useState([]);

    navigationCopy = navigation;
    setDataCopy = setData;

    return (
        <View style={styles.questionsScreenContainer}>

            <ScrollView contentContainerStyle={styles.questionsContainer}>
                {
                    data.map(item => <Question data={data} key={item.id} question_index={data.indexOf(item)}/>)
                }
            </ScrollView>
        </View>
    );
}

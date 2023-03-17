import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { styles } from "../Style";


export function Option(props) {
    const white = '#D3E4F3';
    const red = '#EF6F6C';
    const green = '#56E39F';
    let [bgColor, setBgColor] = useState(white);
    return (
        <TouchableOpacity
          style={[styles.optionContainer, {backgroundColor: bgColor}]}
          onPress={() => {props.isCorrect ? setBgColor(green) : setBgColor(red)}}>
            <Text style={styles.optionText}>{props.text}</Text>
        </TouchableOpacity>
    );
}

function make_options_data(question) {
    let options_data = [
        {text: question.option_1, isCorrect: false},
        {text: question.option_2, isCorrect: false},
        {text: question.option_3, isCorrect: false},
        {text: question.option_4, isCorrect: false},
    ];
    
    options_data[question.correct_option - 1]['isCorrect'] = true
    
    return options_data
}

function isNextButtonDisabled(question_index, questions_length) {
    if (question_index == questions_length - 1) {
        return true
    }
    return false
}

function isPreviousButtonDisabled(question_index) {
    if (question_index == 0) {
        return true
    }
    return false
}


export default function QuestionSolvingScreen({ route }) {
    const navigation = useNavigation()
    const questions = route.params.questions
    const question_index = route.params.question_index
    const question = questions[question_index];
    const options = make_options_data(question)

    return (
        <View style={[styles.questionsScreenContainer]}>
            <View style={styles.questionTitleContainer}>
                <Text style={styles.questionTitleText}>{question['text']}</Text>
            </View>
            
                <View style={styles.optionsContainer}>
                    <View style={styles.optionsRow}>
                        <Option {...options[0]}/>
                        <Option {...options[1]}/>
                    <View/>
                    
                    <View style={styles.optionsRow}>
                        <Option {...options[2]}/>
                        <Option {...options[3]}/>
                    </View>
                </View>
            </View>    

            <View style={styles.controllerContainer}>
                <TouchableOpacity
                 style={styles.controller}
                 disabled={isNextButtonDisabled(question_index, questions.length)}
                 onPress={ () => navigation.reset({
                    routes:[{
                        name: "questionSolving",
                        params: {questions: questions, question_index: question_index + 1},
                    }]
                    })}>
                    <Icon name="caret-square-right" size={25} color="#fff"/>
                    <Text style={styles.controllerText}>سوال بعدی</Text>
                </TouchableOpacity>    

                <TouchableOpacity
                 style={styles.controller}
                 onPress={() => {
                    navigation.reset(
                        {routes: [{name: "questionSolving", params: {questions: questions, question_index: question_index}}]}
                        )
                    navigation.navigate("questions")
                    }}>
                    <Icon name="home" size={25} color="#fff"/>
                    <Text style={styles.controllerText}>صفحه اصلی</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style={styles.controller}
                 disabled={isPreviousButtonDisabled(question_index)}
                 onPress={ () => navigation.reset({
                    routes: [{
                        name: "questionSolving",
                        params: {questions: questions, question_index: question_index - 1},
                    }]
                    })}>
                    <Icon name="caret-square-left" size={25} color="#fff"/>
                    <Text style={styles.controllerText}>سوال قبلی</Text>
                </TouchableOpacity>
            </View> 
        </View>
    );
}

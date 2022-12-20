import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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


export default function QuestionSolvingScreen({ route }) {
    let params = route.params;
    let options = [
        {text: params.option_1, isCorrect: false},
        {text: params.option_2, isCorrect: false},
        {text: params.option_3, isCorrect: false},
        {text: params.option_4, isCorrect: false},
    ];
    
    options[params.correct_option - 1]['isCorrect'] = true

    return (
        <View style={styles.questionsScreenContainer}>
            <View style={styles.questionTitleContainer}>
                <Text style={styles.questionTitleText}>{params['text']}</Text>
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
        </View>
    );
}
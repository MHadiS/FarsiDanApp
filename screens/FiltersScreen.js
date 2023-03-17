import { Text, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { styles } from '../Style';
import { useEffect, useState } from 'react';
import { updateQuestionsList } from './QuestionsListScreen';
import { useNavigation } from '@react-navigation/native';

export default function FiltersScreen({ route }) {
    console.log(route);
    const navigation = useNavigation()
    const [fromTizhooshanExam, setFromTizhooshanExam] = useState(false);
    const [subjectNO, setSubjectNO] = useState('all');
    const [difficulty, setDifficulty] = useState('all');
    const [questionsType, setQuestionsType] = useState('all');


    useEffect(() => {updateQuestionsList({
            question_type: questionsType === null ? 'all':questionsType.id,
            from_tizhooshan_exam: fromTizhooshanExam,
            difficulty: difficulty === null ? 'all':difficulty.id,
            chapter_no: subjectNO === null ? 'all':subjectNO.id
        })}
        ,[fromTizhooshanExam, subjectNO, difficulty, questionsType]);

    return (
        <View style={styles.filtersScreenContainer}>
            <View style={styles.filterContainer}>
                <Text style={[styles.label, {marginLeft: 0}]}>سوالات تیزهوشانی</Text>
                <BouncyCheckbox 
                  fillColor='#1D81D9' 
                  onPress={value => setFromTizhooshanExam(value)}
                />
            </View>

            <View style={styles.filterContainer}>
                <Text style={[styles.label, {marginTop: 8}]}>درس</Text>
                  <AutocompleteDropdown 
                    dataSet={[
                      {id: 'all', title: 'همه'},
                      {id: 1, title: 'درس اول'},
                      {id: 2, title: 'درس دوم'},
                      {id: 3, title: 'درس سوم'},
                      {id: 4, title: 'درس چهارم'},
                      {id: 6, title: 'درس ششم'},
                      {id: 7, title: 'درس هفتم'},
                      {id: 8, title: 'درس هشتم'},
                      {id: 9, title: 'درس نهم'},
                      {id: 10, title: 'درس دهم'},
                      {id: 11, title: 'درس یازدهم'},
                      {id: 12, title: 'درس دوازدهم'},
                      {id: 13, title: 'درس سیزدهم'},
                      {id: 14, title: 'درس چهاردهم'},
                      {id: 16, title: 'درس شانزدهم'},
                      {id: 17, title: 'درس هفدهم'},
                  ]}
                    initialValue='all'
                    containerStyle={styles.dropDown}
                    onSelectItem={setSubjectNO}
                  />

            </View>

            <View style={styles.filterContainer}>
                <Text style={styles.label}>درجه ی سختی</Text>
                <AutocompleteDropdown 
                    dataSet={[
                      {id: 'all', title: 'همه'},
                      {id: 'easy', title: 'آسان'},
                      {id: 'normal', title: 'متوسط'},
                      {id: 'hard', title: 'سخت'},
                  ]}
                  initialValue='all'
                  containerStyle={styles.dropDown}
                  onSelectItem={setDifficulty}
                />
            </View>


            <View style={styles.filterContainer}>
                <Text style={styles.label}>نوع سوال</Text>
                <AutocompleteDropdown 
                    dataSet={[
                      {id: 'all', title: 'همه'},
                      {id: 'grammar', title: 'نکات دستوری'},
                      {id: 'vocabulary', title: 'معنی کلمات'},
                      {id: 'historical', title: 'تاریخ ادبیات'},
                      {id: 'diction', title: 'املا'},
                      {id: 'books', title: 'آثار'},
                    ]}
                  initialValue='all'
                  containerStyle={styles.dropDown}
                  onSelectItem={setQuestionsType}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('questions')}><Text>navigate</Text></TouchableOpacity>
        </View>
    );
}



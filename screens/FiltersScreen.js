import { Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CounterInput from 'react-native-counter-input';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { styles } from '../Style';
import { useEffect, useState } from 'react';
import { updateQuestionsList } from './QuestionsListScreen';

export default function FiltersScreen() {
    const [fromTizhooshanExam, setFromTizhooshanExam] = useState(false);
    const [subjectNO, setSubjectNO] = useState(1);
    const [difficulty, setDifficulty] = useState('all');
    const [questionsType, setQuestionsType] = useState('all');


    useEffect(() => {updateQuestionsList({
            question_type: questionsType === null ? 'all':questionsType.id,
            from_tizhooshan_exam: fromTizhooshanExam,
            difficulty: difficulty === null ? 'all':difficulty.id,
            chapter_no: subjectNO
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
                <CounterInput
                  initial={1}
                  horizontal={true}
                  backgroundColor='#D3E4F3'
                  increaseButtonBackgroundColor='#1D81D9'
                  decreaseButtonBackgroundColor='#1D81D9'
                  onChange={number => setSubjectNO(number)}
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
        </View>
    );
}



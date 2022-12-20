import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CounterInput from 'react-native-counter-input';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { styles } from '../Style';


export default function FiltersScreen() {
    return (
        <View style={styles.filtersScreenContainer}>
            <View style={styles.filterContainer}>
                <Text style={[styles.label, {marginLeft: 0}]}>سوالات تیزهوشانی</Text>
                <BouncyCheckbox fillColor='#1D81D9'/>
            </View>

            <View style={styles.filterContainer}>
                <Text style={[styles.label, {marginTop: 8}]}>تا درس</Text>
                <CounterInput
                  horizontal={true}
                  backgroundColor='#D3E4F3'
                  increaseButtonBackgroundColor='#1D81D9'
                  decreaseButtonBackgroundColor='#1D81D9'
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
                containerStyle={styles.dropDown} />
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
                containerStyle={styles.dropDown} />
            </View>




        </View>
    );
}
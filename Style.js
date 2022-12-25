import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    questionsScreenContainer: {
        flex: 1,
        backgroundColor: '#092844',
        alignItems: 'center',
        flexDirection: 'column',
    },

    filterButton: {
        alignItems: 'center',
        width: '100%',
        height: 60,
        paddingTop: 5,
        borderTopColor: '#D3E4F3',
        borderTopWidth: 1
    },
    filterText: {
        fontSize: 20,
        color: '#D3E4F3'
    },

    questionsContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    filtersScreenContainer: {
        flex: 1,
        backgroundColor: '#092844',
        alignItems: 'flex-end'

    },
    label: {
        color: '#D3E4F3',
        fontSize: 25,
        marginHorizontal: 20
    },
    filterContainer: {
        marginTop: 50,
        flexDirection: 'row-reverse',
        width: '100%',
    },
    dropDown: {
        width: 150,

    },
    questionContainer: {
        marginTop: 20
    },

    questionText: {
        color: '#FFC93F',
        fontSize: 20,
    },
    questionTitleContainer: {
        flex: 1,
        backgroundColor: '#12548E',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        width: '88%',
        borderRadius: 15
    },
    questionTitleText: {
        color: '#D3E4F3',
        fontSize: 20,
        textAlign: "center"
        
    },
    optionsContainer: {
        flex: 1.5, 
        flexDirection: 'row',
        marginHorizontal: 18,
    },
    optionContainer: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 80,
        borderRadius: 10
    },
    optionsRow: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    optionText: {
        fontSize: 20,
        color: '#092844'
    }
})
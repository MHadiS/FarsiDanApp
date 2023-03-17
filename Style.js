import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    questionsScreenContainer: {
        flex: 1,
        backgroundColor: '#092844',
        // alignItems: 'center',
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
        width: '90%',
        height: 168,
        marginTop: 35,
        backgroundColor: '#12548E', // '#104575',
        borderRadius: 5,
        flexDirection: 'column',
    },

    questionTitle: {
        color: '#FFC93F',
        fontSize: 32,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 15,
        textAlign: 'center'
    },

    questionText: {
        color: "#808080",
        fontSize: 18,
        marginRight: 20,
        marginBottom: 20,
        textAlign: 'right',
        opacity: 0.6
    },

    questionInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        width:'100%', 
        backgroundColor: '#1D81D9',
        borderTopWidth: 3,
        borderColor: '#1D81D9',
        height: '33%',
        alignItems: 'center',
        borderRadius: 5
    },

    questionInfoText: {
        color: '#fff',
        fontSize: 20
    },

    questionTitleContainer: {
        flex: 1,
        backgroundColor: '#12548E',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        width: '88%',
        marginLeft: '6%',
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
    },

    controllerContainer: {
        flexDirection: "row-reverse",
        justifyContent: "space-evenly"
    },

    controller: {
        flex: 1,
        backgroundColor: '#1D81D9',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        borderWidth: 1,
        borderColor: '#092844'
    },

    controllerText: {
        color: "#D3E4F3",
        fontSize: 12
    }
})
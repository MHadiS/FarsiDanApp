import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import FiltersScreen from "./screens/FiltersScreen";
import QuestionsListScreen from "./screens/QuestionsListScreen";
import QuestionSolvingScreen from "./screens/QuestionSolvingScreen";


const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#1D81D9',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 20,
          }
          }} >
        <Stack.Screen 
          name="questions"
          component={QuestionsListScreen}
          options={{title: 'فارسی دان', headerRight: props => (
            <TouchableOpacity onPress={() => Alert.alert('این برنامه توسط محمد هادی شکیب آزاد و احمد یوسفی ساخته شده است')}>
              <Icon name="infocirlceo" color="#fff" size={23} />
            </TouchableOpacity>
          )}}/>

        <Stack.Screen 
          name="filters" 
          component={FiltersScreen}
          options={{presentation: 'modal', title: 'فیلتر ها'}}/>
        
        <Stack.Screen 
          name="questionSolving"
          component={QuestionSolvingScreen}
          options={{title: 'حل سوال'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
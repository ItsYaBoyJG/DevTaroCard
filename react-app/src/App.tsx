import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./HomeScreen";
import CreateTarotCard from "./createCard";


function App() {

 // const navigation = useNavigation();
  return (
    <Routes>
      <Route path="/" element={<HomeScreen/>}>
      <Route index element={<CreateTarotCard/>}/>
      </Route> 
    </Routes>
  );
}

export default App;

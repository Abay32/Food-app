 
import { useState } from "react";
// @ts-ignore
import Search from './components/Search';
// @ts-ignore
import FoodList from './components/FoodList';
// @ts-ignore
import Container from "./components/Container";
// @ts-ignore
import InnerContainer from "./components/InnerContainer";

// @ts-ignore
import FoodDetails from "./components/FoodDetails";


function App() { 
  const [foodData, setFoodData] = useState([]); 
  const [foodId, setFoodId] = useState("658615")
  return (
    <>
      <div className='App'>
        <Search foodDta = {foodData} setFoodData = {setFoodData} />   

        <Container>
          <InnerContainer>
            <FoodList setFoodId={setFoodId} foodData = {foodData} />
          </InnerContainer>   

          <InnerContainer>
            <FoodDetails foodId={foodId}/>
          </InnerContainer>    
        </Container>     
 
        
      </div>
    </>
  )
}
export default App

 import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";


function App() {
  let todos = [
    {
      sno:1,
      title:"Go to the market",
      desc: "hi let go to the mall"
    },
    {
      sno:1,
      title:"Go to the market",
      desc: "hi let go to the school"
    },
    {
      sno:1,
      title:"Go to the market",
      desc: "hi let go to the college"
    }
  ]
  return (
  <>
  <Header title = "My Todos List" searchBar={false} />
  <Todos todos={todos}/>
  <Footer/>
  </>
  );

}

export default App;

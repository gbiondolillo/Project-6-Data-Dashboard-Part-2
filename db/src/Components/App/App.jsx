import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import "./App.css";
import SideNav from "../SideNav/SideNav";
import Dashboard from "../Dashboard/Dashboard";

function App() {
  const [list, setList] = useState([]);
  const [filteredResults, setFilteredResults] = useState(list);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(50);
 

  let URL =
  "https://api.spoonacular.com/recipes/informationBulk?ids=640621,655525,659135,651326,650858,716407,661653,644761,661653,637222&apiKey=e4335cf90e904c488634c9015e704846";

  const fetchData = async () => {
    try {
    axios.get(URL).then((res) => {
      const data = res.data;
      setList(data);})
  	} catch (err) {
        console.log(err);
      }
      
    
  };

    
  useEffect(() => {
    fetchData();
  }, []);
    
  console.log(value);
  const searchItem = (searchValue) => {
    setSearch(searchValue);
    if (searchValue !== "") {
      const recipes = list.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) &&
          item.healthScore <= value
      );
      setFilteredResults(recipes);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <SideNav />
      <Dashboard
        list={list}
        setSearch={setSearch}
        searchItem={searchItem}
        setValue={setValue}
        search={search}
        value={value}
        filteredResults={filteredResults}
      />
    </div>
  );
}

export default App;

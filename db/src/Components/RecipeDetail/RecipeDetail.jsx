import "./RecipeDetail.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function RecipeDetail(props) {
  const [list, setList] = useState([]);
  const [fullDetails, setFullDetails] = useState();
  let params = useParams();

  let URL =
  "https://api.spoonacular.com/recipes/informationBulk?ids=640621,655525,659135,651326,650858,716407,661653,644761,661653,637222&apiKey=e4335cf90e904c488634c9015e704846";

  const fetchData = async () => {
    try {
      axios.get(URL).then((res) => {
        const data = res.data;
        setList(data);
      });
    } catch (err) {
      console.log(err);
    }
    console.log(list);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(list);

  return (
    <div className="recipe-view">
      {list.length == 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>
            <img src={list[params.index].image} alt="" />
          </div>
          <h1>{list[params.index].title}</h1>
          <h1>
            Health Score:
            {list[params.index].healthScore}/100
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: list[params.index].summary }}
          />
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;

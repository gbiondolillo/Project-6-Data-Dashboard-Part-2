import "./Dashboard.css";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function Dashboard(props) {
  const data1 = props.list.map((item, index) => ({
    name: item.title,
    healthScore: item.healthScore,
  }));

  return (
    <div className="dashboard">
      <div className="sub-dash">
        <div className="sub-section">
          <h1>{props.list.length}</h1>
          <h3>Recipes</h3>
        </div>
        <div className="sub-section">
          <h1>45 Mins</h1>
          <h3>Average Cook Time</h3>
        </div>
        <div className="sub-section">
          <h1>50/100</h1>
          <h3>Average Health Score</h3>
        </div>
      </div>

      <div className="main-dash">
        <form>
          <input
            className="input"
            type="text"
            placeholder="Search Recipes..."
            onChange={(e) => props.searchItem(e.target.value)}
          />
          <label>
            Health Score:
            <input
              type="range"
              min="1"
              max="100"
              onChange={(e) => props.setValue(e.target.value)}
            />
          </label>
        </form>
        <div className="bar-chart">
          <BarChart width={900} height={250} data={data1}>
            <XAxis hide="false" dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="healthScore" fill="#ff0d86" />
          </BarChart>
        </div>
        <div className="list">
          <div className="item-titles">
            <h3 className="title-header">Recipe</h3>
            <h3 className="price">Price ($)</h3>
            <h3 className="cook-time"> Cook Time</h3>
            <h3 className="health-score">Health Score</h3>
            <h3 className="health-score">Details</h3>
          </div>
          <div>
            {props.search == ""
              ? props.list.map((item, index) => (
                  <div key={index} className="item">
                    <div>
                      <hr />
                    </div>
                    <div key={index} className="item-titles">
                      <p className="title">{item.title}</p>
                      <p className="price">${item.pricePerServing}</p>
                      <p className="cook-time">{item.readyInMinutes} Mins</p>
                      <p className="health-score">{item.healthScore}/100</p>
                      <Link to={`/recipeDetails/${index}`} key={index}>
                        <p className="health-score">🔗</p>
                      </Link>
                    </div>
                  </div>
                ))
              : props.filteredResults.map((item, index) => (
                  <div key={index} className="item-titles">
                    <p className="title">{item.title}</p>
                    <p className="price">${item.pricePerServing}</p>
                    <p className="cook-time">{item.readyInMinutes} Mins</p>
                    <p className="health-score">{item.healthScore}/100</p>
                    <Link>
                      <p className="link">🔗</p>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

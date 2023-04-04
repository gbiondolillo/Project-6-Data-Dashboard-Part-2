import "./DetailView.css";
import SideNav from "../SideNav/SideNav";
import RecipeDetail from "../RecipeDetail/RecipeDetail";
import { useState, useEffect } from "react";
import axios from "axios";

function DetailView() {
  
  return (
    <div className="detail-view">
      <SideNav />
      <RecipeDetail />
    </div>
  );
}

export default DetailView;

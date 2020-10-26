import React ,{}from "react";
import { Route, Switch, Link} from "react-router-dom";
import TrainingByDate from './TrainingFilters/date/TrainingByDate'
import TrainingByRate from './TrainingFilters/rate/TrainingByRate'
import TrainingByCategories from './TrainingFilters/categories/TrainingByCategories'
import TrainingSearch from './TrainingFilters/search/TrainingSearch'
import usePageTraining from './usePageTraining'
import Post from "../../../atoms/Post/Post";

import { useSearch } from "../../../Context/ContextProvider";


export default function PageTraining() {


  const {categories,  select, handleChange } = usePageTraining()
  const searchData = useSearch()
  
  return (
    <>
      <div className="trainingFiltre-container">
        <ul>
          <li>
            <Link to="/Home/Page/Training/Date">Date</Link>
          </li>
          <li>
            <Link to={`/Home/Page/Training/Categorie/${select}`}>
              <select onChange={handleChange}>
                <option></option>
                {categories.map((data) => (
                  <option value={data.categoryName}>{data.categoryName}</option>
                ))}
              </select>
            </Link>
          </li>
          <li>
            <Link to="/Home/Page/Training/Rate">Pertinance</Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="trainingPage">
          <Switch>
            
            <Route path="/Home/Page/Training/Date" component={TrainingByDate} />
            <Route path={`/Home/Page/Training/Categorie/:name`} component={TrainingByCategories}/>
            <Route path="/Home/Page/Training/Rate" component={TrainingByRate}/>

            <Route path="/Home/Page/Training/search/:slug"><TrainingSearch/></Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

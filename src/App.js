import "./App.css";
import Basic from "./component/Basic";
import { useEffect, useState } from "react";
import AllProducts from "./component/AllProducts";
import AddProduct from "./component/AddProduct";
import LoadMore from "./component/LoadMore";
import FilterByBrand from "./component/FilterByBrand";
import FilterByCategory from "./component/FilterByCategory";

let btnNames = [
  {
    name: "All Products",
    value: "all",
    component: <AllProducts/>,
  },
  {
    name: "Load more",
    value: "Load",
    component: <LoadMore/>,
  },
  {
    name: "Filter By Category",
    value: "FCategory",
    component: <FilterByCategory/>,
  },
  {
    name: "Filter By Brand",
    value: "FBrand",
    component:  <FilterByBrand/>,
  },
  {
    name: "Add Product",
    value: "add",
    component: <AddProduct/>
  },
];

function App() {
  const [current, setCurrent] = useState(btnNames[0]);
  useEffect(() => {}, []);

  function currentStateHandler(btn) {
    setCurrent(btn);
    localStorage.setItem("btnVal", btn.value);
  }
  return (
    <div className="outer">
      <div className="buttons">
        {btnNames.map((btn, index) => (
          <button
            key={index}
            onClick={() => currentStateHandler(btn)}
            className={
              current.value === btn.value ? "activeBtn" : "inactiveBtn"
            }
          >
            {btn.name}
          </button>
        ))}
      </div>
      <div>{current.component}</div>
    </div>
  );
}

export default App;

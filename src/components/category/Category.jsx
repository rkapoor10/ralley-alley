import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Category = () => {
  const [categoryList, setCategoryList] = useState([]);

  const getCategories = async () => {
    try {
      const { data } = await axios.get("/api/categories");
      console.log(data.categories);
      setCategoryList(data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="lp-categories">
      <h2 className="align-center mb-2 gray">
        FIND YOUR <span className="baseteal">CATEGORY</span>
      </h2>
      <div className="category-wrapper">
        {categoryList.map(({ _id: categoryId, categoryName, description }) => {
          return (
            <div key={categoryId} className="catg-card">
              <Link to={`/products?categorySelected=${categoryName}`}>
                <div className="overlay-grid">
                  <div className="circle center background bg-baseorange"></div>
                  <div className="center center-flex-column white content">
                    <h3 className="fs-2">{categoryName}</h3>
                    <p className="txt-xs">{description}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;

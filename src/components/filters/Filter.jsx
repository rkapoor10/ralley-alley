import React from "react";
import { HIGH_TO_LOW, LOW_TO_HIGH } from "../../context/filterContext/filterReducer";
import { useFilter } from "../../context/filterContext/FilterContext";

const FilterSidebar = () => {
  const { dispatch, state } = useFilter();
  return (
    <div className="child pd-filter-layout">
      <form className="filter-container">
        <div className="space-between wrapit seperator padtb-1">
          <h4 className="darksecondary">FILTERS</h4>
          <button
            type="reset"
            onClick={() => dispatch({ type: "RESET_FILTERS" })}
            className="txt-xs clear-btn"
          >
            Clear All
          </button>
        </div>
        <div className="seperator padtb-1">
          <h4 className="mb-1 darksecondary">PRICE</h4>
          <div style={{ width: "200px" }}>
            <input
              type="range"
              style={{ width: "200px" }}
              onChange={(e) => {
                dispatch({
                  type: "PRICE_RANGE",
                  payload: { value: e.target.value },
                });
              }}
              value={state.priceRange}
              list="prices"
              id="prices"
              min="500"
              max="20000"
              step="500"
            />
            <datalist
              id="prices"
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "10px",
              }}
            >
              <option value="500" label="₹500"></option>
              <option value="2000" label="₹2000"></option>
              <option value="4000" label="₹4000"></option>
              <option value="8000" label="₹8000"></option>
              <option value="20000" label="₹20000"></option>
            </datalist>
          </div>
        </div>
        <div className="seperator padtb-1">
          <h4 className="mb-1 darksecondary">CATEGORY</h4>
          <div className="checkbox column-flex">
            {["Racquets", "Shoes", "Apparel", "Bags"].map((categoryName) => {
              return (
                <label key={categoryName} className="txt-xs" htmlFor="checkbox-1">
                  <input
                    id="checkbox-1"
                    type="checkbox"
                    name="checkbox"
                    value={state.category[categoryName.toLowerCase()]}
                    checked={state.category[categoryName.toLowerCase()]}
                    onChange={() =>
                      dispatch({
                        type: "CATEGORY_FILTER",
                        payload: categoryName.toLowerCase(),
                      })
                    }
                  />
                  {categoryName}
                </label>
              );
            })}
          </div>
        </div>
        <div className="seperator padtb-1">
          <h4 className="mb-1 darksecondary">RATINGS</h4>
          <div className="checkbox column-flex">
            {[4, 3, 2, 1].map((rating) => {
              return (
                <label  key={rating} className="txt-xs" htmlFor="radio-1">
                  <input
                    id="radio-1"
                    type="radio"
                    name="radio"
                    value={state.ratings === rating}
                    onChange={() => {
                      dispatch({ type: "RATINGS_FILTER", payload: rating });
                    }}
                  />
                  {rating} stars &#38; above
                </label>
              );
            })}
          </div>
        </div>
        <div className="seperator padtb-1">
          <h4 className="mb-1 darksecondary">SORT</h4>
          <div className="checkbox column-flex">
            <label className="txt-xs" htmlFor={LOW_TO_HIGH}>
              <input
                id={LOW_TO_HIGH}
                type="radio"
                name="sort"
                value={state.lowToHigh}
                onClick={() => dispatch({ type: LOW_TO_HIGH })}
              />
              Price - Low to High
            </label>

            <label className="txt-xs" htmlFor={HIGH_TO_LOW}>
              <input
                id={HIGH_TO_LOW}
                type="radio"
                name="sort"
                value={state.highToLow}
                onClick={() => dispatch({ type: HIGH_TO_LOW })}
              />
              Price - High to Low
            </label>
          </div>
        </div>
        <div className="seperator padtb-1">
          <h4 className="mb-1 darksecondary">DISCOUNT</h4>
          <div className="checkbox column-flex">
            <label className="txt-xs" htmlFor="checkbox-disc-1">
              <input
                id="checkbox-disc-1"
                type="checkbox"
                name="checkbox"
                value={state.discount["10_OR_BELOW"]}
                onClick={() => dispatch({ type: "10_OR_BELOW" })}
              />
              10% or below
            </label>
            <label className="txt-xs" htmlFor="checkbox-disc-2">
              <input
                id="checkbox-disc-2"
                type="checkbox"
                name="checkbox"
                value={state.discount["10_OR_ABOVE"]}
                onClick={() => dispatch({ type: "10_OR_ABOVE" })}
              />
              10% or more
            </label>
            <label className="txt-xs" htmlFor="checkbox-disc-3">
              <input
                id="checkbox-disc-3"
                type="checkbox"
                name="checkbox"
                value={state.discount["30_OR_ABOVE"]}
                onClick={() => dispatch({ type: "30_OR_ABOVE" })}
              />
              30% or more
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterSidebar;

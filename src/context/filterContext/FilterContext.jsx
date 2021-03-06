import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import {
  sortByPrice,
  discountFilter,
  categoryFilter,
  ratingsFilter,
  priceRangeFilter,
} from "../../utils/filtersFunctions";
import { filterReducer, initialState } from "./filterReducer";
import { useSearchParams } from "react-router-dom";

const defaultContextValue = {};

// create context
const FilterContext = createContext(defaultContextValue);

// provide context
const FilterProvider = ({ children }) => {
  const [searchParams] = useSearchParams();
  const categoryReceived = searchParams.get("categorySelected");
  const [productsList, setProductsList] = useState([]);
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/products");
      setProductsList(data.products);
    } catch (error) {
      console.log("Fetch Products Fail! in FilterContext.jsx");
    }
  };

  useEffect(() => fetchProducts(), []);

  const [state, dispatch] = useReducer(filterReducer, {
    highToLow: false,
    lowToHigh: false,
    discount: {
      "10_OR_BELOW": false,
      "10_OR_ABOVE": false,
      "30_OR_ABOVE": false,
    },
    category: { racquets: false, shoes: false, apparel: false, bags: false },
    ratings: 0,
    priceRange: 20000,
  });

  const compose =
    (...filterFunctions) =>
    (state, data) =>
      filterFunctions.reduce(
        (newData, filterFunctions) => filterFunctions(state, newData),
        data
      );

  const filteredProducts = compose(
    sortByPrice,
    discountFilter,
    categoryFilter,
    ratingsFilter,
    priceRangeFilter
  )(state, productsList);

  useEffect(() => {
    categoryReceived&&
    dispatch({
      type: "CATEGORY_FILTER",
      payload: categoryReceived,
    });
    return () => dispatch({ type: "RESET_FILTERS" });
  }, [categoryReceived]);


  return (
    <FilterContext.Provider value={{ filteredProducts, dispatch, state }}>
      {children}
    </FilterContext.Provider>
  );
};

// use context
const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };

import { createContext,useContext } from "react";

const defaultContextValue = {}

// create context
const FilterContext = createContext(defaultContextValue)

// provide context
const FilterContextProvider = ({children}) => {
    return(
        <FilterContext.Provider>
            {children}
        </FilterContext.Provider>
    )
}

// use context
const useFilter = () => useContext(FilterContext)


export {FilterContextProvider, useFilter}

import React from "react";

const FilterSidebar = () => {
    return(
        <div className="child pd-filter-layout">
            <div className="filter-container">
                <div className="space-between wrapit seperator padtb-1">
                    <h4 className="darksecondary">FILTERS</h4>
                    <button className="txt-xs clear-btn">Clear All</button>
                </div>
                <div className="seperator padtb-1">
                    <h4 className="mb-1 darksecondary">PRICE</h4>
                    <input type="range" min="1" max="100" value="50"/>
                </div>
                <div className="seperator padtb-1">
                    <h4 className="mb-1 darksecondary">CATEGORY</h4>
                    <div className="checkbox column-flex">
                        <label className="txt-xs gray" htmlFor="checkbox-1">
                            <input id="checkbox-1" type="checkbox" name="checkbox" />
                            Racquets
                        </label>
                        <label className="txt-xs gray" htmlFor="checkbox-2">
                            <input id="checkbox-2" type="checkbox" name="checkbox" />
                            Shoes
                        </label>
                        <label className="txt-xs gray" htmlFor="checkbox-3">
                            <input id="checkbox-3" type="checkbox" name="checkbox" />
                            Apparel
                        </label>
                        <label className="txt-xs gray" htmlFor="checkbox-4">
                            <input id="checkbox-4" type="checkbox" name="checkbox" />
                            Bags
                        </label>
                    </div>
                </div>
                <div className="seperator padtb-1">
                    <h4 className="mb-1 darksecondary">RATINGS</h4>
                    <div className="checkbox column-flex">
                        <label className="txt-xs gray" htmlFor="radio-1">
                            <input id="radio-1" type="radio" name="radio" />
                            4 stars &#38; above
                        </label>
                        <label className="txt-xs gray" htmlFor="radio-2">
                            <input id="radio-2" type="radio" name="radio" />
                            3 stars &#38; above
                        </label>
                        <label className="txt-xs gray" htmlFor="radio-3">
                            <input id="radio-3" type="radio" name="radio" />
                            2 stars &#38; above
                        </label>
                        <label className="txt-xs gray" htmlFor="radio-4">
                            <input id="radio-4" type="radio" name="radio" />
                            1 stars &#38; above
                        </label>
                    </div>
                </div>
                <div className="seperator padtb-1">
                    <h4 className="mb-1 darksecondary">SORT</h4>
                    <div className="checkbox column-flex">
                        <label className="txt-xs gray" htmlFor="radio-sort1">
                            <input id="radio-sort1" type="radio" name="sort" />
                            Price - Low to High
                        </label>
                        <label className="txt-xs gray" htmlFor="radio-sort2">
                            <input id="radio-sort2" type="radio" name="sort" />
                            Price - High to Low
                        </label>
                    </div>
                </div>
                <div className="seperator padtb-1">
                    <h4 className="mb-1 darksecondary">DISCOUNT</h4>
                    <div className="checkbox column-flex">
                        <label className="txt-xs gray" htmlFor="checkbox-disc-1">
                            <input id="checkbox-disc-1" type="checkbox" name="checkbox" />
                            10% or below
                        </label>
                        <label className="txt-xs gray" htmlFor="checkbox-disc-2">
                            <input id="checkbox-disc-2" type="checkbox" name="checkbox" />
                            10% or more
                        </label>
                        <label className="txt-xs gray" htmlFor="checkbox-disc-3">
                            <input id="checkbox-disc-3" type="checkbox" name="checkbox" />
                            40% or more
                        </label>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FilterSidebar
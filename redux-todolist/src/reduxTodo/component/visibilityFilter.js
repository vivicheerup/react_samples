import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions/todoActions";
import { VISIBILITY_FILTERS } from "../constant";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div>
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            style={{
              margin: "15px",
              textDecoration:
              currentFilter === activeFilter ? "underline": ""
            }}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);

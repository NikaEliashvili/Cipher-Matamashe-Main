import "./searchResult.css";
import React, { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQuery();
  const searchTerm = query.get("searchTerm");
  const [searchedData, setSearchedData] = useState(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handlePreviousPage = () => {
    if (!location.state?.from.includes("search")) {
      const prevPath = location.state?.from || "/";
      console.log(prevPath);
      navigate(prevPath);
    }
  };

  const toggleFilterBtn = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  return (
    <div className="search_page">
      <div className="search_page_header">
        <abbr title="წინა გვერდზე გადასვლა">
          <button className="prev_btn" onClick={handlePreviousPage}>
            <IoMdArrowRoundBack />
          </button>
        </abbr>
        <h4 className="search_term">
          საძიებო სიტყვა:
          <span className="search_term_span">{searchTerm}</span>
        </h4>
        <div className="filters_container">
          <button onClick={toggleFilterBtn} className="filter_btn">
            <BiFilterAlt />
          </button>
          {isFiltersOpen && (
            <div className="filters_form">
              <h4>filter buttons goes here</h4>
            </div>
          )}
        </div>
      </div>
      <div className="games_container">
        {!searchedData || searchedData?.length === 0 ? (
          <div className="no_data">
            <p className="no_data_found">პროდუქტი ვერ მოიძებნა</p>
            <img
              className="no_data_icon"
              src="/icons/no_data.svg"
              alt=""
            />
          </div>
        ) : (
          searchedData.map((game) => <span>game card goes here</span>)
        )}
      </div>
    </div>
  );
};

export default SearchResult;

import React from "react";

const Header = (props) => {
  return (
    <div className="sticky-header">
      <div className="title">OMDB Movie Search</div>
      <div className="container">
        <input
          className="inputs"
          type="text"
          placeholder="Search...."
          value={props.value}
          onChange={function (e) {
            props.setSearchValue(e.target.value);
          }}
        />
        <div
          className="search"
          value={props.value}
          onClick={function (e) {
            props.setFinal(props.searchValue.toUpperCase());
            props.setClicked(true);
            setTimeout(function () {
            props.setClicked(false);
            }, 100);
          }}
        ></div>
        <div className="movies-title">{props.final}</div>
      </div>
    </div>
  );
};

export default Header;

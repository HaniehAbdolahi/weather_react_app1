import React from "react";

export default function Search() {
  return (
    <div className="search">
      <form>
        <div className="searchBox input-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Enter a city.."
            autoFocus="on"
          />
          <input className="btn btn-primary" type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
}

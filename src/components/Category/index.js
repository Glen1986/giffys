import React from "react";
import { Link } from "wouter";
import "./styles.css";

export default function Category({ name, options = [] }) {
  return (
    <div className='Category'>
      <h3 className="Category-title">{name}</h3>
      <ul className="Category-list">
        {options.map((singleOption) => (
          <ul key={singleOption} className="Category-list-item">
            <Link className="Category-link" to={`/search/${singleOption}`}>
              {singleOption}
            </Link>
          </ul>
        ))}
      </ul>
    </div>
  );
}

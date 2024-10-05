"use client";
import Link from "next/link";
import './breadcrumb.css'; 
import { breadcrumbItemsProps } from "./type.js";

const Breadcrumb = ({ items }:breadcrumbItemsProps) => {
  return (
    <nav aria-label="Breadcrumb">
      <div className="breadcrumb-container">
        <ul className="breadcrumb-list">
          {items.map((item, index) =>
            item.url ? (
              <li key={index} className="breadcrumb-item">
                <Link href={item.url} aria-label="Home">
                  {item.text}
                </Link>
                <span aria-hidden="true" className="breadcrumb-icon">
                  |
                </span>
              </li>
            ) : (
              <li key={index} className="breadcrumb-item">
                {item.text}
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumb;

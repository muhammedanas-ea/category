"use client";
import Hero from "@/components/hero/Hero";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import ProductCard from "@/components/productcard/ProductCard";
import { useState } from "react";
import useFetchProducts from "@/hook/useFetchHook";
import Filter from "@/components/filter/Filter";

export default function Home() {
  const [openFilter, setOpenFilter] = useState(true);
  const [hidden, setHidden] = useState(true);
  const products = useFetchProducts();

  const categoryBreadcrumbItems = [
    { text: "Home", url: "/home" },
    { text: "Casual" },
  ];

  return (
    <section className="container">
      <Breadcrumb items={categoryBreadcrumbItems} />
      <Hero />
      <div className="item-list-header">
        <div className="item-count-container">
          <p className="item-count">3425 Items</p>
          {openFilter ? (
            <div
              className="filter-toggle"
              onClick={() => setOpenFilter(!openFilter)}
            >
              <IoIosArrowBack />
              <p className="filter-text">HIDE FILTER</p>
            </div>
          ) : (
            <div
              className="filter-toggle"
              onClick={() => setOpenFilter(!openFilter)}
            >
              <IoIosArrowForward />
              <p className="filter-text">SHOW FILTER</p>
            </div>
          )}
        </div>
        <div>
          <p className="recommended-text filter-hidde">FILTER</p>
        </div>
        <div className="relative">
          <div
            className="recommended-section filter-toggle"
            onClick={() => setHidden(!hidden)}
          >
            <p className="recommended-text">RECOMMENDED</p>
            <IoIosArrowDown />
          </div>
          <div className={`dropdown ${!hidden ? "show" : ""}`}>
            <ul>
              <li>Newest first</li>
              <li>popular</li>
              <li>Price : high to low</li>
              <li>Price : low to high</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="category-section">
        <div
          className={`${
            openFilter ? "filter-section" : "close-filter-section"
          }`}
        >
          <div>
            <Filter />
          </div>
        </div>

        <div
          className={`${openFilter ? "list-section" : "close-list-section"}`}
        >
          {products &&
            products.map((item) => (
              <ProductCard
                key={item.id}
                image={item.image}
                title={item.title}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

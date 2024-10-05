import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./filter.css";

type FilterType = {
  title: string;
  options: string[];
};

const Filter = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string | null>>({});


  const filters: FilterType[] = [
    { title: "Ideal For", options: ["All", "Men", "Women", "Kids"] },
    { title: "Occasion", options: ["All", "Casual", "Formal"] },
    { title: "Work", options: ["All", "Office", "Freelance"] },
    { title: "Fabric", options: ["All", "Cotton", "Polyester"] },
    { title: "Segment", options: ["All", "Luxury", "Budget"] },
    { title: "Suitable For", options: ["All", "Summer", "Winter"] },
    { title: "Raw Materials", options: ["All", "Organic", "Synthetic"] },
    { title: "Pattern", options: ["All", "Plain", "Striped"] },
  ];

  const toggleFilter = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index);
    }
  };

  const handleOptionChange = (filterTitle: string, option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [filterTitle]: prev[filterTitle] === option ? null : option, 
    }));
  };

  return (
    <div className="filter-main">
      {filters.map((item, index) => (
        <div className="filter-item" key={index}>
          <div className="filter">
            <div className="filter-header" onClick={() => toggleFilter(index)}>
              <span>{item.title}</span>
              <IoIosArrowDown />
            </div>
            <p>{selectedOptions[item.title] || "All"}</p>
          </div>
          {openIndex === index && (
            <div className="filter-options">
              {item.options.map((option, optionIndex) => (
                <div key={optionIndex} className="filter-option">
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedOptions[item.title] === option}
                      onChange={() => handleOptionChange(item.title, option)}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;

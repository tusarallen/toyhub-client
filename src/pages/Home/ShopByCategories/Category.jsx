import React from "react";
import CategoryToy from "./CategoryToy";

const Category = ({filtereCategory}) => {
  return (
    <div className="max-w-5xl md:ml-64 mx-auto lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 mt-10">
        {filtereCategory.map((categoryToy ,i ) => <CategoryToy key={i} categoryToy={categoryToy} />)} 
    </div>
  );
};

export default Category;
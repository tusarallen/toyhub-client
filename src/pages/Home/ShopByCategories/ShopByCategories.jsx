import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Category from "./Category";

const ShopByCategories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Spider-Man Toys");

  useEffect(() => {
    fetch("https://toy-hub-project-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setAllCategories(data);
      });
  }, []);

  const tabNames = [...new Set(allCategories.map((item) => item.category))];
  const filtereCategory = allCategories.filter(
    (item) => item.category === selectedTab
  );

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <>
      <div className="line w-full h-[1px] absolute left-0 opacity-20 md-[6px] bg-[#6b6b6b]"></div>
      <div className="bg-slate-600">
        <div className="p-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center">
            Shop By Category
          </h2>
          <div className="mt-10 text-white">
            <Tabs>
              <TabList className="text-center">
                {tabNames.map((tabName, i) => (
                  <Tab key={i} onClick={() => handleTabClick(tabName)}>
                    {tabName}
                  </Tab>
                ))}
              </TabList>
              <div>
                {tabNames.map((tabName, i) => (
                  <TabPanel key={i}>
                    <Category filtereCategory={filtereCategory} />
                  </TabPanel>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopByCategories;

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  return (
    <div className="md:w-[508px] rounded-md font-bold p-3 mx-auto mt-16">
      <Tabs>
        <div className="hover:text-[red] bg-slate-100">
        <TabList>
          <Tab>Spider-man Toys</Tab>
          <Tab>Iron-man Toys</Tab>
          <Tab>Black Panther Toys</Tab>
        </TabList>
        </div>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;

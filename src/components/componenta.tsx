import React, { useEffect, useState } from "react";
import { TabView,TabPanel } from 'primereact/tabview';
import './componenta.scss';


function ComponentA() {
    
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {label: 'Pantry'},
        {label: 'Refrigerator'},
        {label: 'Freezer'},
    ];

    return(
<div>
<TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
    <TabPanel header="Header I">
        <div className="tab-panel-container"> Content 1</div>
    </TabPanel>
    <TabPanel header="Header II">
    <div className="tab-panel-container"> Content 2</div>
    </TabPanel>
    <TabPanel header="Header III">
    <div className="tab-panel-container"> Content 3</div>
    </TabPanel>
</TabView>
 
</div>
    );
}

export default ComponentA;
import React from 'react';
import { render } from "react-dom";
import { Layout } from "./lib";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";
import ComponentA from './components/componenta';
import ComponentB from './components/componentb';
import ComponentC from './components/componentc';
import ComponentD from './components/componentd';

const App = () => {
    library.add(fad);
    const dockBasicItems = [
      {
        label: 'Component A',
        iconClass: "fad" as IconPrefix,
        iconName: "file-chart-line" as IconName,
        child: <ComponentA></ComponentA>
      },
      {
        label: 'Component B',
        iconClass: "fad" as IconPrefix,
        iconName: "truck-pickup" as IconName,
        child: <ComponentB></ComponentB>
      },
      {
        label: 'Component C',
        iconClass: "fad" as IconPrefix,
        iconName: "map-marked-alt" as IconName,
        child: <ComponentC></ComponentC>
      },
      {
        label: 'Component D',
        iconClass: "fad" as IconPrefix,
        iconName: "user" as IconName,
        child: <ComponentD></ComponentD>
      }
    ];
  return( <div>
    <Layout items={dockBasicItems} />
  </div>);
 
};

render(<App />, document.getElementById("root"));
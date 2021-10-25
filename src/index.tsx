import React from 'react';
import { render } from "react-dom";
import { Layout } from "./lib";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import ComponentA from './components/componenta';
import ComponentB from './components/componentb';
import ComponentC from './components/componentc';
import ComponentD from './components/componentd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
    library.add(fad);
    const dockBasicItems = [
      {
        label: 'Component A',
        icon: <FontAwesomeIcon icon={["fad", "file-chart-line"]} />,
        child: <ComponentA></ComponentA>
      },
      {
        label: 'Component B',
        icon: <FontAwesomeIcon icon={["fad", "truck-pickup"]} />,
        child: <ComponentB></ComponentB>
      },
      {
        label: 'Component C',
        icon: <img src="./logo192.png" alt="" />,
        child: <ComponentC></ComponentC>
      },
      {
        label: 'Component D',
        icon: <FontAwesomeIcon icon={["fad", "plus"]} />,
        child: <ComponentD></ComponentD>
      }
    ];
  return( <div>
    <Layout items={dockBasicItems} />
  </div>);
 
};

render(<App />, document.getElementById("root"));
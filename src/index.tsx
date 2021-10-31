import React from 'react'

import { NvusReact }  from './lib'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faUser, faMap, faPlus } from '@fortawesome/free-solid-svg-icons'
import ComponentA from './components/componenta'
import ComponentB from './components/componentb'
import ComponentC from './components/componentc'
import ComponentD from './components/componentd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
    const mainMenu = [
        {
            title: 'Test Title',
            menuItems: [
                {
                    label: 'Component A',
                    icon: <FontAwesomeIcon icon={faUser} />,
                    child: <ComponentA></ComponentA>,
                },
                {
                    label: 'Component B',
                    icon: <FontAwesomeIcon icon={faMap} />,
                    child: <ComponentB></ComponentB>,
                },
            ],
        },
        {
            title: 'Test Title Too',
            menuItems: [
                {
                    label: 'Component C',
                    icon: <img src="./logo192.png" alt="" />,
                    child: <ComponentC></ComponentC>,
                },
                {
                    label: 'Component D',
                    icon: <FontAwesomeIcon icon={faPlus} />,
                    child: <ComponentD></ComponentD>,
                },
            ],
        },
    ]

    return (
        <div>
            <NvusReact items={mainMenu} />
        </div>
    )
}



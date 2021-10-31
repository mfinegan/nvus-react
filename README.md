<h1 align="center">Welcome to @nvus/nvus-react 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version- 0.2.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://www.gnu.org/licenses/gpl-3.0.txt" target="_blank">
    <img alt="License: GPL--3.0--only" src="https://img.shields.io/badge/License-GPL--3.0--only-yellow.svg" />
  </a>
</p>

> React Component that scaffolds out a basic dashboard layout in a windowed environment.

## The NVUS-React MenuModel

The NVUS-React component takes in a single property: An array of NVUS Menu Models.

Each Menu Model is consists of a title and an array of MenuItems.

Each MenuItem consists of:

1. title: String The Name of the Component
2. icon: A ReactNode representing the icon to use alongside the title
3. child: A ReactNode child that represented the component to render in the body of the window.

If a single Menu Model object is passed in the array, NVUS-React will not render the paging arrows in the menu bar.

It is the goal of this developer to make this model as open as possible yet there are some items (ex: the icon) where it is preferred to limit the type. However
the current scope of the project is to produce a minimum viable solution as to solicit feedback and critique from the public at large.

## Install

### 1. Install from NPM/Yarn

```sh
yarn install @nvus/nvus-react
```

### 2. Create local typings file and place in directory 'typings'

```sh
declare module '@nvus/nvus-react';
```

### 3. Import typings file into tsconfig.json

```json
{
  "compilerOptions": {
    ...
    "typeRoots": [
      "./node_modules/@types/",
      "./typings"
    ]
  },
```

Steps 2 and 3 are short-term measures until package types are accepted into @types.

## Usage

```jsx
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
```

## Run tests

```sh
yarn run test
```

## SASS Variables

See \_theme.scss for a comprehensive list of all the SASS variables used in theming and laying out the components.

## Author

👤 **Michael Finegan, Jr.**

## Show your support

Give a ⭐️ if this project helped you!

Tips are appreciated!

BTC: 3KC3rPky6hnkYppKyBJdDFNf2mpDQt7ogq

ETH: 0x5aac680931344A6c588D0624DE1D44987E9330C7

BCH: qzex8w53qmtq5zvxayfm0nmmxprgt4muzc5v8q4cwf

DOGE: DPmNfDWrUeGEUGZAqLSrJ2AozhGQtZXDJZ

SHIB: 0x5a0F9E9F8355CEdBfFEc374Ea86ad5dB9Be594a7

## 📝 License

This project is [GPL--3.0--only](https://www.gnu.org/licenses/gpl-3.0.txt) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

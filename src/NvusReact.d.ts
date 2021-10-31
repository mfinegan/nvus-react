import { ReactElement } from 'react'

declare module '@nvus/nvus-react' {
    interface NVUSMenu {
        title: string
        menuItems: MenuItemProps[]
    }

    interface NvusReactProps {
        /** Array of MenuItems to render */
        items: NVUSMenu[]
    }

    type MenuItemProps = {
        /** Label for Menu Item */
        label: string

        /** Name of the FontAwesome Icon Class */
        icon: React.ReactNode

        /** Function Callback for when Pinned Action is executed */
        onClick?: (key: string) => void

        child: React.ReactNode
    }

    function NvusReact(props: NvusReactProps): ReactElement

    export = NvusReact
}

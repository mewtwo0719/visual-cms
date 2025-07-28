import type { Config } from '@measured/puck'

import { ButtonProps, PuckButtoConfiguration } from './components/PuckComponents/Common/Button'
import {
  ContainerProps,
  PuckContainerConfiguration,
} from './components/PuckComponents/Displays/Container'
import { FlexProps, PuckFlexConfiguration } from './components/PuckComponents/Displays/Flex'
import {
  NavigationMenuProps,
  PuckNavigationMenuConfiguration,
} from './components/PuckComponents/General/NavigationMenu'
import { PuckSelectConfiguration, SelectProps } from './components/PuckComponents/Inputs/Select'

type Props = {
  Button: ButtonProps
  Flex: FlexProps
  Select: SelectProps
  NavigationMenu: NavigationMenuProps
  Container: ContainerProps
}

export const config: Config<Props> = {
  categories: {
    display: {
      components: ['Container', 'Flex'],
    },
    common: {
      components: ['Button'],
    },
    input: {
      components: ['Select'],
    },
    general: {
      components: ['NavigationMenu'],
    },
  },
  components: {
    Flex: PuckFlexConfiguration,
    Button: PuckButtoConfiguration,
    Select: PuckSelectConfiguration,
    NavigationMenu: PuckNavigationMenuConfiguration,
    Container: PuckContainerConfiguration,
  },
}

export default config

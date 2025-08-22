import type { Config } from '@measured/puck'

import { ButtonProps, PuckButtoConfiguration } from './components/PuckComponents/Common/Button'
import {
  ContainerProps,
  PuckContainerConfiguration,
} from './components/PuckComponents/Displays/Container'
import { FlexProps, PuckFlexConfiguration } from './components/PuckComponents/Displays/Flex'
import { PuckRowConfiguration, RowProps } from './components/PuckComponents/Displays/Row'
import {
  PuckSectionConfiguration,
  SectionProps,
} from './components/PuckComponents/Displays/Section'

import { IconProps, PuckIconConfiguration } from './components/PuckComponents/Common/Icon'
import { PuckSelectConfiguration, SelectProps } from './components/PuckComponents/Inputs/Select'
import { AboutProps, PuckAboutConfiguration } from './components/PuckComponents/Sections/About'
import { HeaderProps, PuckHeaderConfiguration } from './components/PuckComponents/Sections/Header'
import { HeroProps, PuckHeroConfiguration } from './components/PuckComponents/Sections/Hero'
import { PuckTabsConfiguration, TabsProps } from './components/PuckComponents/Sections/Tabs'

type Props = {
  Button: ButtonProps
  Flex: FlexProps
  Select: SelectProps
  Icon: IconProps
  Container: ContainerProps
  Hero: HeroProps
  Header: HeaderProps
  About: AboutProps
  Tabs: TabsProps
  Section: SectionProps
  Row: RowProps
}

export const config: Config<Props> = {
  categories: {
    display: {
      components: ['Container', 'Flex', 'Section', 'Row'],
    },
    common: {
      components: [],
    },
    input: {
      components: [],
    },
    general: {
      components: ['Tabs'],
    },
    sections: {
      components: ['Hero', 'Header', 'About'],
    },
  },
  components: {
    Flex: PuckFlexConfiguration,
    Button: PuckButtoConfiguration,
    Select: PuckSelectConfiguration,
    Container: PuckContainerConfiguration,
    Hero: PuckHeroConfiguration,
    Header: PuckHeaderConfiguration,
    About: PuckAboutConfiguration,
    Tabs: PuckTabsConfiguration,
    Section: PuckSectionConfiguration,
    Row: PuckRowConfiguration,
    Icon: PuckIconConfiguration,
  },
}

export default config

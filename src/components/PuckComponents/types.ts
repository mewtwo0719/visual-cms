import { ComponentConfig, ComponentData, DefaultComponentProps } from '@measured/puck'

export type PuckConfigurationType<T extends DefaultComponentProps> = Omit<
  ComponentConfig<
    T,
    T,
    Omit<ComponentData<T, string, Record<string, DefaultComponentProps>>, 'type'>
  >,
  'type'
>

import { DragAxis } from '@measured/puck'
import { CSSProperties, ReactNode } from 'react'
type DropZoneProps = {
  zone: string
  allow?: string[]
  disallow?: string[]
  style?: CSSProperties
  minEmptyHeight?: number
  className?: string
  collisionAxis?: DragAxis
}
export type SlotComponent = (props?: Omit<DropZoneProps, 'zone'>) => ReactNode

export type Colors =
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'
  | 'white'

export type ColorWeights =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

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

import {} from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'
import { ReactElement } from 'react'
import { PuckConfigurationType } from '../types'

export interface IconProps {
  iconName: string
  iconColor: string
  iconSize: number
}

interface SvgProps {}

const icons = Object.keys(dynamicIconImports).reduce<
  Record<string, (className: string) => ReactElement>
>((acc, iconName) => {
  const El = dynamic((dynamicIconImports as any)[iconName], { ssr: false })

  return {
    ...acc,
    [iconName]: (className) => <El className={className} />,
  }
}, {})

const iconOptions = Object.keys(dynamicIconImports).map((iconName) => ({
  label: iconName,
  value: iconName,
}))

export function PuckIcon(props: IconProps) {
  const Icon = props.iconName ? icons[props.iconName] : icons['ban']
  return Icon()
}

export const PuckIconConfiguration: PuckConfigurationType<IconProps> = {
  fields: {
    iconName: {
      type: 'select',
      options: iconOptions,
    },
    iconColor: {
      type: 'text',
    },
    iconSize: {
      type: 'number',
    },
  },

  render: ({ iconName: value, iconColor: color, iconSize }: IconProps) => (
    <PuckIcon iconName={value} iconColor={color} iconSize={iconSize} />
  ),
}

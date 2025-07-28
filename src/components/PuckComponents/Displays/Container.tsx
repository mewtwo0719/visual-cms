import { PuckConfigurationType } from '../types'

export interface ContainerProps {
  content: any
  padding: number
  backgroundColor: Colors
  backgroundColorWeight: ColorWeights
}

type Colors =
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

type ColorWeights = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

export const PuckContainerConfiguration: PuckConfigurationType<ContainerProps> = {
  fields: {
    content: {
      type: 'slot',
    },
    backgroundColor: {
      type: 'select',
      options: [
        { label: 'Red', value: 'red' },
        { label: 'Orange', value: 'orange' },
        { label: 'Amber', value: 'amber' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Lime', value: 'lime' },
        { label: 'Green', value: 'green' },
        { label: 'Emerald', value: 'emerald' },
        { label: 'Teal', value: 'teal' },
        { label: 'Cyan', value: 'cyan' },
        { label: 'Sky', value: 'sky' },
        { label: 'Blue', value: 'blue' },
        { label: 'Indigo', value: 'indigo' },
        { label: 'Violet', value: 'violet' },
        { label: 'Purple', value: 'purple' },
        { label: 'Fuchsia', value: 'fuchsia' },
        { label: 'Pink', value: 'pink' },
        { label: 'Rose', value: 'rose' },
        { label: 'White', value: 'white' },
      ],
    },
    backgroundColorWeight: {
      type: 'select',
      options: [
        { label: '50', value: '50' },
        { label: '100', value: '100' },
        { label: '200', value: '200' },
        { label: '300', value: '300' },
        { label: '400', value: '400' },
        { label: '500', value: '500' },
        { label: '600', value: '600' },
        { label: '700', value: '700' },
        { label: '800', value: '800' },
        { label: '900', value: '900' },
      ],
    },

    padding: {
      type: 'number',
    },
  },
  render: ({ content: Content, padding, puck, backgroundColor, backgroundColorWeight }) => {
    return (
      <Content
        className={`${puck.isEditing && 'min-w-5 min-h-5'} bg-${backgroundColor}-${backgroundColorWeight} bg-`}
        style={{ padding: padding + 'px' }}
      />
    )
  },
}

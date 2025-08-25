import { ComponentConfig } from '@measured/puck'
import { PuckIcon } from '../Common/Icon'

export interface FlexProps {
  content: any
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  padding: number
  gapX: number
  gapY: number
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
}

export const PuckFlexConfiguration: ComponentConfig<{ props: FlexProps }> = {
  fields: {
    content: {
      type: 'slot',
    },

    direction: {
      type: 'select',
      options: [
        { value: 'row', label: 'Row' },
        { value: 'row-reverse', label: 'Row Reverse' },
        { value: 'column', label: 'Column' },
        { value: 'column-reverse', label: 'Column Reverse' },
      ],
    },
    wrap: {
      type: 'select',
      options: [
        { value: 'nowrap', label: 'No Wrap' },
        { value: 'wrap', label: 'Wrap' },
        { value: 'wrap-reverse', label: 'Wrap Reverse' },
      ],
    },
    padding: {
      type: 'number',
    },
    gapX: {
      type: 'number',
    },
    gapY: {
      type: 'number',
    },
    align: {
      type: 'select',
      options: [
        { value: 'start', label: 'Start' },
        { value: 'center', label: 'Center' },
        { value: 'end', label: 'End' },
        { value: 'stretch', label: 'Stretch' },
      ],
    },
    justify: {
      type: 'select',
      options: [
        { value: 'start', label: 'Start' },
        { value: 'center', label: 'Center' },
        { value: 'end', label: 'End' },
        { value: 'between', label: 'Space Between' },
        { value: 'around', label: 'Space Around' },
        { value: 'evenly', label: 'Space Evenly' },
      ],
    },
  },
  label: (
    <div className="bg-red-500 flex flex-col">
      Helloo <PuckIcon iconColor="blue" iconName="menu" iconSize={24} />
      <PuckIcon iconColor="blue" iconName="menu" iconSize={24} />
    </div>
  ),
  render: ({ content: Content, direction, padding, gapX, gapY, align, justify, wrap, puck }) => {
    const alignClass = align ? `items-${align}` : ''
    const justifyClass = justify ? `justify-${justify}` : ''
    const wrapClass = wrap ? `flex-${wrap}` : ''

    return (
      <Content
        className={`flex flex-${direction} ${wrapClass} ${alignClass} ${justifyClass} ${
          puck.isEditing && 'min-w-5 min-h-5'
        }`}
        style={{
          padding: `${padding}px`,
          columnGap: `${gapX}px`,
          rowGap: `${gapY}px`,
        }}
      />
    )
  },
}

import { PuckConfigurationType } from '../types'

export interface NavigationMenuProps {
  leftColumn: any
  rightColumn: any
  //   direction: 'column' | 'row'
  //   padding: number
  //   gap: number
}

export const PuckNavigationMenuConfiguration: PuckConfigurationType<NavigationMenuProps> = {
  fields: {
    leftColumn: {
      type: 'slot',
    },
    rightColumn: {
      type: 'slot',
    },
  },
  render: ({ leftColumn: LeftColumn, rightColumn: RightColumn, puck }) => {
    return (
      <div style={{ display: 'flex', gap: 16 }}>
        <div className={`${puck.isEditing && 'min-p-5'}`}>
          <LeftColumn />
        </div>
        Hellpoooooo
        <div className={`${puck.isEditing && 'min-p-5'}`}>
          <RightColumn />
        </div>
      </div>
    )
  },
}

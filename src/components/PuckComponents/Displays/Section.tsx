import { PuckConfigurationType } from '../types'

export interface SectionProps {
  Content: any
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

export const PuckSectionConfiguration: PuckConfigurationType<SectionProps> = {
  fields: {
    Content: {
      type: 'slot',
    },
  },
  render: ({ Content, puck }) => {
    return (
      <div className="section bg-green-200">
        <div className={`container bg-red-200 ${puck.isEditing ? 'w-full min-h-5 d-flex' : ''}`}>
          <Content className={`${puck.isEditing && 'min-w-5 min-h-5 p-2'}`} />
        </div>
      </div>
    )
  },
}

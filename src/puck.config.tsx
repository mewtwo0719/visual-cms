import { Card, CardHeader } from '@/components/ui/card'
import type { Config } from '@measured/puck'

type Props = {
  HeadingBlock: { title: string }
  ButtonBlock: { value: string }
  Card: {}
}

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: 'text' },
      },
      defaultProps: {
        title: 'Heading',
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    ButtonBlock: {
      fields: {
        value: { type: 'text' },
      },
      defaultProps: {
        value: 'Button',
      },
      render: ({ value }) => (
        <button className="bg-red-500 text-blue-600" style={{ padding: '5px 20px 30px 40px' }}>
          <p>{value}</p>
        </button>
      ),
    },
    Card: {
      render: ({}) => (
        <div className="col-span-4" key={312321}>
          <Card className="h-full">
            <CardHeader>Title of card</CardHeader>
          </Card>
        </div>
      ),
    },
  },
}

export default config

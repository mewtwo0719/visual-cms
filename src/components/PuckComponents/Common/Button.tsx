import { VariantProps } from 'class-variance-authority'
import { Button, buttonVariants } from '../../ui/button'
import { PuckConfigurationType } from '../types'

export interface ButtonProps {
  text: string
  variant: VariantProps<typeof buttonVariants>['variant']
}

export function PuckButton(props: ButtonProps) {
  return (
    <Button variant={props.variant} style={{ display: 'initial' }}>
      {props.text}{' '}
    </Button>
  )
}

export const PuckButtoConfiguration: PuckConfigurationType<ButtonProps> = {
  fields: {
    text: { type: 'text' },
    variant: {
      type: 'select',
      options: [
        { value: 'default', label: 'Default' },
        { value: 'destructive', label: 'Destructive' },
        { value: 'ghost', label: 'Ghost' },
        { value: 'link', label: 'Link' },
        { value: 'outline', label: 'Outline' },
        { value: 'secondary', label: 'Secondary' },
      ],
    },
  },
  defaultProps: {
    text: 'Button',
    variant: 'default',
  },
  render: ({ text, variant }: ButtonProps) => <PuckButton text={text} variant={variant} />,
}

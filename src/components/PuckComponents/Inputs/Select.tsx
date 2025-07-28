import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { PuckConfigurationType, SlotComponent } from '.././types'

export interface SelectProps {
  title: string
  placeholder: string
  items: (SlotComponent & { value: string; title: string })[]
}

export function PuckSelect(props: SelectProps) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{props.title}</SelectLabel>
          {props.items.length &&
            props.items.map((item, i) => {
              return (
                <SelectItem key={i} value={item.value}>
                  {item.title}
                </SelectItem>
              )
            })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export const PuckSelectConfiguration: PuckConfigurationType<SelectProps> = {
  fields: {
    title: { type: 'text' },
    placeholder: { type: 'text' },
    items: {
      type: 'array',
      arrayFields: { title: { type: 'text' }, value: { type: 'text' } },
    },
  },
  defaultProps: {
    title: 'Select',
    placeholder: 'Placeholder',
    items: [],
  },
  render: (props: SelectProps) => <PuckSelect {...props} />,
}

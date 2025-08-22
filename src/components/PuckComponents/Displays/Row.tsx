import { PuckConfigurationType } from '../types'
const bootstrapDisplays = [
  { value: 'd-none', label: 'None (hidden)' },
  { value: 'd-inline', label: 'Inline' },
  { value: 'd-inline-block', label: 'Inline Block' },
  { value: 'd-block', label: 'Block' },
  { value: 'd-grid', label: 'Grid' },
  { value: 'd-table', label: 'Table' },
  { value: 'd-table-row', label: 'Table Row' },
  { value: 'd-table-cell', label: 'Table Cell' },
  { value: 'd-flex', label: 'Flex' },
  { value: 'd-inline-flex', label: 'Inline Flex' },
  { value: 'd-contents', label: 'Contents' }, // Newer utility in BS5.3+
  { value: 'd-inherit', label: 'Inherit (from parent)' }, // not official, but can be custom
  { value: 'd-initial', label: 'Initial (browser default)' }, // needs custom CSS
]

export interface RowProps {
  cols: {
    Content: any
    col: number | null
    colLg: number | null
    colMd: number | null
    colSm: number | null
    display: string
  }[]
  //hiddenForPuckValueBugOnArrays: any
}

// export function PuckRow(props: RowProps) {
//   return <div className={`row ${puck.isEditing && 'min-w-5 min-h-5 d-flex'}`}></div>
// }

export const PuckRowConfiguration: PuckConfigurationType<RowProps> = {
  fields: {
    cols: {
      type: 'array',
      label: 'Columns',
      getItemSummary(item, index) {
        return `Col:${item.col}  Lg:${item.colLg || 'X'}  Md:${item.colMd || 'X'}  Sm:${item.colSm || 'X'}`
      },
      arrayFields: {
        Content: { type: 'slot' },
        col: { type: 'number', min: 1, max: 12, label: 'Default Column Size' },
        colLg: { type: 'number', min: 0, max: 12, label: 'Large Screen Column Size' },
        colMd: { type: 'number', min: 0, max: 12, label: 'Medium Screen Column Size' },
        colSm: { type: 'number', min: 0, max: 12, label: 'Small Screen Column Size' },
        display: { type: 'select', options: bootstrapDisplays },
      },
    },

    // hiddenForPuckValueBugOnArrays: {
    //   type: 'slot',
    // },
  },
  defaultProps: {
    cols: [{ col: 12, colLg: 0, colMd: 0, colSm: 0, Content: null, display: 'd-grid' }],
  },

  render: ({ cols, puck }) => {
    // const containerRef = useRef<HTMLDivElement>(null)
    // const [hasRow, setHasRow] = useState(false)

    // useEffect(() => {
    //   if (containerRef.current) {
    //     const rowElement = containerRef.current.querySelector('.row')
    //     // Matches grandchildren with `.row` (two levels deep only)
    //     // const rowElement = containerRef.current?.querySelector(':scope > * > .row')

    //     setHasRow(!!rowElement)
    //   }
    // }) // re-run if Content changes

    // const display = useMemo(() => {
    //   if (containerRef.current) {
    //     //const rowElement = containerRef.current.querySelector('.row')
    //     // Matches grandchildren with `.row` (two levels deep only)
    //     const rowElement = containerRef.current?.querySelector(':scope > .row')
    //     console.log('GGG', containerRef.current)
    //     return setHasRow(!!rowElement)
    //   }
    //   return false
    // }, [cols, puck, containerRef.current])

    return (
      <div className={`row ${puck.isEditing ? 'min-h-16 min-w-full' : ''}`}>
        {cols?.map(({ Content, col, colLg, colMd, colSm, display }, index) => (
          <div
            className={` col-${col} ${colLg ? `col-lg-${colLg}` : ''} ${colMd ? `col-md-${colMd}` : ''} ${colSm ? `col-sm-${colSm}` : ''}`}
            key={index}
          >
            {
              <Content
                className={`${display} ${puck.isEditing ? 'min-w-full' : ''} ${''}`}
                style={
                  {
                    //display: 'block ruby',
                  }
                }
              />
            }
          </div>
        ))}
      </div>
    )
  },
}

import { ComponentConfig } from '@measured/puck'
import { IconProps, PuckIcon, PuckIconConfiguration } from '../Common/Icon'

export interface TabsProps {
  tabs: ({
    label: string
    Content: any
  } & IconProps)[]
}

export function PuckTabs(props: TabsProps) {
  return (
    <div id="services" className="services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-heading  wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h6>Our Services</h6>
              <h4>
                What Our Agency <em>Provides</em>
              </h4>
              <div className="line-dec"></div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="naccs">
              <div className="grid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="menu">
                      {props.tabs?.map?.(({ label, iconName: value, Content }, index) => {
                        return (
                          <div
                            // className="first-thumb active"
                            className={`${props.active == label ? 'active' : ''} ${index === 0 ? 'first-thumb' : index === props.tabs.length - 1 ? 'last-thumb' : ''}`}
                            key={label}
                          >
                            <div className="thumb">
                              <span className="icon">
                                <PuckIcon iconColor="dsad" iconName={value} />
                              </span>
                              {label}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <ul className="nacc">
                      {props.tabs?.map?.(({ label, Content }) => {
                        return (
                          <li className={props.active == label ? 'active' : ''} key={label}>
                            <div>
                              <div className="thumb">
                                <div className="row">
                                  <Content />
                                </div>
                              </div>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const PuckTabsConfiguration: ComponentConfig<{ props: TabsProps }> = {
  //@ts-ignore
  fields: {
    tabs: {
      type: 'array',
      arrayFields: {
        ...PuckIconConfiguration.fields,
        Content: { type: 'slot' },
        label: { type: 'text' },
      },
    },
  },

  //   defaultProps: {
  //     tabs: [
  //       {
  //         icon: '/assets/images/service-icon-04.png',
  //         label: 'Apartments',
  //         Content: <div>INsert here</div>,
  //       },
  //     ],
  //     active: 'first',
  //     // highlighted: 'digital media agency',
  //     // title: 'We Boost Your Website Traffic',
  //     // description:
  //     //   'This template is brought to you by TemplateMo website. Feel free to use this for a commercial purpose. You are not allowed to redistribute the template ZIP file on any other template website. Thank you.',
  //     // action: 'Free quote',
  //   },
  render: ({ tabs, active }: TabsProps) => <PuckTabs tabs={tabs} />,
}

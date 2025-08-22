import { PuckConfigurationType } from '../types'

export interface HeaderProps {
  nav: {
    label: string
    href: string | null
  }[]
  actions: {
    label: string
    href: string | null
  }[]
}

export function PuckHeader(props: HeaderProps) {
  return (
    <header
      className="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <img src="/assets/images/logo-v1.png" alt="" />
              </a>

              <ul className="nav">
                {props.nav?.map?.((item) => (
                  <li className="scroll-to-section" key={item.href}>
                    <a href={`#${item.href}`}>{item.label}</a>
                  </li>
                ))}

                {props.actions?.map?.((item) => (
                  <li className="scroll-to-section" key={item.href}>
                    <div className="border-first-button">
                      <a href={`#${item.href}`}>{item.label}</a>
                    </div>
                  </li>
                ))}

                {/* <li className="scroll-to-section">
                  <div className="border-first-button">
                    <a href="#contact">Free Quote</a>
                  </div>
                </li> */}
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export const PuckHeaderConfiguration: PuckConfigurationType<HeaderProps> = {
  fields: {
    nav: {
      type: 'array',
      label: 'Navigation',
      getItemSummary: ({ label, href }) => `${label} (#${href})`,
      arrayFields: { label: { type: 'text' }, href: { type: 'text' } },
    },
    actions: {
      type: 'array',
      label: 'Actions',
      getItemSummary: ({ label, href }) => `${label} (#${href})`,
      arrayFields: { label: { type: 'text' }, href: { type: 'text' } },
    },
  },
  defaultProps: {
    nav: [
      {
        label: 'Home',
        href: 'top',
      },
      {
        label: 'About',
        href: 'about',
      },
      {
        label: 'Services',
        href: 'services',
      },
      {
        label: 'Portfolio',
        href: 'portfolio',
      },
      {
        label: 'Blog',
        href: 'blog',
      },
      {
        label: 'Contact',
        href: 'contact',
      },
    ],
    actions: [
      {
        label: 'Free Quote',
        href: 'contact',
      },
    ],
  },
  render: ({ nav, actions }: HeaderProps) => <PuckHeader nav={nav} actions={actions} />,
}

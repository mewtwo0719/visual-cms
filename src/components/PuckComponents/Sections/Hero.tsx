import { PuckConfigurationType } from '../types'

export interface HeroProps {
  highlighted: string
  title: string
  description: string
  action: string
}

export function PuckHero(props: HeroProps) {
  return (
    <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div
                  className="left-content show-up header-text wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <h6>{props.highlighted}</h6>
                      <h2>{props.title}</h2>
                      <p>{props.description}</p>
                    </div>
                    <div className="col-lg-12">
                      <div className="border-first-button scroll-to-section">
                        <a href="#contact">{props.action}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="right-image wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img src="/assets/images/slider-dec.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const PuckHeroConfiguration: PuckConfigurationType<HeroProps> = {
  fields: {
    highlighted: { type: 'text' },
    title: { type: 'text' },
    description: { type: 'textarea' },
    action: { type: 'text' },
  },
  defaultProps: {
    highlighted: 'digital media agency',
    title: 'We Boost Your Website Traffic',
    description:
      'This template is brought to you by TemplateMo website. Feel free to use this for a commercial purpose. You are not allowed to redistribute the template ZIP file on any other template website. Thank you.',
    action: 'Free quote',
  },
  render: ({ action, description, highlighted, title }: HeroProps) => (
    <PuckHero action={action} description={description} highlighted={highlighted} title={title} />
  ),
}

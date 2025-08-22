import { PuckConfigurationType } from '../types'

export interface AboutProps {
  highlighted: string
  title: string
  description: string
  action: string
}

export function PuckAbout(props: AboutProps) {
  return (
    <div id="about" className="about section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about-left-image  wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img src="/assets/images/about-dec.png" alt="" />
                </div>
              </div>
              <div
                className="col-lg-6 align-self-center  wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="about-right-content">
                  <div className="section-heading">
                    <h6>About Us</h6>
                    <h4>
                      Who is DigiMedia <em>Agency</em>
                    </h4>
                    <div className="line-dec"></div>
                  </div>
                  <p>
                    We hope this DigiMedia template is useful for your work. You can use this
                    template for any purpose. You may{' '}
                    <a rel="nofollow" href="http://paypal.me/templatemo" target="_blank">
                      contribute a little amount
                    </a>{' '}
                    via PayPal to{' '}
                    <a href="https://templatemo.com/contact" target="_blank">
                      support TemplateMo
                    </a>{' '}
                    in creating new templates regularly.
                  </p>
                  <div className="row">
                    <div className="col-lg-4 col-sm-4">
                      <div
                        className="skill-item first-skill-item wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                      >
                        <div className="progress" data-percentage="20">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                          <div className="progress-value">
                            <div>
                              20%
                              <br />
                              <span>Coding</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div
                        className="skill-item second-skill-item wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                      >
                        <div className="progress" data-percentage="80">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                          <div className="progress-value">
                            <div>
                              80%
                              <br />
                              <span>Photoshop</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div
                        className="skill-item third-skill-item wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0s"
                      >
                        <div className="progress" data-percentage="80">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                          <div className="progress-value">
                            <div>
                              80%
                              <br />
                              <span>Animation</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export const PuckAboutConfiguration: PuckConfigurationType<AboutProps> = {
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
  render: ({ action, description, highlighted, title }: AboutProps) => (
    <PuckAbout action={action} description={description} highlighted={highlighted} title={title} />
  ),
}

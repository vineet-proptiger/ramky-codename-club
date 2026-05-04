'use client'
import React from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const stats = [
  { value: '30+', label: 'Years of Legacy' },
  { value: '50+', label: 'Total Projects' },
  { value: '10+', label: 'Total Cities' },
]

const AboutGodrej = () => (
  <section id="about" style={{ padding: '72px 0', background: '#f5f5f5' }}>
    <div className="max-w-4xl mx-auto px-4 md:px-8" style={{ textAlign: 'center' }}>

      {/* Heading */}
      <h2
        data-aos="fade-up"
        style={{
          fontFamily: F_JOST, fontWeight: '800',
          fontSize: 'clamp(24px,3.5vw,36px)',
          color: '#1a1a1a', textTransform: 'uppercase',
          letterSpacing: '0.04em', margin: '0 0 28px',
        }}
      >
        ABOUT RAMKY GROUP
      </h2>

      {/* Description */}
      <p
        data-aos="fade-up"
        data-aos-delay="80"
        style={{
          fontFamily: F_SANS, fontSize: '14.5px',
          color: '#555555', lineHeight: 1.9,
          margin: '0 0 52px',
        }}
      >
        Established in 1994, Ramky Group is a diversified conglomerate with a strong presence in
        real estate, infrastructure, environment management and industrial parks. Headquartered in
        Hyderabad, the group has successfully delivered world-class residential and commercial
        projects across India. With decades of expertise and a customer-first approach, Ramky has
        built a reputation for quality construction, timely delivery and innovative design.
        Ramky Codename Club Class reflects the group's commitment to creating premium living
        spaces that blend modern architecture with thoughtful planning, offering residents a
        lifestyle of comfort, convenience and community.
      </p>

      {/* Stats row */}
      <div
        data-aos="fade-up"
        data-aos-delay="160"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {stats.map((s, i) => (
          <React.Fragment key={i}>
            <div style={{ padding: '0 clamp(24px,5vw,60px)', textAlign: 'center' }}>
              <p style={{
                fontFamily: F_JOST, fontWeight: '800',
                fontSize: 'clamp(30px,5vw,52px)',
                color: '#1a1a1a', margin: '0 0 6px', lineHeight: 1,
              }}>
                {s.value}
              </p>
              <p style={{
                fontFamily: F_SANS, fontSize: '13px',
                color: '#777', margin: 0, textTransform: 'uppercase',
                letterSpacing: '0.06em', fontWeight: '600',
              }}>
                {s.label}
              </p>
            </div>
            {i < stats.length - 1 && (
              <div style={{
                width: '1px', height: '60px',
                background: '#C4952A',
                flexShrink: 0,
              }} />
            )}
          </React.Fragment>
        ))}
      </div>

    </div>
  </section>
)

export default AboutGodrej

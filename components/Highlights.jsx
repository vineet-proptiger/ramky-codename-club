'use client'
import React from 'react'
import Image from 'next/image'
import { highlightsMainImage } from '../lib/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const highlights = [
  { title: 'IT Hub Proximity', sub: 'Excellent connectivity to major IT hubs' },
  { title: 'Prime Location', sub: 'Apartments near Thanisandra highly desirable' },
  { title: 'Easy Commute', sub: 'Near schools, hospitals & transport routes' },
  { title: 'Clubhouse & Amenities', sub: 'World-class clubhouse & lifestyle facilities' },
  { title: 'Landscaped Gardens', sub: 'Lush green gardens & open spaces' },
  { title: '24/7 Security', sub: 'Round-the-clock gated security' },
  { title: 'Family Community', sub: 'Modern, family-friendly living environment' },
  { title: 'Upgrade to Club-Class Living', sub: 'Because ordinary homes don’t match your ambition' },
]

const Highlights = ({ setIsOpen }) => (
  <section id="highlights" style={{ background: '#1a1a1a', padding: '0' }}>
    <div className="flex flex-col lg:flex-row" style={{ minHeight: '560px' }}>

      {/* LEFT — image */}
      <div
        className="w-full lg:w-[45%] relative"
        style={{ minHeight: '340px' }}
        data-aos="fade-right"
      >
        <Image
          src={highlightsMainImage}
          alt="Ramky Codename Club Class Highlights"
          fill
          className="object-cover"
          sizes="(max-width:1024px) 100vw, 45vw"
        />
        {/* subtle dark overlay on image */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.18)' }} />
      </div>

      {/* RIGHT — content */}
      <div
        className="w-full lg:w-[55%] flex flex-col justify-start"
        style={{ padding: '7px clamp(24px,5vw,64px) 32px' }}
        data-aos="fade-left"
      >
        <h2 style={{
          fontFamily: F_JOST, fontWeight: '800',
          fontSize: 'clamp(28px,4vw,40px)',
          color: '#ffffff', margin: '0 0 20px',
          textTransform: 'uppercase', letterSpacing: '0.04em',
        }}>
          HIGHLIGHTS
        </h2>

        {/* 2×3 card grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '14px',
          marginBottom: '36px',
        }}>
          {highlights.map((h, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              style={{
                border: '1px solid #3a3a3a',
                borderRadius: '4px',
                padding: '18px 16px',
                background: 'rgba(255,255,255,0.03)',
                transition: 'border-color 0.25s, background 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#C4952A'
                e.currentTarget.style.background = 'rgba(196,149,42,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#3a3a3a'
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
              }}
            >
              <p style={{
                fontFamily: F_JOST, fontWeight: '700', fontSize: '14px',
                color: '#ffffff', margin: '0 0 5px', letterSpacing: '0.02em',
              }}>
                {h.title}
              </p>
              <p style={{
                fontFamily: F_SANS, fontSize: '12.5px',
                color: '#aaaaaa', margin: 0, lineHeight: 1.5,
              }}>
                {h.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Enquire button */}
        <div>
          <button
            onClick={() => setIsOpen(true)}
            className="btn-gold"
            style={{ padding: '13px 36px', fontSize: '13px', letterSpacing: '0.1em' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Highlights

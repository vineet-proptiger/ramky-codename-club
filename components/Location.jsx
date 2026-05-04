'use client'


const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locations = [
  { name: 'National Public School, Thanisandra', dist: '2 KM' },
  { name: 'Columbia Asia Hospital', dist: '3 KM' },
  { name: 'Manyata Tech Park', dist: '3 KM' },
  { name: 'Esteem Mall, Hebbal', dist: '5 KM' },
  { name: 'Bangalore Int. Airport', dist: '28 KM' },
  { name: 'Hebbal Lake', dist: '5 KM' },
  { name: 'Manipal Hospital, Hebbal', dist: '5 KM' },
  { name: 'KR Puram Railway Station', dist: '10 KM' },
]

const Location = () => (
  <section id="location" style={{ padding: '72px 0', background: '#1a1a1a' }}>
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-10 items-start">

        {/* LEFT — heading + grid */}
        <div className="w-full lg:w-[42%]" data-aos="fade-right">
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '800',
            fontSize: 'clamp(24px,3.5vw,36px)',
            color: '#ffffff', textTransform: 'uppercase',
            letterSpacing: '0.04em', margin: '0 0 14px',
          }}>
            LOCATION<br />ADVANTAGES
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--color-gold)', margin: '0 0 28px', borderRadius: '2px' }} />

          {/* 2-column location boxes */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
          }}>
            {locations.map((loc, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                style={{
                  background: '#242424',
                  border: '1px solid #2e2e2e',
                  borderRadius: '4px',
                  padding: '14px 16px',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)'
                  e.currentTarget.style.background = '#2a2318'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#2e2e2e'
                  e.currentTarget.style.background = '#242424'
                }}
              >
                <p style={{
                  fontFamily: F_JOST, fontWeight: '700', fontSize: '13px',
                  color: '#ffffff', margin: '0 0 4px', letterSpacing: '0.02em',
                }}>
                  {loc.name}
                </p>
                <p style={{
                  fontFamily: F_SANS, fontSize: '12px',
                  color: 'var(--color-gold)', margin: 0, fontWeight: '600',
                }}>
                  {loc.dist}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — map */}
        <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
          <div style={{
            borderRadius: '4px', overflow: 'hidden',
            border: '1px solid var(--color-gold)',
            height: '100%', minHeight: '420px',
            position: 'relative',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d51255.141547507825!2d77.624735!3d13.058203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19e179b194b5%3A0x6bb5ac64fb789a1c!2sThanisandra%2C%20Bengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1777874167574!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, minHeight: '420px', display: 'block', filter: 'grayscale(20%)' }}
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default Location

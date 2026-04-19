import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'

const Sections = () => {
  return (
    <>
      <section>
        <h2>Section 1</h2>
        <Section1 />
      </section>
      <section>
        <h2>Section 2</h2>
        <Section2 />
      </section>
    </>
  )
}

export default Sections
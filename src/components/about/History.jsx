import React from 'react'
import Container from '../element/Container'
import SubTitle from '../element/SubTitle'
import TimeLine from '../../assets/images/Time-line_PBS.png'

export default function History() {
  return (
    <section className="my-12 py-9 px-4">
        <Container >
            <SubTitle variant="h2"> Notre histoire</SubTitle>
            
            <div className="mt-10 mb-6">
                <img src={TimeLine} alt="Photo qui raconte l'histoire de Pro Business Services" />
            </div>
        </Container>
        
    </section>
  )
}

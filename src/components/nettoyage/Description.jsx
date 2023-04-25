import React from 'react'
import Container from '../element/Container'
import SubTitle from '../element/SubTitle'
import Paragraph from '../element/Paragraph'

export default function Description() {
  return (
    <section className="my-20 px-4">
        <Container>
            <SubTitle variant="h2" className="text-center"> GARANTIR LA FIABILITÉ ET LES PERFORMANCES D’ORIGINE, ASSURER L’INTÉGRITÉ DU PROCESS : 
            UN DÉFI MAÎTRISÉ.</SubTitle>
            <div className="my-10 px-4">
                <Paragraph>
                    La société PBS démontre à nouveau son savoir-faire dans les opérations de nettoyage industriel et dépollution réalisées in situ.
                    Fort de son personnel spécialisé et habilité, la société PBS assure ainsi :
                </Paragraph>
                <ul className="list-disc">
                  <li>Une mobilisation rapide de ses équipes.</li>
                  <li>La satisfaction client par le respect des impératifs de sécurité, quelle que soit la situation technique.</li>
                  <li>Des prestations d’une qualité exemplaire.</li>
                  <li>Dans sa démarche d’amélioration continue, la société PBS participe à l’évolution des matériels de protection et de procédures d’utilisation en
                    collaboration avec divers organismes.</li>
                </ul>
            </div>
        </Container>
    </section>
  )
}

import React from 'react'
import Container from '../element/Container'
import SubTitle from '../element/SubTitle'
import Paragraph from '../element/Paragraph'
import Bouton from '../element/Bouton'
import Maintenance from '../../assets/images/maintenance.jpg'

export default function Post() {
  return (
    <section className="my-20 px-4">
        <Container>
            <div>
                <SubTitle variant="h2">Suivez notre Blog</SubTitle>
                <div className="mt-10 mb-6">
                    <Paragraph>
                        Cette page est destinée aux différents articles du blog de Pro Business Services. <br />
                        Pour le moment la base de données n'est pas encore reliée à l'interface utilisateur. <br />
                        Toutefois, nous avons ci-après, la disposition souhaitée pour l'affichage des articles.
                    </Paragraph>

                    {/* disposition des articles du blog */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">

                        {/* Post-1 */}
                        <div className="card card-compact bg-base-100 shadow-xl rounded-lg mx-auto">
                            <figure><img src={Maintenance} alt="L'image du post"/></figure>
                            <div className="card-body">
                                <SubTitle variant="h6" className="font-bold uppercase">Titre de l'article</SubTitle>
                                <Paragraph>Un estrait du contenu de l'article...</Paragraph>
                                <div className="card-actions justify-end mr-3 mb-3">
                                    <Bouton className="btn">Lire plus...</Bouton>
                                </div>
                            </div>
                        </div> 
                        {/* Post-2 */}
                        <div className="card card-compact bg-base-100 shadow-xl rounded-lg mx-auto">
                            <figure><img src={Maintenance} alt="L'image du post"/></figure>
                            <div className="card-body">
                                <SubTitle variant="h6" className="font-bold uppercase">Titre de l'article</SubTitle>
                                <Paragraph>Un estrait du contenu de l'article...</Paragraph>
                                <div className="card-actions justify-end mr-3 mb-3">
                                    <Bouton className="btn">Lire plus...</Bouton>
                                </div>
                            </div>
                        </div>
                        {/* Post-3 */}
                        <div className="card card-compact bg-base-100 shadow-xl rounded-lg mx-auto">
                            <figure><img src={Maintenance} alt="L'image du post"/></figure>
                            <div className="card-body">
                                <SubTitle variant="h6" className="font-bold uppercase">Titre de l'article</SubTitle>
                                <Paragraph>Un estrait du contenu de l'article...</Paragraph>
                                <div className="card-actions justify-end mr-3 mb-3">
                                    <Bouton className="btn">Lire plus...</Bouton>
                                </div>
                            </div>
                        </div>
                        {/* Post-4 */}
                        <div className="card card-compact bg-base-100 shadow-xl rounded-lg mx-auto">
                            <figure><img src={Maintenance} alt="L'image du post"/></figure>
                            <div className="card-body">
                                <SubTitle variant="h6" className="font-bold uppercase">Titre de l'article</SubTitle>
                                <Paragraph>Un estrait du contenu de l'article...</Paragraph>
                                <div className="card-actions justify-end mr-3 mb-3">
                                    <Bouton className="btn">Lire plus...</Bouton>
                                </div>
                            </div>
                        </div>
                        {/* Post-5 */}
                        <div className="card card-compact bg-base-100 shadow-xl rounded-lg mx-auto">
                            <figure><img src={Maintenance} alt="L'image du post"/></figure>
                            <div className="card-body">
                                <SubTitle variant="h6" className="font-bold uppercase">Titre de l'article</SubTitle>
                                <Paragraph>Un estrait du contenu de l'article...</Paragraph>
                                <div className="card-actions justify-end mr-3 mb-3">
                                    <Bouton className="btn">Lire plus...</Bouton>
                                </div>
                            </div>
                        </div>
                        {/* Post-6 */}
                        <div className="card card-compact bg-base-100 shadow-xl rounded-lg mx-auto">
                            <figure><img src={Maintenance} alt="L'image du post"/></figure>
                            <div className="card-body">
                                <SubTitle variant="h6" className="font-bold uppercase">Titre de l'article</SubTitle>
                                <Paragraph>Un estrait du contenu de l'article...</Paragraph>
                                <div className="card-actions justify-end mr-3 mb-3">
                                    <Bouton className="btn">Lire plus...</Bouton>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

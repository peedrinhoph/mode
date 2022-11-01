import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

function AboutUs() {
    const [scroll, setScroll] = useState('hidden');
    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY < 60) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);
    return (
        <div id="page-about" className="container ">
            <PageHeader logoAnimation={scroll}></PageHeader>
            <main>
                <div id="page-about-content">
                    <div className="section-about">
                        <div className="section-about-title">
                            <h2>Política de Privacidade</h2>
                            <p>
                                A sua privacidade é importante para nós. É política da Mode Móveis respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Mode Móveis, e outros sites que possuímos e operamos.
                                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.
                                Fazemos por meios justos e legais, com o seu conhecimento e consentimento.
                                Também informamos por que estamos coletando e como será usado.
                                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                                O nosso site pode ter links para sites externos que não são operados por nós.
                                Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                                O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.
                                Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
                            </p>
                        </div>
                        <div className="section-about-title">
                            <h2>Política de Cookies Mode Móveis</h2>
                        </div>
                        <div className="section-mv">
                            <div className="section-m">
                                <h3>O que são cookies?</h3>
                                <p>Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos conjuntos de dados armazenados no dispositivo do utilizador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.</p>
                            </div>
                            <div className="section-m">
                                <h3>Como usamos os cookies?</h3>
                                <p>Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados ​​para fornecer um serviço que você usa.</p>
                            </div>
                            <div className="section-m">
                                <h3>Desativar cookies?</h3>
                                <p>Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.</p>
                            </div>
                        </div>
                        <div className="section-about-title">
                            <h2>Cookies que definimos</h2>
                        </div>
                        <div className="section-mv">
                            <div className="section-m">
                                <h3>Cookies de preferências do site</h3>
                                <p>Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências.</p>
                            </div>
                            <div className="section-m">
                                <h3>Cookies relacionados a formulários</h3>
                                <p>Quando você envia dados por meio de um formulário como os encontrados nas páginas de contato ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.</p>
                            </div>
                        </div>
                        <div className="section-about-title">
                            <h2>Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.</h2>
                        </div>
                        <div className="section-mv">
                            <div className="section-m">
                                <h3>Google Analytics</h3>
                                <p>Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis da web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.</p>
                            </div>
                            <div className="section-m">
                                <p>As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você.</p>
                            </div>
                        </div>
                        <div className="section-about-title">
                            <h2>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</h2>
                        </div>
                        <div className="section-about-link">
                            <Link>Política de privacidade – revista em 01 de novembro 2022</Link>
                        </div>
                    </div>
                </div>
            </main>
            <PageFooter />
        </div>
    )
}

export default AboutUs;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

import Image1 from '../../assets/images/products/mesacentroxenia.jpg';
import Image2 from '../../assets/images/products/IMG_0320.jpg';
import Image3 from '../../assets/images/products/costelaferro2.jpg';
import Image4 from '../../assets/images/products/acabamentos/vidro/MARMORIZADO-BAMBU-CLARO.jpg';
import Image5 from '../../assets/images/products/acabamentos/vidro/MARMORIZADO-OLIVEIRA-CLARA.jpg';
import Image6 from '../../assets/images/products/acabamentos/vidro/nero.jpg';
//import Aspas from '../../assets/images/icons/aspas.svg';
//import Project from '../../assets/images/icons/project.svg';
//import Pencil from '../../assets/images/icons/pencil.svg';
//import Selo from '../../assets/images/icons/selo.svg';

import Sol from '../../assets/images/icons/evitar-sol-umidade.png';
import Quimicos from '../../assets/images/icons/produtos-quimicos.png';
import Flanela from '../../assets/images/icons/flanela-umedecida.png';

import './styles.css';

function Inicio() {
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
        <div id="page-start" className="container ">
            <PageHeader colorTransparent={scroll} logoAnimation={scroll}></PageHeader>
            <main>
                <div id="page-start-content">
                    <div className="section-transition-image">
                        <div className="section-transition-description">
                            {/*<h1>
                                    Toda a sofisticação e inovação idealizados <br />em diferentes projetos
                                </h1>*/}
                            <h1>
                                <span>Inovação.</span>
                                <span>Qualidade.</span>
                                <span>Sofisticação.</span>
                            </h1>
                            {/*<div className="section-contact-link">
                                    <Link to="contact">Contate-nos</Link>
                                </div>*/}
                        </div>
                    </div>
                    <div className="section-90-vw">
                        <div className="section-title">
                            <h2 className="section-title-text">novos produtos</h2>
                        </div>
                        <div className="section-product">
                            <figure>
                                <img src={Image1} alt="product" className="zoom" />
                            </figure>
                            <figure>
                                <img src={Image2} alt="product" className="zoom" />
                            </figure>
                            <figure>
                                <img src={Image3} alt="product" className="zoom" />
                            </figure>
                        </div>
                        <div className="section-ver-mais">
                            <Link to="portfolio">produtos</Link>
                        </div>
                    </div>
                    <div className="section-90-vw">
                        <div className="section-title">
                            <h2 className="section-title-text">novos acabamentos</h2>
                        </div>
                        <div className="section-product">
                            <figure>
                                <img src={Image4} alt="product" className="zoom" />
                            </figure>
                            <figure>
                                <img src={Image5} alt="product" className="zoom" />
                            </figure>
                            <figure>
                                <img src={Image6} alt="product" className="zoom" />
                            </figure>
                        </div>
                        <div className="section-ver-mais">
                            <Link to="acabamento/show-more/glass">vidros marmorizados</Link>
                        </div>
                    </div>
                    <div className="section-background-image">
                        <h1 className="section-background-image-title">dúvidas frequentes</h1>
                        <div className="section-comment">
                            <div className="section-comment-block">
                                <div className="section-comment-text">
                                    <h3>Orçamento</h3>
                                    <p>
                                        Faça seu orçamento sem compromisso algum, basta preencher o formulário indicado na página CONTATO e iniciar uma conversa com nosso comercial através do WhatsApp,
                                        ou se preferir, envie-nos um e-mail para comercial@modemoveis.com.br com o código e quantidade dos produtos que deseja, em até 24 horas lhe retornaremos.
                                    </p>
                                </div>
                            </div>
                            <div className="section-comment-block">
                                <div className="section-comment-text">
                                    <h3>Fabricação</h3>
                                    <p>
                                        Seu pedido é direto na fabrica, a produção fica entre 20 a 30 dias a contar da data de confirmação do pagamento, podendo ser antecipada.
                                        O seu produto será despachado em até 3 dias úteis após a finalização e analise de qualidade das peças.
                                    </p>
                                </div>
                            </div>
                            <div className="section-comment-block">
                                <div className="section-comment-text">
                                    <h3>Porque esse prazo</h3>
                                    <p>
                                        Precisamos deste tempo para uma produção coerente com a qualidade desejada.
                                        Nossa linha de produtos demandam um trabalho bastante manual e exclusivo aos nossos clientes.
                                    </p>
                                </div>
                            </div>
                            {/* <div className="section-comment-block">
                                <div className="section-comment-text">
                                    <h3>Aprovação do pedido</h3>
                                    <p>
                                        - Boleto Bancário em até 48 horas.
                                        <br />- Cartão de Crédito em até 24 horas.
                                        <br />- Débito em Conta ou Ted em até 4 horas.
                                        <br />- PIX em até 2 horas.
                                    </p>
                                </div>
                            </div> */}
                            <div className="section-comment-block">
                                <div className="section-comment-text">
                                    <h3>Entrega</h3>
                                    <p>
                                        O prazo de entrega varia conforme a região, CEP e meio de transporte optado para o envio.
                                    </p>
                                </div>
                            </div>
                            <div className="section-comment-block">
                                <div className="section-comment-text">
                                    <h3>Entrega por correios</h3>
                                    <p>
                                        Quando optado pelo sistema dos Correios, você será informado do código para rastrear sua encomenda através do WhatsApp, assim que ela for postada.
                                    </p>
                                </div>
                            </div>
                            <div className="section-comment-block">
                                <div className="section-comment-text">
                                    <h3>Entrega por transportadora</h3>
                                    <p>
                                        O frete sempre será orçado antes da aprovação do pedido. 
                                        A entrega será realizada somente entre segunda a sexta-feira, das 08h às 18:00h sem a possibilidade de agendamento, com exceção de feriados. 
                                        O pedido poderá ser recebido por um responsável, mediante a assinatura do comprovante de entrega.
                                    </p>
                                </div>
                            </div>
                            {/* <div className="section-comment-block">
                                <div className="section-comment-text">
                                    <h3>Devoluções ou Trocas</h3>
                                    <p>
                                        Trabalhamos bastante para que você Ame seu produto Mode. Mas, se ainda assim você não ficou satisfeito, a gente resolve.
                                        Entre em contato com nosso Comercial através do e-mail comercial@modemoveis.com.br ou se preferir via WhatsApp +55 (54) 9 97024574 descrevendo o motivo da solicitação.
                                    </p>
                                </div>
                            </div> */}
                            {/* <div className="section-comment-block">
                                <div className="section-comment-text">
                                    <h3>Desistência da compra</h3>
                                    <p>
                                        Solicitar o cancelamento do pedido em até 48 horas corridos da data solicitada. 
                                        Será restituído o valor do produto no prazo de até 10(dez) dias úteis.
                                        <br /><i><small>Importante: Uma vez que a compra for efetuada, nos fica claro que você cliente Aceita/Concorda com a nossa forma de trabalho, nos reservando todos os direitos.</small></i>
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/*<div className="section-90-vw">
                        <div className="section-title">
                            <h2 className="section-title-text">Porque nos escolher</h2>
                        </div>
                        <div className="section-product">
                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src={Project} alt="asdas" />
                                    <h3>Do projeto à execução</h3>
                                </div>
                                <p>
                                    A fase principal consiste em entender as necessidades do nosso cliente, sendo esse o primeiro passo na elaboração de um produto.
                                    À partir daí, acrescentamos nossa competência técnica para executar tudo e deixar do jeitinho que imaginamos.
                                </p>
                            </div>

                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src={Selo} alt="asdas" />
                                    <h3>Materiais de primeira</h3>
                                </div>
                                <p>
                                    A fabricação de móveis de aço carbono oferece maior resistência, durabilidade e valor estético aos produtos,
                                    mas pode proporcionar ainda outros benefícios, pois o aço carbono proporciona um visual moderno e arrojado para os ambientes em que é utilizado.
                                </p>
                            </div>

                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src={Pencil} alt="asdas" />
                                    <h3>Atenção aos detalhes</h3>
                                </div>
                                <p>
                                    Todas as peças prontas passam por uma avaliação na qualidade das dobras e soldas feitas para unir os materiais antes de passar para o revestimento eletrostático.
                                </p>
                            </div>
                        </div>
                        <div className="section-contact-link section-contact-black-link">
                            <Link to="about-us">Quem somos</Link>
                        </div>
                    </div>*/}
                    <div className="section-90-vw">
                        <div className="section-title">
                            <h2 className="section-title-text">cuidados para uma boa conservação do móvel</h2>
                        </div>
                        <div className="section-product">
                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src={Sol} alt="asdas" />
                                    <h3>Tempo</h3>
                                </div>
                                <p>Evitar expor a luminosidade excessiva do sol pois pode deixar o móvel descolorido, a não ser que você esteja procurando um efeito envelhecido.
                                    E principalmente mantenha longe da água, umidade também é prejudicial a sua conservação.</p>
                            </div>

                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src={Quimicos} alt="asdas" />
                                    <h3>Químicos</h3>
                                </div>
                                <p>Evitar útilizar álcool ou produtos químicos, pois muitos produtos de limpeza são abrasivos e podem manchar ou até arranhar o móvel.</p>
                            </div>

                            <div className="section-project">
                                <div className="section-project-title">
                                    <img src={Flanela} alt="asdas" />
                                    <h3>Limpeza</h3>
                                </div>
                                <p>Para limpeza sempre utilize uma flanela "aquelas laranjas" seca ou levemente umedecida em água com sabão neutro, é o mais indicado, contanto que você seque muito bem depois.</p>
                            </div>
                        </div>
                    </div>
                    {/*<div className="section-background-image">
                        <h1 className="section-background-image-title">Depoimentos</h1>
                        <div className="section-comment">
                            <div className="section-comment-block">
                                <img id="icon-img" src={Aspas} alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>
                            </div>
                            <div className="section-comment-block">
                                <img id="icon-img" src={Aspas} alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>

                            </div>
                            <div className="section-comment-block">
                                <img id="icon-img" src={Aspas} alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>
                            </div>
                            <div className="section-comment-block">
                                <img id="icon-img" src={Aspas} alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>
                            </div>
                            <div className="section-comment-block">
                                <img id="icon-img" src={Aspas} alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>

                            </div>
                            <div className="section-comment-block">
                                <img id="icon-img" src={Aspas} alt="asdas" />
                                <div className="section-comment-text">
                                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>Pedro Pereira</h3>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                    <div className="section-why">
                        <h1 className="section-why-title">móveis de aço</h1>
                        <div className="section-why-grid">
                            <div className="section-why-text">
                                <p>
                                    Durabilidade, design e modernidade: Dentre as vantagens dos móveis de aço carbono é possível encontrar uma
                                    grande variedade de peças que possam contribuir de forma funcional e agradável
                                    todos os ambientes residenciais e corporativos, como por exemplo: mesas de jantar,
                                    de escritório, de centro, aparadores, prateleiras e estantes, entre outras inúmeras peças.<br /><br />
                                    Nos últimos tempos tem ganhado muito espaço na decoração de ambientes onde partiram de espaços indústriais ou comerciais
                                    e foram para dentro das casas e empresas com uma proposta visual mais moderna e arrojada nos ambientes em que são utilizados.<br /><br />

                                    São móveis trabalhados em chapas e tubos de aço com diversas espessuras de modo a suportar diferentes
                                    cargas de peso e seu processo de pintura utiliza o sistema eletrostática epóxi a pó (técnica que garante alta resistência à umidade
                                    e produtos químicos, alta durabilidade e resistência à abrasão). Além disso, as peças são disponibilizadas em cores variadas para
                                    combinar com qualquer ambiente, o que faz desses móveis uma alternativa prática e com um ótimo custo/benefício.
                                </p>
                            </div>
                        </div>
                        <div className="section-contact-link">
                            <Link to="about-us">quem somos</Link>
                        </div>
                    </div>
                </div>
            </main>
            {scroll && <span id="mouse"></span>}
            <PageFooter />
        </div>
    )
}

export default Inicio;
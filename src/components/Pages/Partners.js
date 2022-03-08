import React from "react";
import Layout from "../template/Layout";
import classesCommon from "./stylesheet/Common.module.css";
import classes from "./stylesheet/Partners.module.css";
import PartnerTitle from "../atoms/PartnerTitle";
import PartnerText from "../atoms/PartnerText";

const Partners = () => {
  return (
    <div data-testid="partners">
      <Layout>
        <div className={`${classesCommon.form} ${classes.formPartners}`}>
          <div className={classes.partner}>
            <PartnerTitle>IFPB Campus Campina Grande</PartnerTitle>
            <div className={classes.row}>
              <img
                className={classes.partnerImg}
                src={"https://juntosifpb.herokuapp.com/img/logoIFPB.png"}
                alt="logoIFPB"
              ></img>
              <PartnerText>
                O Instituto Federal da Paraíba - IFPB é uma autarquia federal
                vinculada ao Ministério da Educação e Cultura - MEC. Referência
                em ensino profissional no estado da Paraíba, o IFPB conta com 21
                unidades espalhadas em todo estado, entre campus, campus
                avançado e campus em fase de implantação. As unidades em fase de
                implantação são gerenciadas pela Reitoria, que tem sede na
                capital, João Pessoa. O IFPB oferece diversos cursos presenciais
                e a distância, nas modalidades integrado ao ensino médio,
                subsequente, superior e pós-graduação. Todos gratuitos. Tem a
                missão de ofertar a educação profissional, tecnológica e
                humanística em todos os seus níveis e modalidades por meio do
                Ensino, da Pesquisa e da Extensão, na perspectiva de contribuir
                na formação de cidadãos para atuarem no mundo do trabalho e na
                construção de uma sociedade inclusiva, justa, sustentável e
                democrática.
              </PartnerText>
            </div>
          </div>
          <div className={classes.partner}>
            <PartnerTitle>
              GCOMPI - Grupo de Pesquisa em Comunicações e Processamento de
              Informação
            </PartnerTitle>
            <div className={classes.row}>
              <img
                className={classes.partnerImg}
                src={
                  "https://avatars.githubusercontent.com/u/55359413?s=280&v=4"
                }
                alt="GCompi logo"
              ></img>
              <PartnerText>
                O Grupo de Pesquisa em Comunicações e Processamento de
                Informação — GComPI foi criado em 2018 e conta atualmente com
                cerca de 15 pesquisadores, entre professores e alunos. O grupo
                atua em projetos de pesquisa e desenvolvimento em áreas
                relacionadas a sistemas de comunicações e processamento de
                informação, como redes de sensores sem fio, sistemas de Internet
                das Coisas (IoT), redes cognitivas, sistemas distribuídos,
                processamento de sinais e análise de dados. O grupo possui
                parcerias com universidades brasileiras e estrangeiras,
                realizando projetos de pesquisa em conjunto e co-orientações em
                programas de pós-graduação de instituições parceiras. O GCOMPI
                tem por finalidade gerar conhecimento e desenvolver soluções nas
                áreas de comunicações, processamento de informação e áreas
                relacionadas, além de compartilhar o conhecimento gerado, em
                parcerias técnico-científicas com entidades públicas ou
                privadas. As atividades devem combinar a pesquisa acadêmica e o
                desenvolvimento de tecnologia de ponta. Além disso, faz parte da
                missão do grupo o ensino e a formação de profissionais
                capacitados para atuação nas áreas científicas e de
                desenvolvimento tecnológico.
              </PartnerText>
            </div>
          </div>
          <div className={classes.partner}>
            <PartnerTitle>
              UFERSA - Universidade Federal Rural do Semi-Árido
            </PartnerTitle>
            <div className={classes.row}>
              <img
                className={classes.partnerImg}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/2/2e/BrasaoUfersa.png"
                }
                alt="UFERSA logo"
                width="120px"
              ></img>
              <PartnerText>
                A Universidade Federal Rural do Semi-Árido – UFERSA, Instituição
                Federal de Ensino Superior com sede e fórum na cidade de
                Mossoró, estado do Rio Grande do Norte – criada pela Lei nº
                11.155 de 29 de julho de 2005 por transformação da Escola
                Superior de Agricultura de Mossoró – ESAM, criada em 18 de abril
                de 1967 através do Decreto nº 03/67, incorporada à rede federal
                de ensino superior pelo Decreto nº 1.036, de 21 de outubro de
                1969, é pessoa jurídica de direito público, dotada de autonomia
                didático-científico, financeira, administrativa e disciplinar,
                regendo-se pela legislação federal, por este estatuto, pelo
                regimento e pelas resoluções e normas emanadas dos respectivos
                Conselhos Superiores. A missão da UFERSA é produzir e difundir
                conhecimentos no campo da educação superior, com ênfase para a
                região Semiárida brasileira, contribuindo para o desenvolvimento
                sustentável e o exercício pleno da cidadania, mediante formação
                humanística, crítica e reflexiva, preparando profissionais
                capazes de atender demandas da sociedade.
              </PartnerText>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Partners;

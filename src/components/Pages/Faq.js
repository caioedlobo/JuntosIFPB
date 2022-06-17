import { Typography } from '@mui/material';
import React from 'react'
import Layout from '../template/Layout'
import classesCommon from "./stylesheet/Common.module.css";

import FaqAccordion from '../molecules/FaqAccordion';
import image from "../../assets/faq_undraw.svg";
const Faq = () => {
  return (
    <Layout>
        <div className={`${classesCommon.form}`} style={{width: "80%", padding: "30px"}}>
            <div style={{
                display: "flex", 
                width: "500px", 
                flexDirection: "column", 
                textAlign: "center"
                }}>
            <img src={image} alt="faq" style={{width: "100%", marginBottom: "50px"}}></img>
            <Typography variant='h4'>FAQ</Typography>
            </div>
        <div>
       <FaqAccordion>
        {"Qual o objetivo do sistema Juntos pelo IFPB?"}
        {"Possui o objetivo de universalizar o acesso para toda a comunidade do IFPB e descentralizar o reporte de demandas buscando construir um sistema de gestão colaborativa. Essa descentralização ocorre ao evitar que o requisitante necessite dirigir-se ao setor responsável pela sua demanda. Além disso, otimiza o tempo para o setor responsável que ao invés de realizar reuniões com todos os sujeitos que tiverem requisições, que porventura possam até ser iguais, pode verificar o sistema. E, além disso, o requisitante não dependerá de docentes e técnicos-administrativos para realizar sua demanda."}
       </FaqAccordion>
         <FaqAccordion>
            {"É necessário cadastrar meu CPF? É seguro?"}
            {"O CPF é necessário apenas para contas dos funcionários terceirizados no IFPB e isto se deve ao fato de que os usuários terceirizados não possuem vinculos de contato com a Instituição, sendo assim mais complicada a validação de conta para uso de um funcionário terceirizado. Neste caso, o CPF é utilizado pelo banco de dados para validar os dados do terceirizado a ser cadastrado e comparar com os dados fornecidos pela empresa terceirizada para validar o funcionário. O sistema Juntos pelo IFPB preza pela privacidade de cada usuário, não divulgando nenhum dado a respeito do mesmo para que não sejam violadas as leis brasileiras. O sistema utiliza o hash para alterar os caracteres e, de certa forma, oculta-los diretamente para que não possam ser visualizados e posteriormente quando necessário realizar comparações para comprovação de validade."}
         </FaqAccordion>

     <FaqAccordion>
        {"Como faço meu cadastro?"}
        {'Ao entrar na página do sistema Juntos pelo IFPB, caso não esteja na opção correta, clique na aba "Entrar" e irá aparecer uma caixa mais à direita com os campos de login. Clique no botão "Não possui conta? Registre-se". Neste ponto você deve selecionar qual a categoria pertencente e clique em "Continuar", em seguida você deve digitar os dados requeridos para a criação da conta. Ao término será enviado no e-mail cadastrado um link clicável, clique para realizar a verificação da conta e após isso pode entrar na sua conta normalmente.'}
        </FaqAccordion>

      
      <FaqAccordion>
        {"Como reporto uma demanda?"}
        {'Para criar uma demanda é necessário estar logado. Ao realizar o login clique no botão "Ranking", caso não esteja na pagina correspondente, e no canto inferior direito clique no botão "Adicionar" e será exibida uma caixa de preenchimento da demanda. Preencha os campos requeridos e clique no botão "Enviar".'}
      </FaqAccordion>
      <FaqAccordion>
        {"Todos os usuários terão as mesmas permissões? (Ex: mudar status da demanda)"}
        {'Cada tipo de usuário possui apenas a permissão correspondente à sua determinada categoria, ou seja, um usuário acadêmico não possui as mesmas permissões que os funcionários terceirizados.'}
      </FaqAccordion>
      <FaqAccordion>
        {"Como trocar o nome de usuario?"}
        {'Ao realizar o login, clique no botão "Conta" e ao redirecionar aparecerá na sua tela a aba "Alterar dados". Nesta aba você digitará no campo "Nome" a alteração desejada, e no campo "Senha" digite a sua senha atual. Ao clicar em "Salvar alterações", estando sua senha correta, o sistema prosseguirá com a a alteração do seu nome.'}
      </FaqAccordion>
      <FaqAccordion>
        {"Posso excluir a minha conta?"}
        {'Com a conta logada, clique no botão "Conta" e em seguida na aba "Excluir conta", após isso será necessário digitar sua senha e clicar no botão "Excluir" e sua conta será excluida.'}
      </FaqAccordion>
      <FaqAccordion>
        {"Posso enviar uma demanda de forma anônima? Posso alterar esta opção após enviar a demanda?"}
        {'Sim, é possivel enviar demandas de forma anônima desde que, no momento de criação da demanda, seja marcada a caixa com a opção "Enviar anonimamente" antes de clicar no botão "Enviar". E não é possivel alterar este modo após o envio da demanda.'}
      </FaqAccordion>
      <FaqAccordion>
        {"Como entrar em contato com os administradores do sistema Juntos pelo IFPB?"}
        {'Na página do sistema Juntos pelo IFPB há uma aba com o nome "Contato". Nesta aba, contato, é possivel entrar em contato direto com o administrador do sistema apenas digitando seu e-mail de contato e a respectiva mensagem desejada.'}
      </FaqAccordion>
      <FaqAccordion>
        {"Se eu reportar anonimamente, ainda assim, posso ser vinculado à demanda?"}
        {'No reporte anônimo somente o próprio usuário, que criou a demanda, consegue visualizar a vinculação da demanda.'}
      </FaqAccordion>
      <FaqAccordion>
        {"Como recuperar minha conta?"}
        {'Ao entrar na página do sistema Juntos pelo IFPB, caso não esteja na opção correta, clique na aba "Entrar" e irá aparecer uma caixa mais à direita com os campos de login. Clique no botão "Esqueceu sua senha? Clique aqui" e aparecerá um campo para digitar o e-mail correspondente à sua conta, em seguida será enviado no e-mail digitado um link clicável para realizar a recuperação de senha. Ao clicar no link, que estará autenticando você, você será direcionado para uma página de preenchimento de sua nova senha, prossiga com a recuperação. Ao término será possivel realizar o login com a sua nova senha.'}
      </FaqAccordion>
      <FaqAccordion>
        {"Pessoas não vinculadas à instituição podem usar o sistema?"}
        {'Na fase atual de desenvolvimento, o sistema é restrito à comunidade do IFPB campus Campina Grande.'}
      </FaqAccordion>
      <FaqAccordion>
        {"É possivel saber quais usuários estão apoiando as demandas?"}
        {'Não é possível saber o nome dos usuários que apoiam as demandas, apenas é possível visualizar a quantidade de apoios através da página de Ranking.'}
      </FaqAccordion>
      <FaqAccordion>
        {"Como ver as demandas que enviei?"}
        {'Ao estar logado no sistema, clique no botão "Conta" e em seguida na aba "Minhas Contribuições". Nesta aba estarão todas as demandas enviadas por você.'}
      </FaqAccordion>
      <FaqAccordion>
        {"Como encontrar determinadas demandas?"}
        {'Na página de Ranking estão disponiveis alguns filtros para ordenação e melhor visualização das demandas. Na página existe uma barra de pesquisa na qual é possivel digitar o nome da demanda a ser buscada, ou até mesmo parte do nome caso não lembre o nome inteiro, e as demandas correspondentes ao valor digitado serão exibidas.'}
      </FaqAccordion>
      <FaqAccordion>
        {"Posso criar uma demanda sem estar logado?"}
        {'O serviço de criação de demandas é exclusivo para usuários logados no sistema.'}
      </FaqAccordion>
      <FaqAccordion>
        {"Posso excluir uma demanda que reportei?"}
        {'Não, somente o administrador tem a permissão de excluir demandas.'}
      </FaqAccordion>
      <FaqAccordion>
        {"Só posso acessar o sistema dentro do IFPB - CG?"}
        {'Não, o sistema pode ser acessado de qualquer lugar, com acesso a internet, mas o usuário precisa pertencer a comunidade do IFPB.'}
      </FaqAccordion>
        </div>
        </div>
    </Layout>
  )
}

export default Faq
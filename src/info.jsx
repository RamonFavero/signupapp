import React from 'react';


function Info(props) {

  return (
    <div className="info-box onvisibleSlideRight">
    <h1>Atenção</h1>
    <span>Este site não faz checagem de Email existente, por isso utilize apenas Emails e senhas falsas, </span>
    <span><b>exemplo</b>: <i>email:123@456.com senha:123</i></span>
    <span><b>Para fazer Login</b> você deve acessar a área de registro, feito isso você deve logar.</span>
    <span><b>Tenha em mente</b> que o login <b>não</b> é salvo sem SQL, ao atualizar a pagina seu login será apagado.</span>
    </div>
  );
}

export default Info;
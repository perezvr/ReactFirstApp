import styled, { keyframes, css } from 'styled-components';

/**
 * Forma de definir escopo da estilização somente para o componente desejado
 * Exporta um h1 estilizado
 */
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  /* Componentes alinhados horizontalmente */
  flex-direction: row;

  input {
    /*Ocupa todo espaço disponível */
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

/* definindo uma estilização de rotação */
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  /* Atributo do component button */
  type: 'submit',
  /* Criando uma proprieddade 'disabled' a partir da propriedade 'loading' */
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  /* Centraliza os componentes alinhados */
  display: flex;
  flex-direction: center;
  align-items: center;

  /* Trata a estilização do componente quando a propriedade 'disabled' = true */
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Aplicando uma estilização de rotação baseado na prop 'loading' */
  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span {
      flex: 1;
    }

    /* Aplica estilização em todos os itens menos no primeiro */
    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #7159c1;
      text-decoration: none;
    }

    button {
      border: 0;
      background: #fff;
      color: #7159c1;
      margin-left: 10px;
    }
  }
`;

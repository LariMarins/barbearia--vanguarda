import { LitElement, html, css } from "lit";
import { nav } from "../../main";

export class Rodape extends LitElement {
  static styles = [
    css`
      :host {
        display: block;

        color: white;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 2rem;
        font-size: 0.5rem;

        background-color: color-mix(in srgb, black 40%, var(--tom3));
        font-family: var(--fonte-titulo);

      }

      footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
        background-color: color-mix(in srgb, black 20%, var(--tom3));
      }

      nav {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        opacity: 0.9;
        align-items: flex-end;
      }

      app-logo {
        width: 4rem;
        height: 4rem;
        background-color: white;
        opacity: 0.9;
      }

      a, button {
        color: white;
        text-decoration: none;
        font-family: var(--fonte-titulo);
        font-size: 0.75rem;
      
        cursor: pointer;
        transition: 300ms;
      }
      a:hover, button:hover{
        color: var(--tom1)
      }

      a:active, button:active{
        color: var(--cor-primaria)
      }

      button {
        padding: 0;
        border: 0;
        background: transparent;
      }

      @media (min-width: 1024px) {
        :host {
          border-radius: 2rem 2rem 0 0;
          overflow: hidden
        }
      }
    `,
  ];

  rolarContato(){
    return nav.rolarPara('#contato')
  }

  rolarUnidade(){
    return nav.rolarPara('#unidade')
  }

  render() {
    return html`
      <footer>
        <app-logo></app-logo>

        <nav>
          <button @clixk=${this.rolarUnidade}>Unidades</button>
          <button @click=${this.rolarContato}>Contato</button>
          <a href="serviço">Serviços</a>
          <a href="a-barbearia">A Barbearia</a>
          <a href="/">Home</a>
        </nav>
      </footer>

      <span>
        © Barbearia Vanguarda - Todos os direitos reservados desde 2023.
      </span>
    `;
  }
}
customElements.define("app-rodape", Rodape);

import { LitElement, html, css } from "lit";
import { section } from "../styles/sectioon-style";

export class ABarbeariaSections extends LitElement {
  static styles = [
    section,
    css`
      :host {
        justify-content: space-between;
        align-items: flex-start;
      }

      article {
        display: flex;
        padding: 8px 12px 0px 0px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;

        background: var(--tom1, #ead8c7);
      }

      app-paragrafo {
        width:270px;
       
        color: var(--cor-secundaria, #665e57);
        text-align: justify;
        font-family: var(--fonte-corpo);
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 22.4px */
        letter-spacing: -1.28px;
      }
    `,
  ];

  render() {
    return html`
      <app-titulo> A Barbearia</app-titulo>
      <article>
        <app-paragrafo>
          Bem-vindo à Barbearia Vanguarda, onde tradição e inovação se encontram
          para proporcionar cortes de cabelo e barbas impecáveis. Com uma equipe
          de barbeiros especializados, combinamos técnicas tradicionais com as
          últimas tendências, garantindo um atendimento personalizado em um
          ambiente acolhedor.
        </app-paragrafo>
        <app-botao>Leia mais</app-botao>
      </article>
    `;
  }
}
customElements.define("a-barbearia-sections", ABarbeariaSections);

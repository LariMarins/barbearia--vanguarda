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

        border: 3px solid;
        border-image-source: linear-gradient(
          90deg,
          rgba(102, 78, 56, 0) 50%,
          rgba(102, 78, 56, 1) 100%
        );
        border-image-slice: 1;

        border-left: 0;
        border-bottom: 0;
      }

      app-paragrafo {
        width: 270px;

        
        text-align: justify;
        line-height: 140%; /* 22.4px */
        letter-spacing: -1.424px;
      }

      app-quadro {
        width: 335px;
        height: 335px;
        border-radius: 100%;

        position: absolute;
        right: -82px;
        top: 106px;
        z-index: -10;
      }
      app-bolinhas {
        display: flex;
        width: 300px;
        height: 300px;
        align-items: flex-start;
        gap: 10px;
       
        position: absolute;
        left: -150px;
        top: 72px;
        z-index:-20;

        --cor-bolinha: var(--tom3);
      }

      img{
        width:100%;
      }

      app-botao{
        display: var(--display-botao);
      }
    `,
  ];

  render() {
    return html`
      <app-titulo> A Barbearia</app-titulo>
      <app-bolinhas></app-bolinhas>
      <app-quadro>
        <img src="../../public/a-barbearia.jpg" alt= " a-barbearia">
      </app-quadro>
      <article>
        <app-paragrafo>
          Bem-vindo à Barbearia Vanguarda, onde tradição e inovação se encontram
          para proporcionar cortes de cabelo e barbas impecáveis. Com uma equipe
          de barbeiros especializados, combinamos técnicas tradicionais com as
          últimas tendências, garantindo um atendimento personalizado em um
          ambiente acolhedor.
        </app-paragrafo>
        <app-botao><a href="a-barbearia">Leia mais</a></app-botao>
      </article>
    `;
  }
}
customElements.define("a-barbearia-sections", ABarbeariaSections);

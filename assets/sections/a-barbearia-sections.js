import { LitElement, html, css } from "lit";
import { animate } from "../styles/animate-style";
import { section } from "../styles/sectioon-style";

export class ABarbeariaSections extends LitElement {
  static styles = [
    section,
    animate,
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
        z-index: -20;

        --cor-bolinha: var(--tom3);
      }

      img {
        width: 100%;
      }

      app-botao {
        display: var(--display-botao);
      }

      @media (min-width: 768px) {
        app-quadro {
          width: 600px;
          height: 600px;

          right: -182px;
          top: 200px;
        }

        app-bolinhas {
          width: 400px;
          height: 400px;

          left: -20px;
          top: 350px;
        }

        app-paragrafo {
          width: 100%;
        }

        article {
          width: 100%;
          border-image-source: linear-gradient(
            30deg,
            rgba(102, 78, 56, 0) 50%,
            rgba(102, 78, 56, 1) 100%
          );
        }

        @media (min-width: 1024px) {
          app-quadro {
            width: 600px;
            height: 600px;

            right: -182px;
            top: 100px;
          }

          app-bolinhas {
            width: 400px;
            height: 400px;

            left: -20px;
            top: 112px;
          }
        }
      }
    `,
  ];

  render() {
    return html`
      <app-titulo class="animate__animated" data-toggle-class="animate__fadeInUp"> A Barbearia</app-titulo>
      <app-bolinhas></app-bolinhas>
      <app-quadro class="animate__animated animate__slower" data-toggle-class="animate__slideInRight">
        <img
          loading="lazy"
          src="a-barbearia.jpg"
          alt="imagem seção a-barbearia"
        />
      </app-quadro>
      <article class="animate__animated animate__slow" data-toggle-class="animate__fadeInLeft">
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

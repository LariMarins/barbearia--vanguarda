import { LitElement, html, css } from "lit";
import { section } from "../styles/sectioon-style";

export class ServiçOSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        padding: 0;
      }
      app-bolinhas {
        --cor-bolinha: var(--tom3);

        width: 270px;
        height: 23px;
      }

      app-bolinhas:first-child {
        /* Seleciona a primeira bolinha */
        transform: rotate(180deg);
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      span {
        color: var(--tom3);
        font-weight: 600; /* semibold */
      }

      .titulo {
        width: 270px;
      }

      section {
        display: flex;
        align-items: center;
        gap: 36px;
        align-self: stretch;
      }

      aside {
        display: flex;
        padding: 96px 0px 8px 0px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
      }

      article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
      }

      article app-paragrafo:first-child {
        font-weight: 700;
        color: var(--tom3);
      }

      .descricao {
        width: 108px;
        text-align: center;
        font-size: 0.875rem;
      }

      img {
        height: 100%;
      }

      img:first-child {
        width: 120%;
      }

      app-quadro {
        width: 165px;
        height: 364px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      swiper-container {
        width: 100%;
        height: 100%;
      }

      swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      @media (min-width: 768px) {
        :host {
          padding: 3rem 0;
        }

        section {
          align-self: center;
        }

        app-quadro {
          width: 265px;
          height: 520px;
          border-radius: 8px;
        }

        .titulo {
          font-size: 1.25rem;
          width: 330px;
        }

        article app-paragrafo:first-child {
          font-size: 1.25rem;
        }

        .descricao {
          font-size: 1rem;
          width: 158px;
        }

        aside {
          padding: 176px 0 16px 0;
        }

        @media (min-width: 1024px) {
          div {
            display: none;
          }
        }
      }
    `,
  ];

  render() {
    return html`
      <app-paragrafo class="titulo">
        Estilo, cuidado e excelência em cada <span>corte</span>
      </app-paragrafo>

      <section>
        <app-quadro>
          <swiper-container
            effect="fade"
            simulate-touch="false"
            autoplay="true"
            speed="750"
            loop="true"
            disabled-on-interaction="false">
            <swiper-slide>
              <img
                class="primeira imagem"
                loading="lazy"
                src="servicos-1.jpg"
                alt="imagem 1"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                loading="lazy"
                src="servicos-2.jpg"
                alt="imagem 2"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                loading="lazy"
                src="servicos-3.jpg"
                alt="imagem 3"
              />
            </swiper-slide>
          </swiper-container>
        </app-quadro>

        <aside>
          <article>
            <app-paragrafo>Corte</app-paragrafo>
            <app-paragrafo class="descricao"
              >Social, degradê, surfista, militar, razor part,
              undercut</app-paragrafo
            >
          </article>

          <app-botao><a href="serviços"> Ver mais</a></app-botao>
        </aside>
      </section>

      <div>
        <app-bolinhas formato="linha-vazada"></app-bolinhas>
        <app-bolinhas formato="linha-preenchida"></app-bolinhas>
      </div>
    `;
  }
}
customElements.define("serviço-section", ServiçOSection);

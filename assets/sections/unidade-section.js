import { LitElement, html, css } from "lit";
import { animate } from "../styles/animate-style";
import { section } from "../styles/sectioon-style";

export class UnidadeSections extends LitElement {
  static styles = [
    section,
    animate,
    css`
      :host {
        height: fit-content;
        gap: 32px;
        padding: 0 0 4rem 0;
      }

      app-paragrafo {
        width: 270px;
      }

      app-bolinhas {
        display: flex;
        width: 104px;
        height: 208px;
        transform: rotate(90deg);
        align-items: flex-start;
        --cor-bolinha: var(--tom3);

        /* posicionamento */
        position: absolute;
        left: -64px;
        top: -56px;
        z-index: -10;
      }

      swiper-container {
        width: 100svw;
        height: 300px;

        position: relative;
        left:50%;
        transform: translateX(-50%);
      }
      swiper-slide {
        padding-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 500ms;
      }

      .swiper-slide-active {
        transform: scale(1.1);
      }
      @media (min-width: 768px) {
        app-paragrafo {
          width: 100%;
          max-width: 500px;
          text-align: center;
        }

        app-mapa {
          width: 400px;
          height: 300px;
        }
        swiper-container{
          height:500px;
        }
      }
    `,
  ];

  firstUpdated() {
    const swiper = this.renderRoot.querySelector('swiper-container')

    

    Object.assign(swiper, {
      spaceBetween: -75, 
      initialSlide: 1,
      rewind: true,
      breakpoints: {
        768: {
          spaceBetween: -275,
        },
        1024: {
          spaceBetween: -575,
        },
        1368: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }
    })

    swiper.initialize()
  }

  render() {
    return html`
      <app-paragrafo  class="animate__animated  animate__delay-1s" data-toggle-class="animate__fadeIn">
        Nossa sede, localizada na zona leste de São Paulo, e as demais unidades,
        estão abertas todos os dias. <br /><br />
        Confira os horários específicos de cada unidade.
      </app-paragrafo>
     
      <swiper-container init="false">
        <swiper-slide>
          <app-mapa> </app-mapa>
        </swiper-slide>
        <swiper-slide>
          <app-mapa>
            <img
              slot="imagem"
              loading="lazy"
              src="mapa-2.jpg"
              alt="imagem local da barbearia"
            />
          </app-mapa>
        </swiper-slide>
        <swiper-slide>
          <app-mapa>
            <img
              slot="imagem"
              loading="lazy"
              src="mapa-3.jpg"
              alt="imagem local da barbearia"
            />
          </app-mapa>
        </swiper-slide>
        <swiper-slide>
          <app-mapa>
            <img
              slot="imagem"
              loading="lazy"
              src="mapa-4.jpg"
              alt="imagem local da barbearia"
            />
          </app-mapa>
        </swiper-slide>
        <swiper-slide>
          <app-mapa>
            <img
              slot="imagem"
              loading="lazy"
              src=""
              alt="imagem local da barbearia"
            />
          </app-mapa>
        </swiper-slide>
      </swiper-container>

      <app-bolinhas formato="metade"></app-bolinhas>
    `;
  }
}
customElements.define("unidade-section", UnidadeSections);

import { LitElement, html, css } from "lit";
import { section } from "../styles/sectioon-style";

export class UnidadeSections extends LitElement {
  static styles = [
    section,
    css`
      :host {
        height: fit-content;
        gap: 32px;
        padding-bottom: 4rem;
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
        z-index:-10;
       
      }
    `,
  ];

  render() {
    return html`
      <app-paragrafo>
        Nossa sede, localizada na zona leste de São Paulo, e as demais unidades,
        estão abertas todos os dias. <br /><br />
        Confira os horários específicos de cada unidade.
      </app-paragrafo>

      <app-mapa></app-mapa>

      <app-bolinhas formato="metade"></app-bolinhas>
    `;
  }
}
customElements.define("unidade-section", UnidadeSections);

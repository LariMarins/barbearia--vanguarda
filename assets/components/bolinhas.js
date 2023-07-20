import { LitElement, html, css } from "lit";

export class Bolinhas extends LitElement {

  static get properties() {
    return {
      formato: { type: String },
    };
  }
  

  static styles = [
    css`
      :host {
        width: 100px;
        height: 100px;

        -webkit-mask-size: 100%;
        mask-size:100%;


        display: block;
      }

      .inteira {
        -webkit-mask: url("../../public/bolinhas.svg") no-repeat center;
        mask: url("../../public/") no-repeat center;
      } 
     
      .linha-preenchida {
        -webkit-mask: url("../../public/linha preenchida.svg") no-repeat center;
        mask: url("../../public/linha preenchida.svg") no-repeat center;
      }
      
      .linha-vazada {
        -webkit-mask: url("../../public/linha vazada.svg") no-repeat center;
        mask: url("../../public/linha vazada.svg") no-repeat center;
      }
        .metade {
        -webkit-mask: url("../../public/bolinhas-metade.svg") no-repeat center;
        mask: url("../../public/bolinhas-metade.svg") no-repeat center;
      }

      .bolinhas {
        width: 100%;
        height: 100%;

        -webkit-mask-size: 100%;
        mask-size: 100%;
        background-color: var(--cor-bolinha, black)
      }
    `,
  ];

  /**
   * Define o formato das bolinhas
   * @returns Classe do formato
   */
   definirFormato() {
    if (this.formato === "linha-preenchida") {
      return "linha-preenchida";
    }
    if (this.formato === "linha-vazada") {
      return "linha-vazada";
    }
    if (this.formato === "metade") {
      return "metade";
    }
    return "inteira";
  }

  render() {
    return html` <div class=${`bolinhas ${this.definirFormato()}`}></div> `;
  }
}
customElements.define("app-bolinhas", Bolinhas);

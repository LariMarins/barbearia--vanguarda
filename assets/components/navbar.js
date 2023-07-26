import { LitElement, html, css } from "lit";
import { nav } from "../../main";

export class Navbar extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;

        display: flex;
        box-sizing: border-box;

        justify-content: space-between;
        align-items: center;
        padding:  2rem;

        position: fixed;  /*absolute*/
        top: 0;
        left:0;
        z-index: 100;
        mix-blend-mode: difference;
        color: white;

        transition: top 1s;
        pointer-events: none;
      }
      app-logo {
        background-color: white;
      }
      feather-icon {
        cursor: pointer;
        pointer-events:auto;
      }

      @media (min-width: 768px) {
        app-logo {
          width: 96px;
          height: 96px;
        }
      }

      @media (min-width: 1024px) {
      }
    `,
  ];

  render() {
    return html`
      <app-logo></app-logo>
      <feather-icon icon="menu" @click=${nav.abrir}></feather-icon>
    `;
  }
}
customElements.define("app-navbar", Navbar);

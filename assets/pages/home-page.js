import { LitElement, html, css } from "lit";

export class HomePage extends LitElement {
  render() {
    return html`
      <hero-section></hero-section>
      <a-barbearia-sections></a-barbearia-sections>
      <serviço-section></serviço-section>
      <contato-section id="contato"></contato-section>
      <unidade-section id="unidade"></unidade-section>
    `;
  }
}
customElements.define("home-page", HomePage);

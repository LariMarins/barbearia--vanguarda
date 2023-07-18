import { LitElement, html, css } from 'lit';
import { section } from '../styles/sectioon-style';

export class ServiçOSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('serviço-section', ServiçOSection);

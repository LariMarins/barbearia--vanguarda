import { LitElement, html, css } from 'lit';

export class ABarbeariaPage extends LitElement {
    static styles = [
        css`
            a-barbearia-sections{
                --display-botao: none;
            }
        `
    ];

    render() {
        return html`
        <a-barbearia-page></a-barbearia-page>
        `;
    }
}
customElements.define('a-barbearia-page', ABarbeariaPage);

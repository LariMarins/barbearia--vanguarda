import { LitElement, html, css } from 'lit';

export class Rodape extends LitElement {
    static styles = [
        css`
            :host {
                display: block;

                font-family: var(--fonte-titulo);
                font-size: .75rem;
                color: white;
            }

            span{
                display: flex;
                justify-content: center;
                align-items: center;

                width:100%;
                height:2rem;
                font-size: .5rem;

                background-color: color-mix(in srgb, black 40%, var(--tom3));
            }

            footer{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 2rem;
                background-color: color-mix(in srgb, black 20%, var(--tom3));
            }

            nav{
               display: flex;
                flex-direction: column;
                gap: 1rem;
                opacity: .9;
                align-items: flex-end;
                
            }

            app-logo{
                width: 4rem;
                height:4rem;
                background-color: white;
                opacity:.9;
            }
            
            a{
                color: white;
                text-decoration: none;
            }

            @media(min-width: 1024px){
                :host{
                    border-radius: 2rem 2rem 0 0;
                    overflow: hidden;
                }
            }
        `
    ];

    render() {
        return html`
        
        <footer>
           
        <app-logo></app-logo>
           
           <nav>
              <a href=""> Unidades</a>
              <a href="">Contato</a>
              <a href="serviço">Serviços</a>
              <a href="a-barbearia">A Barbearia</a>
             <a href="/">Home</a>
            </nav>
        </footer>
        
        <span>
        © Barbearia Vanguarda - Todos os direitos reservados desde 2023.
        </span>
        `;
    }
}
customElements.define('app-rodape', Rodape);

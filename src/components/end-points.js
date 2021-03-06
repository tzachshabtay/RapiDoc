import { LitElement, html } from 'lit-element'; 
import EndPoint from '@/components/end-point'; 

export default class EndPoints extends LitElement {
  render() {
    return html`
    ${this.paths.map(
      path => html`<end-point 
        server="${this.server}" 
        api-key-name="${this.apiKeyName}" 
        api-key-value="${this.apiKeyValue}" 
        api-key-location="${this.apiKeyLocation}" 
        layout="${this.layout}" 
        .path=${path}
        show-try="${this.showTry}" 
      > </end-point>`
    )}`
  }

  static get properties() {
    return {
      server        : { type: String },
      apiKeyName    : { type: String, attribute: 'api-key-name' },
      apiKeyValue   : { type: String, attribute: 'api-key-value' },
      apiKeyLocation: { type: String, attribute: 'api-key-location' },
      layout : { type: String },
      paths  : { type: Object },
      showTry: { type: String, attribute: 'show-try' },
    };
  }
}
// Register the element with the browser
customElements.define('end-points', EndPoints);

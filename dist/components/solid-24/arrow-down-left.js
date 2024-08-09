import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowDownLeft = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\" ...attributes>\n  <path fill-rule=\"evenodd\" d=\"M20.03 3.97a.75.75 0 010 1.06L6.31 18.75h9.44a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75V8.25a.75.75 0 011.5 0v9.44L18.97 3.97a.75.75 0 011.06 0z\" clip-rule=\"evenodd\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowDownLeft as default };
//# sourceMappingURL=arrow-down-left.js.map

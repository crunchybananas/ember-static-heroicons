import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var minus = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\" ...attributes>\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.5 12h-15\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { minus as default };
//# sourceMappingURL=minus.js.map

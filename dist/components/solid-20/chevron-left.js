import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var chevronLeft = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\" ...attributes>\n  <path fill-rule=\"evenodd\" d=\"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z\" clip-rule=\"evenodd\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { chevronLeft as default };
//# sourceMappingURL=chevron-left.js.map

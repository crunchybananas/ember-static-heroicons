import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var plusSmall = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\" ...attributes>\n  <path fill-rule=\"evenodd\" d=\"M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z\" clip-rule=\"evenodd\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { plusSmall as default };
//# sourceMappingURL=plus-small.js.map

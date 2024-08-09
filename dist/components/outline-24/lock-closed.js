import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var lockClosed = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\" ...attributes>\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { lockClosed as default };
//# sourceMappingURL=lock-closed.js.map

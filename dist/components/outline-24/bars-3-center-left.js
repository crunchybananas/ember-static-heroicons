import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var bars3CenterLeft = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\" ...attributes>\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { bars3CenterLeft as default };
//# sourceMappingURL=bars-3-center-left.js.map

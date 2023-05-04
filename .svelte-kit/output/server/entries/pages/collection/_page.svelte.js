import { c as create_ssr_component, f as each, v as validate_component } from "../../../chunks/index2.js";
import { C as CarCard } from "../../../chunks/CarCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let randomCars = [];
  return `${$$result.head += `<!-- HEAD_svelte-155016b_START -->${$$result.title = `<title>Collection</title>`, ""}<!-- HEAD_svelte-155016b_END -->`, ""}


<a href="#" class="z-50 btn variant-ghost-primary absolute bottom-3 right-3">Jump To Top!</a>

<div class="p-4 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">${each(randomCars, (car) => {
    return `${validate_component(CarCard, "Card").$$render($$result, { car }, {}, {})}`;
  })}</div>`;
});
export {
  Page as default
};

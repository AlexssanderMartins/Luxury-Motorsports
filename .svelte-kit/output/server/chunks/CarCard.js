import { c as create_ssr_component, a as add_attribute, e as escape } from "./index2.js";
const CarCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { car } = $$props;
  if ($$props.car === void 0 && $$bindings.car && car !== void 0)
    $$bindings.car(car);
  return `<div class="card card-hover"><header class="card-header p-0 relative"><img class="w-screen aspect-[21/9] rounded-t"${add_attribute("src", car.img, 0)} alt="${"Image Of " + escape(car.name, true)}">
        <span class="chip variant-ghost-success absolute bottom-3 right-3">$${escape(car.price)}/d</span></header>
    <div class="p-4 space-y-4 text-left"><h3>${escape(car.name)}</h3>
        <p class="opacity-80">${escape(car.description)}</p></div>
    <hr class="opacity-80">
    <footer class="card-footer mt-5"><button type="button" class="btn variant-ghost-success">Rent Now!</button>
        <a target="_blank"${add_attribute("href", car.copy, 0)} class="btn variant-ghost-success">Copyright Here</a></footer></div>`;
});
export {
  CarCard as C
};

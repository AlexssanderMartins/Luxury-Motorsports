import { c as create_ssr_component, e as escape, f as each, v as validate_component } from "../../chunks/index2.js";
import { C as CarCard } from "../../chunks/CarCard.js";
let phrase = "Welcome to Luxury Autos.";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let typedChar = "";
  let index = 0;
  let typeWriter;
  const typeChar = () => {
    if (index < phrase.length) {
      typedChar += phrase[index];
      index += 1;
    } else {
      clearInterval(typeWriter);
    }
  };
  const typeing = () => typeWriter = setInterval(typeChar, 80);
  typeing();
  let randomCars = [];
  return `${$$result.head += `<!-- HEAD_svelte-1g4mjzu_START -->${$$result.title = `<title>Home</title>`, ""}<!-- HEAD_svelte-1g4mjzu_END -->`, ""}


<div class="container h-full mx-auto flex justify-center items-center"><div class="space-y-10 text-center"><div class="btn btn-sm variant-ghost-surface"><h2 class="font-bold">${escape(typedChar)}</h2></div>

		<div>We Offer Car Rental&#39;s For Extreamly Cheap Prices</div>

		<a href="/collection" class="btn btn-lg variant-ghost-surface">Start Shopping!</a>

		<div class="p-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">${each(randomCars, (car) => {
    return `${validate_component(CarCard, "Card").$$render($$result, { car }, {}, {})}`;
  })}</div>

		<div class="float-left btn varient">Copyright Belongs To (Dodge, Nissan, Toyota, Chevrolet, Mclaren, Porsche)
		</div></div></div>`;
});
export {
  Page as default
};

import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface ProductAdProps {
  product: {
    title: string;
    description?: string;
    price: number;
    image: ImageWidget;
  };
  adDescription?: string;
}

const formatPrice = (price: number) => {
  return price.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  });
};

const ProductAd = ({ product, adDescription }: ProductAdProps) => {
  return (
    <div class="w-11/12 max-w-7xl mx-auto flex my-8 flex-col justify-center items-center lg:flex-row">
      <div class="w-full max-w-sm relative">
        <Image src={product.image} width={375} height={450} />
        <button class="block lg:hidden bg-red-600 rounded-3xl px-6 py-3 absolute top-1 right-3 z-10">
          Save
        </button>
      </div>
      <div class="w-full flex flex-col justify-between">
        <div>
          <div class="flex justify-between">
            <h3 class="text-lg font-bold">{product.title}</h3>
            <button class="hidden lg:block bg-red-600 rounded-3xl px-6 py-3">
              Save
            </button>
          </div>
          <p>{adDescription ?? product.description}</p>
        </div>
        <div class="flex flex-col lg:items-end items-center">
          <p class="text-xl font-bold text-lime-600 mb-6">
            {formatPrice(product.price)}
          </p>
          <div class="flex gap-8 flex-col lg:flex-row">
            <button class="px-8 py-3 border rounded-3xl">Mais Detalhes</button>
            <button class="px-8 py-3 border rounded-3xl">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAd;

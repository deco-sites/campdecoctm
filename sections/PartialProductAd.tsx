import { ImageWidget } from "apps/admin/widgets.ts";
import { ProductAdProps } from "./ProductAd.tsx";
import ProductAd from "./ProductAd.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  productAds: ProductAdProps[];
  message: string;
  image: ImageWidget;
  buttonTitle: string;
  /**
   * @default 0
   * @hide
   * @readonly
   */
  indexActive?: number;
}

export function ErrorFallback({ error }: { error?: Error }) {
  return <div class="bg-red-800 text-white">Error: {error?.message}</div>;
}

const PartialProductAd = (
  { buttonTitle, image, message, productAds, indexActive }: Props,
) => {
  const getArrayIndex = (number: number): number => number % productAds.length;
  const currentIndex = getArrayIndex(indexActive ?? 0);

  console.log(productAds);

  return (
    <div>
      <div class="lg:flex">
        <div class="lg:w-[70%]">
          <ProductAd
            product={productAds[currentIndex].product}
            adDescription={productAds[currentIndex].adDescription}
          />
        </div>
        <div class="lg:w-[30%] flex flex-col items-center justify-center">
          <p>{message}</p>
          <Image class="hover:scale-110" src={image} width={100} />
          <button
            class="bg-white mt-4"
            {...usePartialSection({ props: { indexActive: currentIndex + 1 } })}
          >
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartialProductAd;

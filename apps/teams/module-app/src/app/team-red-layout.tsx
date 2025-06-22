import { useEffect, useState, lazy, Suspense } from "react";

const StorefrontHeader = lazy(
  () => import("module_storefront/StorefrontHeader"),
);

const ActivitiesList = lazy(
  () => import("module_activities/ActivitiesList"),
);
// const BlueBasket = lazy(() => import('module_activities/BlueBasket'));
// const BlueBuy = lazy(() => import('module_activities/BlueBuy'));

interface VariantOption {
  sku: string;
  color: string;
  name: string;
  image: string;
  thumb: string;
  price: string;
}

const product: { name: string; variants: VariantOption[] } = {
  name: "Tractor",
  variants: [
    {
      sku: "t_porsche",
      color: "red",
      name: "Porsche-Diesel Master 419",
      image: "./team-red/images/tractor-red.jpg",
      thumb: "./team-red/images/tractor-red-thumb.jpg",
      price: "66,00 €",
    },
    {
      sku: "t_fendt",
      color: "green",
      name: "Fendt F20 Dieselroß",
      image: "./team-red/images/tractor-green.jpg",
      thumb: "./team-red/images/tractor-green-thumb.jpg",
      price: "54,00 €",
    },
    {
      sku: "t_eicher",
      color: "blue",
      name: "Eicher Diesel 215/16",
      image: "./team-red/images/tractor-blue.jpg",
      thumb: "./team-red/images/tractor-blue-thumb.jpg",
      price: "58,00 €",
    },
  ],
};

const state: { variant: string } = {
  variant: "t_porsche",
};

export function TeamRedLayout({ id }: { id: string }) {
  const [variant, setVariant] = useState(
    product.variants.find((v) => state.variant === v.sku),
  );
  useEffect(() => {
    const refresh = () => {
      setVariant(product.variants.find((v) => state.variant === v.sku));
    };
    window.addEventListener("red:variant:changed", refresh);

    return () => {
      window.removeEventListener("red:variant:changed", refresh);
    };
  }, []);

  return (
    <>
      <StorefrontHeader />
      <ActivitiesList />
    </>
  );
}

export default TeamRedLayout;

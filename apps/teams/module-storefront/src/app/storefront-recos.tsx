import { useEffect, useState } from 'react';

const recos: Record<string, string[]> = {
  t_porsche: ['3', '5', '6'],
  t_fendt: ['3', '6', '4'],
  t_eicher: ['1', '8', '7'],
};

function log(...args: string[]) {
  console.log('🖼️ module-storefront-recos', ...args);
}

export default function StorefrontRecos({ id, sku }: { id: string; sku: string }) {
  const [reco, setReco] = useState(recos[sku] || []);

  return (
    <div className="bg-indigo-500 p-2 font-mono">Hello!</div>
  );
}

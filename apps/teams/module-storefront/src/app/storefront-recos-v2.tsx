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

  log('connected', sku);
  useEffect(() => {
    setReco(recos[sku] || []);
    return () => {
      log('disconnected', sku);
    };
  }, [sku]);

  return (
    <div id={id}>
      <h3>Related Products v2</h3>
      {reco.map((id) => (
        <img
          key={id}
          src={`./module-storefront/images/reco_${id}.jpg`}
          alt={`Reco ${id}`}
        />
      ))}
    </div>
  );
}

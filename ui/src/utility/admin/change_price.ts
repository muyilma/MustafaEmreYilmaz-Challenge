import { Transaction } from "@mysten/sui/transactions";

export const changePrice = (packageId: string, listHeroId: string, newPriceInSui: string, adminCapId: string) => {
  const tx = new Transaction();
  
    const newPriceInMist = Number(newPriceInSui) * 1_000_000_000;

    tx.moveCall({
      target:`${packageId}::marketplace::change_the_price`,
      arguments:[
        tx.object(listHeroId),
        tx.object(adminCapId),
        tx.pure.u64(newPriceInMist)
      ]
    });
  
  return tx;
};

import React from "react";

const ProductInfo = () => {
  return (
    <div className="w-[92%] h-full  flex flex-col justify-end gap-4">
      <h2 className="text-lg sm:text-2xl iconname text-[#111928]">
        Description produit
      </h2>
      <p className=" text-sm text-[#9C9C9C] leading-1 tracking-tight iconsp">
        Festi vous propose à la location un/une "Jewel – grand couteau/10pc"
        pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour
        votre mariage, une fête d'anniversaire ou du personnel, ce produit a
        fait l'objet d'une sélection rigoureuse par notre équipe. Il est en
        location chez nous sous la référence "VAJGC". Nous sommes à votre
        disposition pour que les événements de nos clients, même en last-minute,
        soient toujours une réussite. Vous pourrez trouver tout une série
        d'autre produit à louer de ce type dans la catégorie "Art de la Table.
      </p>
    </div>
  );
};

export default ProductInfo;

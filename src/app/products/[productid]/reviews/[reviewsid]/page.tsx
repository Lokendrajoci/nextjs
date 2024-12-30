import React from "react";
import { notFound } from "next/navigation";

function page({
  params,
}: {
  params: { productid: string; reviewsid: string };
}) {
  if (parseInt(params.reviewsid) > 1000) {
    notFound();
  }
  return (
    <div>
      reviews {params.reviewsid} for product {params.productid}
    </div>
  );
}

export default page;

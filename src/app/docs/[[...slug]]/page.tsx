import React from "react";

function page({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length === 2) {
    return (
      <div>
        viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </div>
    );
  }
  else if(params.slug?.length=== 1) {
    return (
      <div>
        viewing docs for feature {params.slug[0]}
      </div>
    );
  }
  return <div>Docs home page</div>;
}

export default page;

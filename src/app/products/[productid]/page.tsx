import React from 'react'

export default function page({params}:{params:{productid:string}}) {
  return (
    <div>
      Details about prodcutt {params.productid}
    </div>
  )
}

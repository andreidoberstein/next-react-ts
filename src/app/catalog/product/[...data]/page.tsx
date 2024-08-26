interface ProductProps {
  params: {
    data: string[]
  }
}

export default function ProductId({ params }: ProductProps) {
  const [productId, color, size] = params.data

  return (
    <>
      {/* <h1>Props {JSON.stringify(props)}</h1> */}

      <p>Id: {productId}</p>
      <p>Color {color}</p>
      <p>Size: {size}</p>
    </>
  )
}

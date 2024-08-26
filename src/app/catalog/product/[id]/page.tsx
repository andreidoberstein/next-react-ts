interface ProductProps {
  params: {
    id: string
  }
}

export default function ProductId(props: ProductProps) {
  return <h1>Product id {props.params.id}</h1>
}

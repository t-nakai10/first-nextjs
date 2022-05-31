import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter();
  return (
    <h1>商品{router.query.name}の商品ページです</h1>
  )
}

export default Name
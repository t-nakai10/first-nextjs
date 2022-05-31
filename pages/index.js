import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>トップページ</title>
      </Head>
      <main>
        <h1>Hello Next.js</h1>
        <p>ここにhome のコンテンツが入りrます</p>
        <Content type="alert" />
      </main>
      <Image src="https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MjY4OTkyMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" width={500} height={300} />
    </div>
  );
}

function Content({ type }) {
  return (
    <div>
      <p className='text-3xl'>コンテンツが入ります</p>
      <style jsx>{`
        p {
          color: ${type == 'alert' ? 'red' : 'blue'}
        }
      `}
      </style>
    </div>
  )
}
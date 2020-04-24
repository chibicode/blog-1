import Post from '../../../components/layouts/post'
import P from '../../../components/post/paragraph'
import HR from '../../../components/post/hr'
import Header from '../../../components/post/header'
import { H2, H3 } from '../../../components/post/heading'
import withViews from '../../../lib/with-views'
import Head from 'next/head'
import Link from 'next/link'

export default withViews(({ views }) => (
  <Post>
    <Header title="Vercel (日本語訳)" date="April 21, 2020" views={views} />
    <Head>
      <meta property="og:title" content="Vercel (日本語訳)" />
      <meta property="og:site_name" content="Guillermo Rauchのブログ" />
      <meta
        property="og:description"
        content="「Vercel」という名と共に、私達の物語は続きます"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rauchg" />
      <meta property="og:image" content="https://rauchg.com/og/vercel.png" />
    </Head>
    <P>
      訳註:{' '}
      <a href="https://nextjs.org/" target="_blank">
        Next.js
      </a>
      の生みの親の一人で、
      <a href="https://vercel.com/" target="_blank">
        Vercel
      </a>
      社のCEOを務める
      <a href="https://twitter.com/rauchg" target="_blank">
        @rauchg
      </a>
      による記事の翻訳です。原文は
      <Link href="/2020/vercel">
        <a>こちら</a>
      </Link>
      。訳者はVercelのエンジニアであり、ハンス・ロスリングほか著『FACTFULNESS』の共訳者でもある上杉周作(
      <a href="https://twitter.com/chibicode" target="_blank">
        @chibicode
      </a>
      )。ちなみに、Vercel社はこのたび社名をZEITから改名しました。
      <a href="https://vercel.com/blog/zeit-is-now-vercel" target="_blank">
        公式発表はこちら
      </a>
      。
    </P>
    <HR />
    <P>
      本日、私達は社名を
      <a href="https://vercel.com" target="_blank">
        <b>Vercel</b>
      </a>
      に改め、2100万ドルの資金調達を実施したことを公表しました。資金調達においては、錚々たる顔ぶれであるVC(
      <a href="https://www.accel.com" target="_blank">
        Accel
      </a>
      、
      <a href="https://crv.com" target="_blank">
        CRV
      </a>
      )、そして個人投資家(
      <a href="https://twitter.com/jordwalke" target="_blank">
        Jordan Walke
      </a>
      、
      <a href="https://twitter.com/natfriedman" target="_blank">
        Nat Friedman
      </a>
      、
      <a href="https://twitter.com/floydophone" target="_blank">
        Pete Hunt
      </a>
      、
      <a href="https://twitter.com/jessfraz" target="_blank">
        Jessie Frazelle
      </a>
      、
      <a href="https://twitter.com/soleio" target="_blank">
        Soleio
      </a>
      、
      <a href="https://twitter.com/naval" target="_blank">
        Naval Ravikant
      </a>
      、その他多くの方々)のご支援を頂いています。
    </P>
    <P>
      せっかくの機会なので、今回はVercelのビジョンについて語らせてください。Jamstackのウェブサイトを作り、試し、公開するための最高峰の仕組みを私達は追求し、ゆくゆくは
      <b>フロントエンド開発の体験</b>
      を再定義する、ということについてお伝えできればと思います。
    </P>
    <P>
      まずは最近の大きな流れとして、クラウドインフラ、Kubernetes、様々なAPIを提供するサービス等の台頭により、バックエンド開発にコモディティ化の波が押し寄せました。その結果、やりがいがある革新の機会がまだどれだけ残っているか？という点において、フロントエンド開発がより魅力的になっています。そしてフロントエンド開発こそ、多くの企業において価値の源泉であると言えるでしょう。集客や収益化に繋がるコンテンツやプロダクトに、フロントエンドは直結しているからです。
    </P>
    <P>
      また近年、Jamstack(JavaScript・API・マークアップ)という設計手法が登場し、フロントエンドとバックエンドを切り分けることが容易になりました。これにより、バックエンドが足枷になることなく、フロントエンドを今まで以上に効率よく作ることができます。Jamstackへの移行に関してはグーグル、フェイスブック、マイクロソフトも太鼓判を押しており(
      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=EpYYe6aQjJM&feature=youtu.be"
      >
        例: マイクロソフトのドキュメンテーションサイトは全てJamstackで構築
      </a>
      )、業界全体において日進月歩で導入が進んでいます。
    </P>
    <P>
      Accel(訳註: 今回Vercelに投資したVC)の
      <a href="https://twitter.com/daniel_levine" target="_blank">
        Daniel Levine
      </a>
      は、「デザイナーやフロントエンドエンジニアが、主導権を握ってUIやUXを作り込むことができるか否か。これこそが、将来ほとんどの市場において、ビジネスの勝敗を決める鍵となるだろう」と予想しています。また彼は、「Vercelは、
      <em>
        <b>フロントエンド版のAWS</b>
      </em>
      になれるかもしれない」とも話していました。
    </P>
    <H2 id="megatrends">フロントエンドの開発者体験を左右する3大トレンド</H2>
    <P>
      Jamstackの台頭もそうですが、フロントエンド開発は全般的に近代化が進んでいます。
      開発を高速化するツールによってJavaScript開発者が恩恵を受けたり、サービス自体が高速化されることでユーザーが恩恵を受けています。そんな中で、さらに良質なフロントエンドの開発者体験を追求するためには、これから述べる3大トレンドに留意する必要があるでしょう。
      もちろん、Vercelが提供するフロントエンド開発者向けのクラウドプラットフォームは、これらのトレンドを念頭に置いて作られています。
    </P>
    <H3 id="develop-with-components">1. コンポーネント化が最適解</H3>
    <P>
      より高度なUIやUXが求められるにつれ、現場ではコンポーネント化やデザインシステムの導入が急務になっています。プラットフォームが違えど、ユーザー体験は統一されているべきです。たとえばボタンの見た目は、Webアプリ、モバイルアプリ、デスクトップアプリ、あるいはEメールの文中においても同じでないといけません。
    </P>
    <P>
      少し前の頃まで、コンポーネント化は常識ではありませんでした。話題の中心は、セレクタエンジンやDOMだったのです。そんな中、Facebookが生んだReactと共にコンポーネント化の概念が登場しました。もちろん、他のフレームワークでもコンポーネントを作ることはできましたが、コンポーネント化の先駆者となったのは紛れもなくReactでした。
    </P>
    <P>
      数年前、
      <a href="https://twitter.com/timneutkens" target="_blank">
        Tim Neutkens
      </a>
      、
      <a href="https://twitter.com/nkzawa" target="_blank">
        Naoyuki Kanezawa
      </a>
      、そして私の3人は、「Reactはすごい。いずれ、フロントエンドは全てReactで書けるようになるだろう」と感じ、それを実現するためにNext.jsを作りました。一つのコンポーネントだけにReactを使うのではなく、
      <b>何もかも</b>
      をReactで書きたい人向けに必要な機能を実装したのです。Next.jsは、Reactが切り拓いたコンポーネント化の考え方を、フロントエンド全てに応用したいというニーズに応えました。
    </P>
    <P>
      私達の読みは的中しました。現在、フロントエンド開発者の多くはコンポーネント化への移行を急ピッチで進めています。多くはReactを選び、フロントエンドをバックエンドから分離し、設計を抜本的に見直そうとしているのです。Vercelは、そういったフロントエンド開発者に必要なものがすべて揃っているプラットフォームになりたいと考えています。
    </P>
    <P>
      <a href="https://nextjs.org" target="_blank">
        Next.js
      </a>
      以外にも、Vercelは
      <a href="https://vuejs.org/" target="_blank">
        どんな
      </a>
      <a href="https://nuxtjs.org" target="_blank">
        コンポーネント化の
      </a>
      <a href="https://svelte.dev/" target="_blank">
        フレームワークにでも
      </a>
      <a href="https://glimmerjs.com/" target="_blank">
        満遍なく
      </a>
      <a href="https://angular.io/" target="_blank">
        対応しています
      </a>
      。たとえば、
      <a href="https://vuejs.org" target="_blank">
        Vue
      </a>
      や
      <a href="https://svelte.dev" target="_blank">
        Svelte
      </a>
      はブラウザが読み込むJavaScriptの容量を大幅に減らす試みを行っています。どのフレームワークも、コンポーネント化で直面する様々な問題を解決することで頭角を現したり、
      <a target="_blank" href="https://www.webcomponents.org/">
        コンポーネント化のウェブ標準
      </a>
      の実現に貢献しています。Vercelは、こういったフレームワーク全てを歓迎するプラットフォームでありたいのです。
    </P>
    <H3 id="preview">
      2. コードレビューはデプロイプレビューに如かず。URLは共同作業のためにある
    </H3>
    <P>
      コードをプッシュしてレビューする一連の流れは複雑化しすぎています。自前のCI/CDパイプラインを構築したり、Jenkinsの設定を弄ったり、CI/CDやCDNのベンダーを選定するのに時間がかかりすぎるのです。CI/CDとCDNをうまく連携させたり、複雑なシステムの挙動を見張るのはとても難儀です。
    </P>
    <P>
      フロントエンドに特化したプッシュ・レビューの仕組みについて試行錯誤した結果、私達は画期的なアイデアにたどり着きました。フロントエンド開発者にとっては、プレビュー用のURLほど強力なものはないと気づいたのです。Vercelを使えば、開発中のフロントエンドアプリをデプロイし、すぐにプレビューURLを取得して結果を確認することができます。コンテンツ管理システム(訳註:
      Wordpressなど)によくあるプレビュー機能と同じですが、Vercelは
      <a href="https://vercel.com/github" target="_blank">
        <b>Gitと連携し、全てのpushに対してデプロイを行います</b>。
      </a>
      (訳註:
      各pushごとに独立したデプロイが行われ、毎度新しいURLが生成されます。また、ブランチに対応したURLも別に生成されます)
    </P>
    <P>
      たかがURLだと侮るなかれ。プレビューURLには、複雑さからフロントエンド開発者を解き放ち、開発スピードを飛躍的に高める効果があるのです。
    </P>
    <P>
      最もわかりやすい例を挙げると、プレビューURLがあれば、開発部門だけでなく、マーケティングや営業や法務など他部門との共同作業が捗ります。チャットでプレビューURLを送り合うだけで、いま開発中なのは何か、どの分野に力を入れているのかが明確になります。
    </P>
    <P>
      デプロイ毎に新しくURLが生成されれば、テストが容易になります。プレビューURLを使えば、ステージング環境を通り越して、本番と変わらない環境でテストを行うことができます。もちろん、アイデア段階のものを試すのにも使えるでしょう。発案から品質保証まで、ソフトウェア開発プロセスの全段階においてプレビューURLは役立つのです。
    </P>
    <P>
      Another benefit of Vercel’s deploy preview URL is that you get to test
      your program and site with all the bells and whistles required to run the
      site. Vercel gives you automatic SSL support &mdash; every one of your
      deploy URLs is https. We’ve already done the infrastructure heavy lifting
      to give you a secure environment empowered by{' '}
      <a href="https://letsencrypt.org/" target="_blank">
        Let’s Encrypt
      </a>
      . That means not only is it secure to <em>share</em> these URLs, but you
      are testing your website in a real production environment, because of
      these security constraints. When you don’t have this capability, you
      frequently deploy your website only to find security warnings and a
      deprecated end user experience. Not only that, but today browsers{' '}
      <a
        href="https://www.digicert.com/blog/https-only-features-in-browsers/"
        target="_blank"
      >
        are not even enabling modern features&mdash;like Bluetooth support,
        webcam and microphone&mdash;if the site isn’t SSL
      </a>
      .
    </P>
    <H3 id="ship-with-speed">3. スピードが命</H3>
    <P>
      If you’re creating a modern frontend nothing matters more than great site
      performance for the user.{' '}
      <a
        href="https://twitter.com/rauchg/status/1252312827131342848"
        target="_blank"
      >
        Google’s Lighthouse score
      </a>
      , for example, is measuring your frontend performance across multiple
      dials that are going to greatly influence your SEO ranking.
    </P>
    <P>
      Vercel operates a{' '}
      <a target="_blank" href="https://vercel.com/edge-network">
        global edge network
      </a>{' '}
      and gives you a perfect Lighthouse score out of the box every time you
      deploy. You don’t have to think about what’s going on with our CDN or the
      serverless magic behind the scenes &mdash; your URL gets deployed to every
      edge in the world, all your static assets get cached, compressed with the
      greatest codecs (like{' '}
      <a
        href="https://medium.com/oyotech/how-brotli-compression-gave-us-37-latency-improvement-14d41e50fee4"
        target="_blank"
      >
        Brotli
      </a>
      , which is built into Vercel out of the box), and optimized for every
      frontend performance metric you could care about but couldn’t test on your
      local computer.
    </P>
    <P>
      Vercel not only focuses on the speed of your sites, it’s also built to
      make your team fast, by bringing the developer experience closer to the
      cloud, and making iteration easy and fast by default.
    </P>
    <H2>これから</H2>
    <P>
      We are still in the early days of a new beginning for the Web. A Web
      that's faster for end-users and easier to build for developers.
    </P>
    <P>
      I invite you to join us at{' '}
      <a href="https://vercel.com" target="_blank">
        Vercel
      </a>{' '}
      to be a part of this exciting movement. Don't forget to{' '}
      <a href="https://twitter.com/vercel">follow us</a> to stay on top of our
      journey, which is{' '}
      <a href="https://nextjs.org" target="_blank">
        open at its heart
      </a>
      , much like the platform it builds on.
    </P>
  </Post>
))

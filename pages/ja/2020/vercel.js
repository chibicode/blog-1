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
      折角の機会なので、今回はVercelのビジョンについて語らせてください。Jamstackのウェブサイトを作り、試し、公開するための最高峰の仕組みを追求し、ゆくゆくは
      <b>フロントエンド開発の体験</b>
      を再定義する、ということについてお伝えできればと思います。
    </P>
    <P>
      Let’s start with the context that the backend has been commoditized by
      cloud infrastructure, Kubernetes and off-the-shelf APIs. Today the most
      interesting new opportunities for modernization have shifted to the
      frontend. That’s where the value is for most enterprises - creating new
      products and content that attract users and drive revenue. The Jamstack
      architecture (Javascript / APIs / Markup) has enabled the frontend to be
      split from the backend so that site development can happen ever faster and
      independent of the backend. Jamstack is an architecture shift that’s been
      proven out by Google, Facebook, and Microsoft (
      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=EpYYe6aQjJM&feature=youtu.be"
      >
        see how Microsoft Docs is 100% Jamstack
      </a>
      ) - and is quickly becoming the new modernization push for everyone else.
    </P>

    <P>
      <a href="https://twitter.com/daniel_levine" target="_blank">
        Daniel Levine
      </a>{' '}
      at Accel predicts that a “designer and developer-first approach to the
      frontend experience is what will separate the winners from the losers in
      businesses across all major market categories” and says Vercel has the
      opportunity to be{' '}
      <em>
        <b>“like AWS for frontend developers.”</b>
      </em>{' '}
    </P>

    <H2 id="megatrends">Three Megatrends for Frontend Developer Teams</H2>

    <P>
      So what is the best developer experience, given the rise of Jamstack
      architecture and the general push to modernize the frontend with tools for
      faster iteration (delighting Javascript developers) and faster sites
      (delighting users)? These are three frontend developer experience
      megatrends that Vercel’s cloud platform for frontend teams is built
      around:
    </P>

    <H3 id="develop-with-components">
      1. Components Are the Right Primitive for the Frontend
    </H3>
    <P>
      As the demand for richer frontend experiences has grown, the pressure is
      for teams to deliver component and design systems - coherent frontend
      experiences across every platform. Your button should look the same on
      web, mobile and desktop, and even your emails.
    </P>

    <P>
      Not too long ago, people weren’t talking about components, they were
      talking about selector engines and the DOM. Then React (out of Facebook)
      introduced this primitive of the component. Other frameworks allow you to
      define components, but the movement that really pioneered this trend was
      React.
    </P>

    <P>
      Years ago,{' '}
      <a href="https://twitter.com/timneutkens" target="_blank">
        Tim Neutkens
      </a>
      ,{' '}
      <a href="https://twitter.com/nkzawa" target="_blank">
        Naoyuki Kanezawa
      </a>{' '}
      and I co-created Next.js because of our belief that React was so powerful
      it could become the full engine for the frontend. We started Next.js to
      provide some critical new functionality to make React consumable for
      everyone who wanted to do <b>everything</b> with React, instead of just
      one specific component. We saw a demand for the component-based React
      approach to drive the full frontend experience.
    </P>

    <P>
      Indeed, frontend teams today are experiencing an urgency around this
      component-first paradigm in their development experience. That’s driving
      them towards React and separating, splitting out, and re-thinking the
      entire frontend experience. Vercel aims to be their one-stop shop &mdash;
      not just if they arrived at that point by using{' '}
      <a href="https://nextjs.org" target="_blank">
        Next.js
      </a>
      , but on{' '}
      <a href="https://vuejs.org/" target="_blank">
        any other
      </a>{' '}
      <a href="https://nuxtjs.org" target="_blank">
        component-based
      </a>{' '}
      <a href="https://svelte.dev/" target="_blank">
        technology
      </a>{' '}
      <a href="https://glimmerjs.com/" target="_blank">
        they
      </a>{' '}
      <a href="https://angular.io/" target="_blank">
        may
      </a>{' '}
      have adopted as their entry point.
    </P>

    <P>
      It’s worth noting that today there are many other compelling
      component-based frameworks like{' '}
      <a href="https://svelte.dev" target="_blank">
        Svelte
      </a>{' '}
      and{' '}
      <a href="https://vuejs.org" target="_blank">
        Vue
      </a>{' '}
      that are taking an aggressive approach to problems like reducing the
      amount of Javascript that gets sent to the client side. These other
      frameworks are staking their ground in a number of interesting problem
      domains within the component-based ecosystem and the{' '}
      <a target="_blank" href="https://www.webcomponents.org/">
        Web's own standardized efforts
      </a>
      . Vercel as a platform wants to support them all!
    </P>

    <H3 id="preview">
      2. Deploy Preview &gt; Code Review. URLs as the Primitive for
      Collaboration
    </H3>

    <P>
      The code push and review workflow is way too complicated. Too many cycles
      are spent configuring your own CI/CD pipeline, setting up Jenkins, finding
      your optimal vendor for CI, finding your optimal vendor for CDN, and so
      on. It’s also hard to get your CI/CD and your CDN to talk, and ensuring
      the Rube Goldberg apparatus stays coherent.
    </P>

    <P>
      Vercel made a huge breakthrough with the realization that the preview
      deploy URL was a superior abstraction for frontend teams. We created a
      workflow for deploying / reviewing code in real-time &mdash; similar to a
      preview in a CMS, but we accomplish this by{' '}
      <a href="https://vercel.com/github" target="_blank">
        <b>integrating into Git and deploying with every push</b>
      </a>
      .
    </P>

    <P>
      Sounds like a pretty basic evolution, but it tears down so much complexity
      and makes frontend teams so much faster!
    </P>

    <P>
      The most obvious immediate benefit of the URL for deploy review is making
      it much easier to collaborate across any organization, from marketing and
      sales to legal and engineering. Frontend teams can send these URLs over
      chat, instantly seeing what their teammates are developing and what the
      next big push will be.
    </P>

    <P>
      When you have a deploy URL, it redefines not just testing, but the entire
      software development experience, from idea to conception to QA. Now you’re
      testing against the real thing. You get a working URL that can be shared
      and tested as a full working version. You eliminate the entire staging
      process.
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

    <H3 id="ship-with-speed">3. It’s All About Speed</H3>

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

    <H2>Onward</H2>

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

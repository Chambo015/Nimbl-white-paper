<template>
  <section>
    <div class="container py-[100px] max-sm:py-[50px]">
      <h3 class="text-nimbl-black">
        Nimbl: The Ultimate Social <br />
        Media Experience
      </h3>
      <p class="mt-[30px] text-nimbl-black text-2xl max-w-[1180px] max-sm:text-base max-sm:my-5 max-2xl:text-xl">
        At the core of our revolutionary ecosystem is Nimbl, the reigning monarch of social media apps. Groundbreaking
        monetization opportunities merely scratch the surface. The true magnetism lies in the exceptional user
        experience Nimbl offers, designed to captivate and retain our community.
      </p>
      <dl class="mt-12 max-sm:mt-5">
        <dt
          class="first_before flex items-center text-[40px] font-rfdewi text-nimbl-gray max-sm:text-2xl max-2xl:text-3xl">
          Design: A Game-Like Experience
        </dt>
        <dd class="text-nimbl-black text-2xl leading-tight mt-7 mb-7 max-sm:text-base max-2xl:text-xl">
          The architecture of Nimbl transcends the traditional app design, embracing a game-like aesthetic and
          interaction model. Each element immerses users into a world that's not just to be watched, but to be
          experienced fully.
        </dd>
      </dl>
      <p class="text-2xl mt-11">Features and Their Utility:</p>
      <div
        class="grid grid-cols-2 mt-[30px] gap-[30px] max-sm:grid-cols-1 [&>div]:h-[405px] [&>div]:max-2xl:h-[380px] [&>div]:max-sm:h-auto">
        <div class="bg-[#1E1B25] px-[30px] pt-14 relative overflow-hidden max-sm:h-auto max-sm:px-4 max-md:py-5">
          <AppIconCards num="01" />
          <p class="text-2xl text-white font-semibold mt-6">Joystick Navigation</p>
          <p class="max-w-[460px] text-white mt-4 max-2xl:max-w-[400px]">
            Taking our game-like experience to the next level, Nimbl introduces a joystick within the app, as well as in
            the website and PC versions. This joystick acts as a quick and intuitive shortcut for switching between
            pages, further enhancing the user experience.
          </p>
          <NuxtImg
            loading="lazy"
            placeholder
            quality="100"
            format="webp"
            src="/img/joystick.png"
            width="179"
            height="224"
            class="absolute w-[179px] h-[224px] right-[70px] max-2xl:right-10 top-1/2 -translate-y-1/2 max-sm:static max-sm:translate-y-0 max-sm:mx-auto max-sm:mt-4" />
        </div>
        <div class="bg-[#1E1B25] px-[30px] pt-14 relative overflow-hidden max-sm:h-auto max-sm:px-4 max-sm:py-5">
          <AppIconCards num="02" />
          <p class="text-2xl text-white font-semibold mt-6">Swipe-to-Save Interface</p>
          <p class="max-w-[460px] text-white mt-4 max-2xl:max-w-[400px]">
            No more endless scrolling. By simply swiping right, you save the content you love, while a swipe left helps
            curate your feed by filtering out content you're not interested in.
          </p>
          <NuxtImg
            loading="lazy"
            format="webp"
            :placeholder="[310, 280, 20, 2]"
            quality="100"
            src="/img/swipe.png"
            width="310"
            height="280"
            class="absolute w-[310px] h-[280px] right-[20px] max-2xl:right-2 top-1/2 -translate-y-1/2 max-sm:static max-sm:translate-y-0 max-sm:mx-auto max-sm:mt-4" />
        </div>
        <div class="bg-[#1E1B25] px-[30px] pt-14 relative overflow-hidden max-sm:h-auto max-sm:px-4 max-sm:py-5">
          <AppIconCards num="03" />
          <p class="text-2xl text-white font-semibold mt-6">Short-to-Long-Form Transitions</p>
          <p class="max-w-[460px] text-white mt-4 max-2xl:max-w-[400px]">
            Nimbl offers the ultimate flexibility in content forms. Whether it's bite-sized videos or in-depth long
            forms, the transition is seamless.
          </p>
          <NuxtImg
            loading="lazy"
            format="webp"
            :placeholder="[161, 342, 20, 3]"
            quality="100"
            src="/img/continue_watching.png"
            width="161"
            height="342"
            class="absolute w-[161px] h-[342px] right-[70px] max-2xl:right-10 top-1/2 -translate-y-1/2 max-sm:static max-sm:translate-y-0 max-sm:mx-auto max-sm:mt-4" />
        </div>
        <div class="bg-[#1E1B25] px-[30px] pt-14 relative overflow-hidden max-sm:h-auto max-sm:px-4 max-sm:py-5">
          <AppIconCards num="04" />
          <p class="text-2xl text-white font-semibold mt-6">Crypto Transfers</p>
          <p class="max-w-[460px] text-white mt-4 max-2xl:max-w-[400px]">
            Being a Web3 platform, Nimbl integrates a secure and efficient way to send and receive cryptocurrency right
            in the app.
          </p>
          <NuxtImg
            loading="lazy"
            format="webp"
            :placeholder="[161, 342, 20, 3]"
            quality="100"
            src="/img/Crypto_Transfers.png"
            width="161"
            height="342"
            class="absolute w-[161px] h-[342px] max-2xl:right-10 right-[70px] top-1/2 -translate-y-1/2 max-sm:static max-sm:translate-y-0 max-sm:mx-auto max-sm:mt-4" />
        </div>
        <div class="bg-[#1E1B25] px-[30px] pt-14 relative overflow-hidden max-sm:h-auto max-sm:px-4 max-sm:py-5">
          <AppIconCards num="05" />
          <p class="text-2xl text-white font-semibold mt-6">
            Gamified Community <br class="3xl:hidden" />
            Chat
          </p>
          <p class="max-w-[460px] text-white mt-4 max-2xl:max-w-[400px]">
            With features so robust and engaging, our chat feels like a gamified version of Telegram, making both
            community building and one-to-one conversations incredibly enjoyable.
          </p>
          <NuxtImg
            loading="lazy"
            format="webp"
            :placeholder="[390, 218, 20, 3]"
            quality="100"
            src="/img/chat.png"
            width="390"
            height="218"
            class="absolute w-[390px] h-[218px] right-[2px] top-1/2 -translate-y-1/2 max-sm:static max-sm:translate-y-0 max-sm:mx-auto max-sm:mt-4 max-sm:w-full max-sm:h-auto" />
        </div>
        <div class="bg-[#1E1B25] px-[30px] pt-14 relative overflow-hidden max-sm:h-auto max-sm:px-4 max-sm:py-5">
          <AppIconCards num="06" />
          <p class="text-2xl text-white font-semibold mt-6">Open and Closed Communities</p>
          <p class="max-w-[460px] text-white mt-4 max-2xl:max-w-[400px]">
            Influencers can build two types of communities, one for all viewers and a more exclusive one for their
            Stakeholders, offering a tiered engagement experience.
          </p>
          <NuxtImg
            loading="lazy"
            format="webp"
            :placeholder="[228, 368, 20, 3]"
            quality="100"
            src="/img/post.png"
            width="228"
            height="368"
            class="absolute w-[228px] h-[368px] right-[60px] max-2xl:right-10 top-1/2 -translate-y-1/2 max-sm:static max-sm:translate-y-0 max-sm:mx-auto max-sm:mt-4" />
        </div>
        <div class="bg-[#1E1B25] px-[30px] pt-14 relative overflow-hidden max-sm:px-4 max-sm:py-5">
          <AppIconCards num="07" />
          <p class="text-2xl text-white font-semibold mt-6">AI-Powered Video Tools</p>
          <p class="max-w-[400px] text-white mt-4 max-2xl:max-w-[350px]">
            Our state-of-the-art AI tools can create short videos from long-form content, and translate videos into over
            70 languages, removing all barriers of content and language.
          </p>
          <NuxtImg
            loading="lazy"
            format="webp"
            :placeholder="[324, 182, 20, 3]"
            quality="100"
            src="/img/nimble.png"
            width="324"
            height="182"
            class="absolute w-[324px] h-[182px] right-[36px] max-2xl:right-5 top-1/2 -translate-y-1/2 max-sm:static max-sm:translate-y-0 max-sm:mx-auto max-sm:mt-4 max-sm:w-full max-sm:h-auto" />
        </div>
        <div class="bg-[#1E1B25] px-[30px] pt-14 relative overflow-hidden max-sm:px-4 max-sm:py-5">
          <AppIconCards num="08" />
          <p class="text-2xl text-white font-semibold mt-6">Collaboration Space</p>
          <p class="max-w-[450px] text-white mt-4 max-2xl:max-w-[380px]">
            We foster a space where creators and followers can collaborate on projects, a feature unique to Nimbl and a
            testament to our commitment to community involvement.
          </p>
          <NuxtImg
            loading="lazy"
            format="webp"
            :placeholder="[216, 369, 20, 3]"
            quality="100"
            src="/img/longs.png"
            width="216"
            height="369"
            class="absolute w-[216px] h-[369px] right-[70px] max-2xl:right-10 top-1/2 -translate-y-1/2 max-sm:static max-sm:translate-y-0 max-sm:mx-auto max-sm:mt-4" />
        </div>
        <div class="bg-[#1E1B25] px-[30px] pt-14 relative overflow-hidden max-sm:px-4 max-sm:py-5">
          <AppIconCards num="09" />
          <p class="text-2xl text-white font-semibold mt-6">Experience and Levels</p>
          <p class="max-w-[450px] text-white mt-4 max-2xl:max-w-[380px]">
            With each interaction, users earn experience points, moving up levels, and unlocking badges, themes, and
            various digital rewards.
          </p>
          <NuxtImg
            loading="lazy"
            format="webp"
            src="/img/levels.png"
            :placeholder="[284, 218, 20, 3]"
            quality="100"
            width="284"
            height="218"
            class="absolute w-[284px] h-[218px] right-[30px] max-2xl:right-5 top-1/2 -translate-y-1/2 max-sm:static max-sm:translate-y-0 max-sm:mx-auto max-sm:mt-4" />
        </div>
        <div class="bg-[#1E1B25] px-[30px] pt-14 relative overflow-hidden max-sm:px-4 max-sm:py-5">
          <AppIconCards num="10" />
          <p class="text-2xl text-white font-semibold mt-6 relative z-10 max-w-[370px]">
            Bounty Campaigns for Early Users and Creators
          </p>
          <p class="max-w-[450px] text-white mt-4 relative z-10 max-2xl:max-w-[380px]">
            Engage more deeply with the platform and be rewarded with more than just Stakes; take part in bounty
            campaigns designed to make the early days of Nimbl extremely rewarding.
          </p>
          <NuxtImg
            loading="lazy"
            format="webp"
            src="/img/token.png"
            :placeholder="[390, 405, 20, 3]"
            quality="100"
            width="390"
            height="405"
            class="absolute w-[390px] h-[405px] right-[0px] top-1/2 -translate-y-1/2 max-sm:static max-sm:translate-y-4 max-sm:translate-x-4 max-sm:ml-auto max-sm:mt-4 max-sm:w-full max-sm:h-auto" />
        </div>
        <div class="bg-[#1E1B25] px-[30px] pt-14 relative overflow-hidden max-sm:px-4 max-sm:py-5">
          <AppIconCards num="11" />
          <p class="text-2xl text-white font-semibold mt-6 relative z-10 max-w-[320px]">
            On-Platform Perks for Nimbl Ultra
          </p>
          <p class="max-w-[450px] text-white mt-4 relative z-10 max-2xl:max-w-[400px]">
            Subscribe to Nimbl Ultra using our native token and unlock a whole new universe of premium features and
            content.
          </p>
          <NuxtImg
            loading="lazy"
            format="webp"
            src="/img/perks.png"
            :placeholder="[297, 374, 20, 3]"
            quality="100"
            width="297"
            height="374"
            class="absolute w-[297px] h-[374px] right-[60px] max-2xl:right-5 top-1/2 -translate-y-1/2 max-sm:static max-sm:translate-y-0 max-sm:mx-auto max-sm:mt-4" />
        </div>
      </div>
      <div
        class="flex justify-between mt-[200px] max-sm:mt-[50px] max-sm:flex-col max-2xl:mt-[100px] max-2xl:items-center">
        <div>
          <h3 class="text-nimbl-black">Nimbl's Unmatched User Experience:</h3>
          <p
            class="mt-[30px] text-2xl text-nimbl-black max-w-[1080px] max-sm:text-base max-2xl:text-xl max-2xl:max-w-[900px]">
            Gamification, Game-Like Design, and Visual Excellence <br />
            At Nimbl, the game-like atmosphere and gamification elements are only part of the story. We also bring a
            meticulous focus on visual design, animations, transitions, and other UI elements. This ensures not just
            functionality, but a visually stunning and smooth experience that captivates users from the get-go.
          </p>
        </div>
        <div class="flex-shrink-0">
          <NuxtImg
            quality="100"
            :placeholder="[200, 250, 20, 3]"
            loading="lazy"
            format="webp"
            src="/img/frame_users.png"
            width="525"
            height="654"
            class="w-[525px] h-[654px] max-sm:w-full max-sm:h-auto max-md:aspect-[0.8] max-2xl:w-[450px] max-2xl:h-[561px]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.first_before::before {
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='none' viewBox='0 0 50 50'%3e%3cpath fill='url(%23a)' d='m32.22 7.35 10.236 10.327-.065 14.542-10.328 10.237-14.542-.065L7.284 32.063l.065-14.542L17.678 7.284l14.541.065Z'/%3e%3cg clip-path='url(%23b)'%3e%3cpath fill='white' d='M16.469 15.164a.946.946 0 0 0-1.196.11.93.93 0 0 0-.109 1.19l4.375 6.38-3.89 1.265a.936.936 0 0 0 0 1.782l4.027 1.304-2.067 3.93a.938.938 0 0 0 1.266 1.266l3.93-2.067 1.304 4.028a.936.936 0 0 0 1.782 0l1.304-4.028 3.93 2.067a.938.938 0 0 0 1.266-1.266l-2.067-3.93 4.028-1.304a.936.936 0 0 0 0-1.782l-4.16-1.347 1.003-2.75a.938.938 0 0 0-1.203-1.203l-2.75 1.003-1.351-4.164a.936.936 0 0 0-1.782 0l-1.261 3.891-6.38-4.375Z'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='a' x1='7.313' x2='42.719' y1='17.593' y2='32.444' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23E5CBFF'/%3e%3cstop offset='1' stop-color='%23D4E8FF'/%3e%3c/linearGradient%3e%3cclipPath id='b'%3e%3cpath fill='white' d='M0 0h20v20H0z' transform='translate(15 15)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  @apply mr-4 h-[50px] w-[50px];
}
</style>

<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img class="w-[1000px] h-[350px] transition-transform transform hover:scale-125"
        src="~/assets/img/personal-computer.png" alt="Starship starts the engine" loading="eager" format="avif"
        width="1000" height="600" />
    </div>

    <div>
      <h1 class="text-5xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight">
        Powering Enterprise Innovation with Trusted Technology
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Unlock the full potential of your business with cutting-edge converged & hyper-converged systems, data
        management, enterprise solutions, and more. We deliver industry-leading Cisco, Oracle, Hitachi, HP, and other OEM
        products to enhance performance, security, and scalability.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink href="https://github.com/Gr33nW33n/nuxtship-template" target="_blank" rel="noopener">Our Products
        </LandingLink>
        <LandingLink size="lg" styleName="outline" rel="noopener" href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank">Our Solutions</LandingLink>
      </div>
    </div>
  </main>
</template>

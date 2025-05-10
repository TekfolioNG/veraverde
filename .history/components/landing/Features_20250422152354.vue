<template>
  <section class="bg-white relative overflow-hidden">
    <!-- Decorative triangle in top-right corner -->
    <div class="absolute top-0 right-0 w-1/4 h-64 bg-yellow opacity-20 transform rotate-180"></div>

    <div class="container mx-auto px-4 py-16 md:py-24">
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
        <!-- Left side content (about 3/4 width on desktop) -->
        <div class="lg:w-3/4">
          <h1 class="font-heading text-4xl md:text-5xl mb-8 tracking-wider-custom">Focused and Future Ready</h1>

          <p class="text-lg mb-6">
            The flexibility to mobilize the right people to deliver unique solutions, an unwavering focus to delivering
            value to
            your business bottom line; and the capability to leverage innovation to meet emerging challenges and keep
            you at
            the fore. This is PCL.
          </p>

          <p class="text-lg mb-6">
            As a company that is 100 percent employee-owned, we collaborate and innovate to help our partners thrive.
            Our
            culture of ownership drives your success
          </p>

          <p class="text-lg mb-6">
            Whether you are in the buildings, civil, or industrial market, partnering with PCL means you're gaining a
            proven,
            reliable and trusted full-service partner with a mobile network of more than 5,200 employees, experts and
            seasoned professionals across Canada, the United States, Australia and the Caribbean.
          </p>

          <p class="text-lg mb-8">
            From advanced digital construction technologies to innovative offsite modular manufacturing, to the cutting
            edge
            of sustainable construction, we lead the industry as we have for more than 100 years. We leverage the
            expertise
            from this vast experience to help our clients and partners build lasting legacies.
          </p>

          <a href="#"
            class="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 py-3 px-8 font-medium">ABOUT
            US</a>
        </div>

        <!-- Right side stats (about 1/4 width on desktop) -->
        <div class="lg:w-1/4 mt-12 lg:mt-0">
          <div class="space-y-16">
            <!-- Stat 1 -->
            <div class="stat-block">
              <h2 class="text-primary text-5xl font-bold mb-2">119</h2>
              <p class="text-xl font-medium">Years in Operation</p>
            </div>

            <!-- Stat 2 -->
            <div class="stat-block">
              <h2 class="text-primary text-5xl font-bold mb-2">$11.3B+</h2>
              <p class="text-xl font-medium">Annual Construction Volume</p>
            </div>

            <!-- Stat 3 -->
            <div class="stat-block">
              <h2 class="text-primary text-5xl font-bold mb-2">#10</h2>
              <p class="text-xl font-medium">Rank in ENR's list of Top 400 Contractors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PCLAboutSection'
}
</script>

<style scoped>
.stat-block {
  position: relative;
  padding-left: 1rem;
}

.stat-block::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  height: 2.5rem;
  width: 4px;
  background-color: #003366;
  /* primary color */
}

@media (max-width: 768px) {
  .stat-block {
    margin-bottom: 2rem;
  }
}
</style>
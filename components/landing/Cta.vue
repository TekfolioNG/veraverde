<template>
  <section class="xstrato-cta relative py-16 md:py-24 overflow-hidden mb-16 md:mb-24">
    <!-- Diagonal split background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-900/30 to-transparent transform skew-y-1 origin-top-right"></div>
    </div>

    <!-- Geometric pattern overlay -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-32 h-32 border border-white/20 rotate-45"></div>
      <div class="absolute bottom-20 right-20 w-24 h-24 border border-white/15 rotate-12"></div>
      <div class="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 -rotate-12"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        
        <!-- Left Column - Content -->
        <div class="space-y-6">
          <div class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span class="text-white/90 text-sm font-medium tracking-wide">READY TO BEGIN?</span>
          </div>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Turn Your Vision Into 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Reality
            </span>
          </h2>

          <p class="text-lg text-white/80 leading-relaxed">
            Whether it's construction & general contracting, solar energy solutions, engineering & design services, or renovation & infrastructure upgrades, 
            Xstrato delivers results that exceed expectations. Let's collaborate to create something extraordinary.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="/contact" 
               class="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Get Started Today</span>
              <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
            
            <a href="/services" 
               class="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300">
              Our Services
            </a>
          </div>
        </div>

        <!-- Right Column - Visual Element -->
        <div class="relative">
          <div class="relative p-8">
            <!-- Main card -->
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold text-lg">Proven Results</h3>
                    <p class="text-white/70 text-sm">Successful projects across multiple industries</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold text-lg">Expert Team</h3>
                    <p class="text-white/70 text-sm">Dedicated and experienced professionals in every field</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold text-lg">Fast Delivery</h3>
                    <p class="text-white/70 text-sm">Efficient project completion on schedule</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold text-lg">Quick Response</h3>
                    <p class="text-white/70 text-sm">We'll get back to you within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Floating accent elements -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-60"></div>
            <div class="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom accent line -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>
  </section>
</template>

<script setup>
// No additional script logic needed
</script>

<style scoped>
.xstrato-cta {
  position: relative;
}

/* Additional hover effects */
.xstrato-cta a:hover {
  transform: translateY(-2px);
}

/* Subtle animation for floating elements */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

.xstrato-cta .absolute.w-8,
.xstrato-cta .absolute.w-6 {
  animation: float 6s ease-in-out infinite;
}

.xstrato-cta .absolute.w-6 {
  animation-delay: -3s;
}
</style>
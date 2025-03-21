<template>
    <div>
        <!-- Keep the existing hero section -->
        <div class="w-full h-48 md:h-64 lg:h-96 relative">
            <img src="~/assets/img/toei-about-us.jpg" alt="The Oaktree Empowerment Initiative"
                class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div class="text-white text-center p-4 md:p-8">
                    <h1 class="text-[#CEE377] text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">Make a Difference
                    </h1>
                    <p class="text-base md:text-xl">Your support transforms lives</p>
                </div>
            </div>
        </div>



    </div>
</template>

<script setup>

definePageMeta({
    layout: "landing",
});
</script>
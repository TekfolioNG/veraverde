<template>
    <div class="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 flex flex-col items-center">
        <h2 class="text-3xl font-bold text-center mb-8">Share Your Ideas</h2>

        <div class="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div class="p-6">
                <p class="text-lg text-center mb-6">
                    Help shape the future of The Oaktree Empowerment Initiative in Nigeria
                </p>

                <!-- Idea submission form -->
                <form @submit.prevent="submitIdea" class="space-y-4">
                    <div>
                        <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Idea Subject</label>
                        <input v-model="ideaSubject" type="text" id="subject"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#009976] focus:border-[#009976]"
                            placeholder="e.g., Clean Water Project in Lagos" required />
                    </div>

                    <div>
                        <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Idea
                            Description</label>
                        <textarea v-model="ideaDescription" id="description" rows="4"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#009976] focus:border-[#009976]"
                            placeholder="Please describe your idea for where we should focus our efforts next in Nigeria..."
                            required></textarea>
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                        <input v-model="email" type="email" id="email"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#009976] focus:border-[#009976]"
                            placeholder="your@email.com" required />
                    </div>

                    <div class="flex justify-center mt-6">
                        <button type="submit"
                            class="bg-[#009976] hover:bg-[#00B28A] text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors"
                            :disabled="isAnimating">
                            Submit Your Idea
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Animation container -->
        <div v-show="showAnimation"
            class="w-full max-w-2xl relative h-80 bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div class="animation-container relative w-full h-full">
                <!-- Paper document -->
                <div ref="paper"
                    class="absolute w-20 h-28 bg-white border-2 border-gray-300 rounded shadow-md z-10 transform-gpu"
                    :style="paperStyle">
                    <div class="w-full h-1 bg-[#009976] mt-2"></div>
                    <div class="w-3/4 h-1 bg-gray-300 mx-auto mt-3"></div>
                    <div class="w-3/4 h-1 bg-gray-300 mx-auto mt-2"></div>
                    <div class="w-3/4 h-1 bg-gray-300 mx-auto mt-2"></div>
                    <div class="w-1/2 h-1 bg-gray-300 mx-auto mt-2"></div>
                </div>

                <!-- Hand -->
                <div ref="hand" class="absolute w-12 h-16 z-20 transform-gpu" :style="handStyle">
                    <svg viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18 12C18 10.3431 16.6569 9 15 9C13.3431 9 12 10.3431 12 12V20C12 21.6569 13.3431 23 15 23C16.6569 23 18 21.6569 18 20V12Z"
                            fill="#F5D0A9" />
                        <path
                            d="M22 11C22 9.34315 20.6569 8 19 8C17.3431 8 16 9.34315 16 11V19C16 20.6569 17.3431 22 19 22C20.6569 22 22 20.6569 22 19V11Z"
                            fill="#F5D0A9" />
                        <path
                            d="M14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8V16C8 17.6569 9.34315 19 11 19C12.6569 19 14 17.6569 14 16V8Z"
                            fill="#F5D0A9" />
                        <path
                            d="M10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7V15C4 16.6569 5.34315 18 7 18C8.65685 18 10 16.6569 10 15V7Z"
                            fill="#F5D0A9" />
                        <path
                            d="M6 15C6 13.3431 4.65685 12 3 12C1.34315 12 0 13.3431 0 15V23C0 24.6569 1.34315 26 3 26C4.65685 26 6 24.6569 6 23V15Z"
                            fill="#F5D0A9" />
                        <path
                            d="M2 25C2 23.3431 3.34315 22 5 22H20C21.6569 22 23 23.3431 23 25V30C23 30.5523 22.5523 31 22 31H3C2.44772 31 2 30.5523 2 30V25Z"
                            fill="#F5D0A9" />
                    </svg>
                </div>

                <!-- Ideas Box -->
                <div class="absolute bottom-10 right-20 w-32 h-24">
                    <!-- Box back -->
                    <div class="absolute bottom-0 w-full h-20 bg-amber-700 rounded-md"></div>
                    <!-- Box opening -->
                    <div class="absolute bottom-20 w-full h-4 bg-amber-800 rounded-t-md"></div>
                    <!-- Box left flap (open) -->
                    <div ref="leftFlap" :class="flapClass"
                        class="absolute bottom-20 left-0 w-14 h-12 bg-amber-600 origin-bottom-left"
                        :style="leftFlapStyle"></div>
                    <!-- Box right flap (open) -->
                    <div ref="rightFlap" :class="flapClass"
                        class="absolute bottom-20 right-0 w-14 h-12 bg-amber-600 origin-bottom-right"
                        :style="rightFlapStyle"></div>

                    <!-- Box Label -->
                    <div class="absolute bottom-10 w-full text-center">
                        <div class="bg-white px-2 py-1 rounded inline-block text-xs font-bold">IDEAS</div>
                    </div>
                </div>

                <div v-if="submissionStatus" class="absolute bottom-4 w-full text-center text-lg font-medium"
                    :class="submissionStatusClass">
                    {{ submissionStatus }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import { computed, ref } from 'vue';

// Form data
const ideaSubject = ref('');
const ideaDescription = ref('');
const email = ref('');

// Animation state
const isAnimating = ref(false);
const animationComplete = ref(false);
const showAnimation = ref(false);
const submissionStatus = ref('');
import gsap from 'gsap';
import { computed, ref } from 'vue';
);

// Element refs
const paper = ref(null);
const hand = ref(null);
const leftFlap = ref(null);
const rightFlap = ref(null);

// Initial styles
const paperStyle = computed(() => ({
    top: '50px',
    left: '50px',
    transform: animationComplete.value ? 'scale(0.7) rotate(5deg)' : 'scale(1) rotate(0deg)',
    opacity: isAnimating.value ? 1 : 0
}));

const handStyle = computed(() => ({
    top: '30px',
    left: '45px',
    transform: 'rotate(10deg)',
    opacity: isAnimating.value ? 1 : 0
}));

const leftFlapStyle = computed(() => ({
    transform: `rotate(${animationComplete.value ? 0 : -60}deg)`
}));

const rightFlapStyle = computed(() => ({
    transform: `rotate(${animationComplete.value ? 0 : 60}deg)`
}));

const flapClass = computed(() =>
    animationComplete.value ? 'transition-transform duration-1000' : ''
);

// Form submission and animation
const submitIdea = async () => {
    if (isAnimating.value) return;

    showAnimation.value = true;
    isAnimating.value = true;
    submissionStatus.value = '';

    // Create animation timeline
    const tl = gsap.timeline({
        onComplete: () => {
            // Set flaps to close
            animationComplete.value = true;

            setTimeout(() => {
                // Show success message
                submissionStatus.value = "Success! Your idea has been submitted.";

                // Reset after 3 seconds
                setTimeout(() => {
                    gsap.to(paper.value, {
                        opacity: 0,
                        duration: 0.5,
                    });
                    gsap.to(hand.value, {
                        opacity: 0,
                        duration: 0.5,
                    });

                    // Reset form fields
                    ideaSubject.value = '';
                    ideaDescription.value = '';

                    isAnimating.value = false;
                    animationComplete.value = false;

                    // Hide animation after delay
                    setTimeout(() => {
                        showAnimation.value = false;
                        submissionStatus.value = '';
                    }, 1000);
                }, 3000);
            }, 500);
        }
    });

    try {
        // Simulate sending email (in production replace with actual API call)
        // await sendEmail({
        //   to: 'ngo@example.com',
        //   subject: `New Idea: ${ideaSubject.value}`,
        //   body: `Idea: ${ideaSubject.value}\n\nDescription: ${ideaDescription.value}\n\nSubmitted by: ${email.value}`
        // });

        // Hand and paper animation sequence
        tl.to(paper.value, {
            opacity: 1,
            duration: 0.3
        })
            .to(hand.value, {
                opacity: 1,
                duration: 0.3
            })
            .to(hand.value, {
                top: '+=10',
                left: '+=5',
                duration: 0.5,
                ease: "power1.out"
            })
            .to(paper.value, {
                top: '50%',
                left: '50%',
                xPercent: -50,
                yPercent: -50,
                duration: 1,
                ease: "power1.inOut"
            }, "-=0.2")
            .to(hand.value, {
                top: '50%',
                left: '42%',
                xPercent: -50,
                yPercent: -50,
                duration: 1,
                ease: "power1.inOut"
            }, "-=1")
            .to(paper.value, {
                top: '55%',
                left: '55%',
                rotation: 5,
                scale: 0.7,
                duration: 0.8,
                ease: "power2.in"
            })
            .to(hand.value, {
                top: '55%',
                left: '47%',
                rotation: 15,
                duration: 0.8,
                ease: "power2.in"
            }, "-=0.8")
            .to(hand.value, {
                top: '+=50',
                left: '-=50',
                opacity: 0,
                duration: 0.5,
                ease: "power1.in"
            });
    } catch (error) {
        submissionStatus.value = "Something went wrong. Please try again.";
        isAnimating.value = false;
        console.error("Error submitting idea:", error);
    }
};

// Function to actually send the email (replace with your implementation)
const sendEmail = async (emailData) => {
    // In production, implement actual email sending functionality
    // For example, using an API endpoint:
    // await fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(emailData)
    // });

    // For now, just simulate a delay
    return new Promise(resolve => setTimeout(resolve, 1000));
};
</script>

<style scoped>
.animation-container {
    perspective: 1000px;
}
</style>
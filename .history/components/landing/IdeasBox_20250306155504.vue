<template>
    <div class="min-h-screen bg-white py-16 px-4">
        <div class="max-w-5xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-10 text-emerald-800">Share Your Ideas</h2>

            <!-- Main content container with side-by-side layout -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                <!-- Form section -->
                <div
                    class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
                    <div class="p-8">
                        <p class="text-lg text-center mb-6 text-emerald-700 font-medium">
                            Help shape the future of The Oaktree Empowerment Initiative in Nigeria
                        </p>

                        <!-- Idea submission form -->
                        <form @submit.prevent="submitIdea" class="space-y-5">
                            <div>
                                <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">Idea
                                    Subject</label>
                                <input v-model="ideaSubject" type="text" id="subject"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                    placeholder="e.g., Clean Water Project in Lagos" required
                                    @input="updatePaperContent('subject')" />
                            </div>

                            <div>
                                <label for="description" class="block text-sm font-semibold text-gray-700 mb-2">Idea
                                    Description</label>
                                <textarea v-model="ideaDescription" id="description" rows="4"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                    placeholder="Please describe your idea for where we should focus our efforts next in Nigeria..."
                                    required @input="updatePaperContent('description')"></textarea>
                            </div>

                            <div>
                                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Your
                                    Email</label>
                                <input v-model="email" type="email" id="email"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                    placeholder="your@email.com" required @input="updatePaperContent('email')" />
                            </div>

                            <div class="flex justify-center mt-8">
                                <button type="submit"
                                    class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-200"
                                    :class="{ 'opacity-50 cursor-not-allowed': isAnimating }" :disabled="isAnimating">
                                    <span v-if="!isAnimating">Submit Your Idea</span>
                                    <span v-else class="flex items-center">
                                        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                        </svg>
                                        Processing...
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Animation container -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden relative">
                    <div class="animation-container relative w-full h-full flex items-center justify-center">
                        <!-- Paper document - positioned at top right initially -->
                        <div ref="paper"
                            class="absolute w-32 h-40 bg-white border-2 border-gray-300 rounded-md shadow-md z-10 transform-gpu"
                            :style="paperStyle">
                            <div class="w-full h-2 bg-emerald-600 mt-3"></div>
                            <!-- Dynamic content that shows up as user types -->
                            <div v-if="paperSubjectLine"
                                class="w-3/4 h-1.5 bg-gray-700 mx-auto mt-4 transition-all duration-300"
                                :style="{ width: paperSubjectWidth }"></div>
                            <div v-if="paperDescriptionLine1"
                                class="w-3/4 h-1.5 bg-gray-700 mx-auto mt-3 transition-all duration-300"
                                :style="{ width: paperDescLine1Width }"></div>
                            <div v-if="paperDescriptionLine2"
                                class="w-3/4 h-1.5 bg-gray-700 mx-auto mt-3 transition-all duration-300"
                                :style="{ width: paperDescLine2Width }"></div>
                            <div v-if="paperEmailLine"
                                class="w-1/2 h-1.5 bg-gray-700 mx-auto mt-3 transition-all duration-300"
                                :style="{ width: paperEmailWidth }"></div>
                            <div class="w-2/3 h-1.5 bg-gray-300 mx-auto mt-3"></div>
                        </div>

                        <!-- Ideas Box - positioned at bottom center -->
                        <div class="absolute bottom-20 w-48 h-36">
                            <!-- Box back -->
                            <div
                                class="absolute bottom-0 w-full h-28 bg-gradient-to-b from-amber-600 to-amber-700 rounded-md shadow-md">
                            </div>
                            <!-- Box opening -->
                            <div class="absolute bottom-28 w-full h-6 bg-amber-800 rounded-t-md"></div>
                            <!-- Box left flap -->
                            <div ref="leftFlap" :class="flapClass"
                                class="absolute bottom-28 left-0 w-24 h-16 bg-gradient-to-r from-amber-500 to-amber-600 origin-bottom-left"
                                :style="leftFlapStyle"></div>
                            <!-- Box right flap -->
                            <div ref="rightFlap" :class="flapClass"
                                class="absolute bottom-28 right-0 w-24 h-16 bg-gradient-to-l from-amber-500 to-amber-600 origin-bottom-right"
                                :style="rightFlapStyle"></div>

                            <!-- Box Label -->
                            <div class="absolute bottom-14 w-full text-center">
                                <div
                                    class="bg-white px-3 py-1.5 rounded-md inline-block text-sm font-bold shadow-sm border border-amber-200">
                                    IDEAS</div>
                            </div>

                            <!-- Decorative elements -->
                            <div class="absolute bottom-6 left-6 w-36 h-1 bg-amber-500 rounded"></div>
                            <div class="absolute bottom-9 left-10 w-28 h-1 bg-amber-500 rounded"></div>
                        </div>

                        <div v-if="submissionStatus"
                            class="absolute bottom-8 w-full text-center text-lg font-medium px-4 py-2 rounded-lg transition-all duration-500"
                            :class="submissionStatusClass">
                            {{ submissionStatus }}
                        </div>

                        <!-- Initial instruction text -->
                        <div v-if="!isAnimating && !animationComplete"
                            class="text-center text-gray-500 absolute bottom-10">
                            Submit your idea to see the animation
                        </div>
                    </div>
                </div>
            </div>

            <!-- Additional information section -->
            <div class="mt-16 text-center">
                <h3 class="text-2xl font-semibold text-emerald-800 mb-4">Why Share Your Ideas?</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div
                            class="bg-emerald-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-emerald-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h4 class="text-lg font-semibold text-gray-800 mb-2">Inspire Change</h4>
                        <p class="text-gray-600">Your ideas can transform communities and create lasting positive
                            impact.</p>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div
                            class="bg-emerald-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-emerald-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h4 class="text-lg font-semibold text-gray-800 mb-2">Community Driven</h4>
                        <p class="text-gray-600">We believe in solutions that come directly from the communities we
                            serve.</p>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div
                            class="bg-emerald-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-emerald-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 class="text-lg font-semibold text-gray-800 mb-2">Make It Happen</h4>
                        <p class="text-gray-600">We implement the most promising ideas with the help of our dedicated
                            volunteers.</p>
                    </div>
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
const submissionStatus = ref('');
const submissionStatusClass = computed(() =>
    submissionStatus.value.includes('Success')
        ? 'bg-green-100 text-green-700 border border-green-200'
        : 'bg-red-100 text-red-700 border border-red-200'
);

// Dynamic paper content state
const paperSubjectLine = ref(false);
const paperDescriptionLine1 = ref(false);
const paperDescriptionLine2 = ref(false);
const paperEmailLine = ref(false);
const paperSubjectWidth = ref('0%');
const paperDescLine1Width = ref('0%');
const paperDescLine2Width = ref('0%');
const paperEmailWidth = ref('0%');

// Element refs
const paper = ref(null);
const leftFlap = ref(null);
const rightFlap = ref(null);

// Paper positioned initially at top-right corner
const paperStyle = computed(() => ({
    top: isAnimating.value ? '50%' : '10%',
    left: isAnimating.value ? '50%' : '85%',
    transform: `translate(-50%, -50%) ${animationComplete.value ? 'scale(0.8) rotate(5deg)' : 'scale(1) rotate(-5deg)'}`,
    opacity: 1,
    transition: isAnimating.value ? 'none' : 'all 0.3s ease'
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

// Update paper content as user types
const updatePaperContent = (field) => {
    if (field === 'subject' && ideaSubject.value) {
        paperSubjectLine.value = true;
        paperSubjectWidth.value = Math.min(95, ideaSubject.value.length * 3) + '%';
    }

    if (field === 'description' && ideaDescription.value) {
        const words = ideaDescription.value.split(' ');

        if (words.length > 0) {
            paperDescriptionLine1.value = true;
            paperDescLine1Width.value = Math.min(95, words.length * 5) + '%';
        }

        if (words.length > 5) {
            paperDescriptionLine2.value = true;
            paperDescLine2Width.value = Math.min(95, (words.length - 5) * 5) + '%';
        }
    }

    if (field === 'email' && email.value) {
        paperEmailLine.value = true;
        paperEmailWidth.value = Math.min(95, email.value.length * 4) + '%';
    }
};

// Form submission and animation
const submitIdea = async () => {
    if (isAnimating.value) return;

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
                    // Reset animation state but keep paper visible
                    isAnimating.value = false;
                    animationComplete.value = false;

                    // Start a new animation to return paper to original position
                    gsap.to(paper.value, {
                        top: '10%',
                        left: '85%',
                        rotation: -5,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out"
                    });

                    // Reset form fields
                    ideaSubject.value = '';
                    ideaDescription.value = '';
                    email.value = '';

                    // Reset paper content
                    paperSubjectLine.value = false;
                    paperDescriptionLine1.value = false;
                    paperDescriptionLine2.value = false;
                    paperEmailLine.value = false;
                    paperSubjectWidth.value = '0%';
                    paperDescLine1Width.value = '0%';
                    paperDescLine2Width.value = '0%';
                    paperEmailWidth.value = '0%';

                    // Clear status message after delay
                    setTimeout(() => {
                        submissionStatus.value = '';
                    }, 500);
                }, 3000);
            }, 500);
        }
    });

    try {
        // Send email to kelvinkeshi@gmail.com
        await sendEmail({
            to: 'kelvinkeshi@gmail.com',
            subject: `New Idea: ${ideaSubject.value}`,
            body: `Idea: ${ideaSubject.value}\n\nDescription: ${ideaDescription.value}\n\nSubmitted by: ${email.value}`
        });

        // Paper animation sequence - paper flies from top-right to box
        tl.to(paper.value, {
            top: '30%',
            left: '60%',
            rotation: 10,
            duration: 0.5,
            ease: "power1.out"
        })
            .to(paper.value, {
                top: '40%',
                left: '50%',
                rotation: -10,
                duration: 0.5,
                ease: "power1.inOut"
            })
            .to(paper.value, {
                top: '55%',
                left: '50%',
                rotation: 5,
                scale: 0.8,
                duration: 0.7,
                ease: "power2.in"
            });

        // Add a slight bounce at the end of the paper's movement
        tl.to(paper.value, {
            y: '+=10',
            duration: 0.2,
            ease: "power1.in"
        })
            .to(paper.value, {
                y: '-=5',
                duration: 0.2,
                ease: "power1.out"
            });

    } catch (error) {
        submissionStatus.value = "Something went wrong. Please try again.";
        isAnimating.value = false;
        console.error("Error submitting idea:", error);
    }
};

// Function to actually send the email
const sendEmail = async (emailData) => {
    // In production, implement actual email sending functionality using your Nuxt server API
    try {
        await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(emailData)
        });
    } catch (error) {
        console.error("Email sending error:", error);
        throw new Error("Failed to send email");
    }
};
</script>

<style scoped>
.animation-container {
    perspective: 1000px;
}
</style>
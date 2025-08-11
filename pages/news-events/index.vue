<!-- pages/news-events/index.vue -->
<script setup>
import { fetchPosts } from '~/utils/sanity.js'

let posts = []
let error = null

try {
    posts = await fetchPosts()
    console.log('Posts loaded:', posts)
} catch (err) {
    error = err.message
    console.error('Failed to load posts:', err)
}

// Format date function
const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

// Truncate text function
const truncateText = (text, maxLength = 150) => {
    if (!text) return ''
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + '...'
}

// Convert Sanity block content to plain text
const blockToText = (blocks) => {
    if (!blocks) return ''
    if (typeof blocks === 'string') return blocks
    if (!Array.isArray(blocks)) return ''

    return blocks
        .filter(block => block._type === 'block')
        .map(block =>
            block.children
                ?.filter(child => child._type === 'span')
                ?.map(child => child.text)
                ?.join('') || ''
        )
        .join(' ')
}

// Set page meta
useHead({
    title: 'News & Events - Vera Verde',
    meta: [
        { name: 'description', content: 'Stay updated with Vera Verde\'s latest news, events, and sustainable initiatives.' }
    ]
})
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <!-- Header with Logo, Title and Navigation -->
        <header class="bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div class="flex items-center justify-between">
                    <!-- Logo -->
                    <NuxtLink to="/" class="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
                        <img src="/img/veaverde-logo.png" alt="Vera Verde Logo" class="h-16 sm:h-20 w-auto">
                    </NuxtLink>

                    <!-- Center Title -->
                    <div class="flex-grow text-center px-4">
                        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                            News &
                            <span class="text-[#99cc33]">Events</span>
                        </h1>
                    </div>

                    <!-- Navigation -->
                    <nav class="flex items-center flex-shrink-0">
                        <NuxtLink to="/"
                            class="text-gray-700 hover:text-[#99cc33] font-medium text-base sm:text-lg transition-colors cursor-pointer">
                            Home
                        </NuxtLink>
                    </nav>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="py-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- Error State -->
                <div v-if="error" class="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-12 shadow-sm">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-lg font-semibold text-red-800">Error loading posts</h3>
                            <p class="text-red-700 mt-1">{{ error }}</p>
                        </div>
                    </div>
                </div>

                <!-- Posts Grid -->
                <div v-if="!error && posts && posts.length > 0"
                    class="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <article v-for="post in posts" :key="post._id"
                        class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 cursor-pointer transform hover:-translate-y-2"
                        @click="$router.push(`/news-events/${post.slug?.current || post.slug}`)">
                        <!-- Image -->
                        <div class="relative overflow-hidden">
                            <div v-if="post.imageUrl" class="aspect-[16/10] bg-gray-200">
                                <img :src="post.imageUrl" :alt="post.imageAlt || post.title"
                                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                            </div>
                            <div v-else
                                class="aspect-[16/10] bg-gradient-to-br from-[#99cc33] to-[#E6A619] flex items-center justify-center p-6">
                                <h3 class="text-white text-lg font-bold text-center leading-tight">{{ post.title }}</h3>
                            </div>

                            <!-- Overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="p-8">
                            <!-- Date Badge -->
                            <div v-if="post.publishedAt"
                                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#99cc33]/10 text-[#99cc33] mb-4">
                                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                    </path>
                                </svg>
                                {{ formatDate(post.publishedAt) }}
                            </div>

                            <!-- Title -->
                            <h2
                                class="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#99cc33] transition-colors leading-tight">
                                {{ post.title }}
                            </h2>

                            <!-- Excerpt -->
                            <p v-if="post.excerpt" class="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                                {{ truncateText(post.excerpt, 120) }}
                            </p>
                            <p v-else-if="post.body" class="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                                {{ truncateText(blockToText(post.body), 120) }}
                            </p>

                            <!-- Author -->
                            <div v-if="post.author" class="text-sm text-gray-500 mb-6 flex items-center">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                                By {{ post.author }}
                            </div>

                            <!-- Read More Button -->
                            <div class="flex items-center justify-between">
                                <button @click="$router.push(`/news-events/${post.slug?.current || post.slug}`)"
                                    class="inline-flex items-center text-[#99cc33] hover:text-[#E6A619] font-semibold group cursor-pointer transition-colors">
                                    Read full article
                                    <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </article>
                </div>

                <!-- Empty State -->
                <div v-else-if="!error && (!posts || posts.length === 0)" class="text-center py-20">
                    <div class="max-w-md mx-auto">
                        <div
                            class="inline-flex items-center justify-center w-16 h-16 bg-[#99cc33]/10 rounded-full mb-6">
                            <svg class="w-8 h-8 text-[#99cc33]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">No posts yet</h3>
                        <p class="text-gray-600 leading-relaxed">
                            We're working on bringing you the latest news and updates. Check back soon for exciting
                            content about our sustainable initiatives!
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
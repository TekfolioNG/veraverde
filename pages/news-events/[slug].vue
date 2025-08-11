<!-- pages/news-events/[slug].vue -->
<script setup>
import { fetchPost } from '~/utils/sanity.js'

const route = useRoute()
const slug = route.params.slug

let post = null
let error = null

try {
    post = await fetchPost(slug)
    console.log('Found post:', post)
} catch (err) {
    error = err.message
    console.error('Error loading post:', err)
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

// Convert Sanity blocks to readable paragraphs
const renderBlocks = (blocks) => {
    if (!Array.isArray(blocks)) return []
    return blocks.filter(block => block._type === 'block')
}

// Set page title
useHead({
    title: post?.title || 'Post Not Found'
})
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <!-- Header with Logo and Navigation -->
        <header class="bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div class="flex items-center justify-between">
                    <!-- Logo -->
                    <NuxtLink to="/" class="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
                        <img src="/img/veaverde-logo.png" alt="Vera Verde Logo" class="h-16 sm:h-20 w-auto">
                    </NuxtLink>

                    <!-- Navigation -->
                    <nav class="flex items-center space-x-4 sm:space-x-6 flex-shrink-0">
                        <NuxtLink to="/"
                            class="text-gray-700 hover:text-[#99cc33] font-medium text-base sm:text-lg transition-colors cursor-pointer">
                            Home
                        </NuxtLink>
                        <NuxtLink to="/news-events"
                            class="text-gray-700 hover:text-[#99cc33] font-medium text-base sm:text-lg transition-colors cursor-pointer">
                            Back to News & Events
                        </NuxtLink>
                    </nav>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="py-8">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Error State -->
                <div v-if="error" class="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 shadow-sm">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-lg font-semibold text-red-800">Error loading post</h3>
                            <p class="text-red-700 mt-1">{{ error }}</p>
                        </div>
                    </div>
                </div>

                <!-- Post Content -->
                <article v-else-if="post" class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <!-- Featured Image -->
                    <div v-if="post.imageUrl" class="aspect-video bg-gray-200 overflow-hidden">
                        <img :src="post.imageUrl" :alt="post.imageAlt || post.title" class="w-full h-full object-cover">
                    </div>

                    <!-- Content -->
                    <div class="p-6 sm:p-8 lg:p-12">
                        <!-- Meta Info -->
                        <div
                            class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 text-sm text-gray-500 space-y-2 sm:space-y-0">
                            <div v-if="post.publishedAt" class="flex items-center">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                    </path>
                                </svg>
                                Published on {{ formatDate(post.publishedAt) }}
                            </div>
                            <div v-if="post.author" class="flex items-center">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                                By {{ post.author }}
                            </div>
                        </div>

                        <!-- Title -->
                        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            {{ post.title }}
                        </h1>

                        <!-- Excerpt -->
                        <div v-if="post.excerpt" class="text-xl text-gray-600 mb-8 font-medium leading-relaxed">
                            {{ post.excerpt }}
                        </div>

                        <!-- Body Content -->
                        <div class="prose prose-lg max-w-none">
                            <div v-if="Array.isArray(post.body)" class="space-y-6">
                                <p v-for="block in renderBlocks(post.body)" :key="block._key"
                                    class="text-gray-700 leading-relaxed text-lg">
                                    <span v-for="child in block.children" :key="child._key" :class="{
                                        'font-bold': child.marks?.includes('strong'),
                                        'italic': child.marks?.includes('em'),
                                        'underline': child.marks?.includes('underline')
                                    }">
                                        {{ child.text }}
                                    </span>
                                </p>
                            </div>

                            <!-- Fallback for other content types -->
                            <div v-else-if="typeof post.body === 'string'"
                                class="text-gray-700 leading-relaxed text-lg">
                                {{ post.body }}
                            </div>
                        </div>

                        <!-- Share Section -->
                        <div class="mt-12 pt-8 border-t border-gray-200">
                            <h3 class="text-lg font-semibold text-gray-900 mb-6">Share this article</h3>
                            <div class="flex space-x-4">
                                <!-- Twitter -->
                                <a :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent('https://veraverde.org' + $route.fullPath)}`"
                                    target="_blank" class="text-[#1DA1F2] hover:text-[#1a91da] transition-colors">
                                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>

                                <!-- LinkedIn -->
                                <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://veraverde.org' + $route.fullPath)}`"
                                    target="_blank" class="text-[#0077B5] hover:text-[#005885] transition-colors">
                                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>

                                <!-- Facebook -->
                                <a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://veraverde.org' + $route.fullPath)}`"
                                    target="_blank" class="text-[#1877F2] hover:text-[#166fe5] transition-colors">
                                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>

                                <!-- Instagram -->
                                <a href="https://www.instagram.com/veraverde/" target="_blank"
                                    class="text-[#E4405F] hover:text-[#d73652] transition-colors">
                                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Post Not Found -->
                <div v-else class="text-center py-20">
                    <div class="max-w-md mx-auto">
                        <div
                            class="inline-flex items-center justify-center w-16 h-16 bg-[#99cc33]/10 rounded-full mb-6">
                            <svg class="w-8 h-8 text-[#99cc33]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.262-5.414-2.96C8.893 10.414 10.64 9 12 9s3.107 1.414 5.414 3.04A7.962 7.962 0 0112 15z" />
                            </svg>
                        </div>
                        <h1 class="text-2xl font-bold text-gray-900 mb-3">Post not found</h1>
                        <p class="text-gray-600 mb-8 leading-relaxed">
                            The post you're looking for doesn't exist or has been moved.
                        </p>
                        <NuxtLink to="/news-events"
                            class="inline-flex items-center px-6 py-3 bg-[#99cc33] hover:bg-[#8bb829] text-white font-medium rounded-lg transition-colors">
                            <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7">
                                </path>
                            </svg>
                            Back to News & Events
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.prose p {
    margin-bottom: 1.5rem;
}
</style>
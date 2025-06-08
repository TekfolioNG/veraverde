// Replace the existing submitForm function with this updated version

// Optional: Add form validation function
const validateForm = () => {
const errors = []

if (!formData.name.trim() || formData.name.length < 2) { errors.push('Name must be at least 2 characters long') } if
  (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { errors.push('Please enter a valid
  email address') } if (!formData.subject.trim() || formData.subject.length < 3) { errors.push('Subject must be at least
  3 characters long') } if (!formData.message.trim() || formData.message.length < 10) { errors.push('Message must be at
  least 10 characters long') } return errors } // Submit form function using Nuxt's $fetch const submitForm=async
  (event)=> {
  const form = event.target

  // Optional: Client-side validation
  const validationErrors = validateForm()
  if (validationErrors.length > 0) {
  formStatus.value = {
  loading: false,
  success: false,
  error: true,
  message: validationErrors.join('. ')
  }
  setTimeout(() => {
  formStatus.value.message = ''
  formStatus.value.error = false
  }, 8000)
  return
  }

  const data = new FormData(form)

  // Reset status
  formStatus.value = {
  loading: true,
  success: false,
  error: false,
  message: 'Sending your message...'
  }

  try {
  // Use Nuxt's $fetch instead of native fetch
  const result = await $fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  body: data,
  // $fetch automatically handles JSON parsing
  headers: {
  'Accept': 'application/json'
  },
  // Add timeout and retry options
  timeout: 30000, // 30 seconds timeout
  retry: 2, // Retry up to 2 times on failure
  retryDelay: 1000 // Wait 1 second between retries
  })

  // Check if the submission was successful
  if (result.success) {
  formStatus.value = {
  loading: false,
  success: true,
  error: false,
  message: 'Message sent successfully! We will contact you soon.'
  }
  resetForm()

  // Auto-hide success message after 5 seconds
  setTimeout(() => {
  formStatus.value.message = ''
  formStatus.value.success = false
  }, 5000)
  } else {
  throw new Error(result.message || 'Failed to send message')
  }
  } catch (error) {
  console.error('Form submission error:', error)

  // Better error handling with more specific messages
  let errorMessage = 'An unexpected error occurred. Please try again.'

  if (error.name === 'TimeoutError') {
  errorMessage = 'Request timed out. Please check your internet connection and try again.'
  } else if (error.statusCode >= 400 && error.statusCode < 500) {
    errorMessage='Invalid request. Please check your information and try again.' } else if (error.statusCode>= 500) {
    errorMessage = 'Server error occurred. Please try again later.'
    } else if (error.message.includes('network') || error.message.includes('fetch')) {
    errorMessage = 'Network error. Please check your internet connection and try again.'
    } else if (error.data?.message) {
    errorMessage = error.data.message
    } else if (error.message) {
    errorMessage = error.message
    }

    formStatus.value = {
    loading: false,
    success: false,
    error: true,
    message: errorMessage
    }

    // Auto-hide error message after 8 seconds
    setTimeout(() => {
    formStatus.value.message = ''
    formStatus.value.error = false
    }, 8000)
    }
    }
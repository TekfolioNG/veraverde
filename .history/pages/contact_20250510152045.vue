const submitForm = async (event) => {
const form = event.target
const formData = new FormData(form)

// Reset status
formStatus.value = {
loading: true,
success: false,
error: false,
message: 'Sending your message...'
}

try {
const response = await fetch('https://api.web3forms.com/submit', {
method: 'POST',
body: formData
})

const data = await response.json()

// Log the response for debugging
console.log('API Response:', data)

if (data.success) {
// Set success status
formStatus.value = {
loading: false,
success: true,
error: false,
message: 'Message sent successfully! We will contact you soon.'
}
// Reset the form
form.reset()
} else {
formStatus.value = {
loading: false,
success: false,
error: true,
message: data.message || 'Error sending message. Please try again.'
}
}
} catch (error) {
console.error('Error:', error)
formStatus.value = {
loading: false,
success: false,
error: true,
message: 'Network error occurred. Please check your connection and try again.'
}
}
}
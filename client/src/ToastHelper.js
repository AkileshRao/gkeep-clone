const toastHelper = (message, type) => ({
    duration: 3000,
    message: message,
    position: "is-bottom",
    type: `is-${type}`
})

export default toastHelper
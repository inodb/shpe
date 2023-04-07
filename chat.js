
const SIZE = 50 // size of the chat button in pixels
const BTN_RAD = SIZE / 2 // radius of the chat button in pixels
const BG_CHAT = 'purple' // background color of the chat button
const chatButtonLogo = `
<svg width="60" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="#FFFFFF"></path>
      <circle cx="10" cy="12" r="1.3" fill="#FFFFFF"></circle>
      <circle cx="16" cy="12" r="1.3" fill="#FFFFFF"></circle>
    </svg>
`

const chatButtonClose = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FFFFFF" width="24" height="24">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
`
// create the chat button element
const chatButton = document.createElement('div')
// apply styles to the chat button
chatButton.setAttribute('id', 'chat-bubble-button')
chatButton.style.position = 'fixed'
chatButton.style.bottom = '20px'
chatButton.style.right = '20px'
chatButton.style.width = SIZE + 'px'
chatButton.style.height = SIZE + 'px'
chatButton.style.borderRadius = BTN_RAD + 'px'
chatButton.style.backgroundColor = BG_CHAT
chatButton.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
chatButton.style.cursor = 'pointer'
chatButton.style.zIndex = 999999999
chatButton.style.transition = 'all .2s ease-in-out'

chatButton.addEventListener('mouseenter', (event) => {
  chatButton.style.transform = 'scale(1.05)'
})
chatButton.addEventListener('mouseleave', (event) => {
  chatButton.style.transform = 'scale(1)'
})

// create the chat button icon element
const chatButtonIcon = document.createElement('div')

// apply styles to the chat button icon
chatButtonIcon.style.display = 'flex'
chatButtonIcon.style.alignItems = 'center'
chatButtonIcon.style.justifyContent = 'center'
chatButtonIcon.style.width = '100%'
chatButtonIcon.style.height = '100%'
chatButtonIcon.style.zIndex = 999999999

// add the chat button icon to the chat button element
chatButtonIcon.innerHTML = chatButtonLogo

chatButton.appendChild(chatButtonIcon)

// add the chat button to the page

// toggle the chat component when the chat button is clicked
chatButton.addEventListener('click', () => {
  // toggle the chat component
  if (chat.style.display === 'none') {
    chat.style.display = 'flex'
    chatButtonIcon.innerHTML = chatButtonClose
  } else {
    chat.style.display = 'none'
    chatButtonIcon.innerHTML = chatButtonLogo
  }
})

const chat = document.createElement('div')
chat.setAttribute('id', 'chat-bubble-window')

chat.style.position = 'fixed'
chat.style.flexDirection = 'column'
chat.style.justifyContent = 'space-between'
chat.style.bottom = '80px'
chat.style.right = '20px'
chat.style.width = '85vw'
chat.style.height = '70vh'
chat.style.boxShadow =
  'rgba(150, 150, 150, 0.15) 0px 6px 24px 0px, rgba(150, 150, 150, 0.15) 0px 0px 0px 1px'
chat.style.display = 'none'
chat.style.borderRadius = '10px'
chat.style.zIndex = 999999999
chat.style.overflow = 'hidden'
const scriptTag = document.currentScript
console.log(scriptTag);
function init() {

    chat.innerHTML = `<iframe
    src="https://www.chatshape.com/chatbot-i/${scriptTag.id}"
    width="100%"
    height="100%"
    frameborder="0"
    ></iframe>`

    document.body.appendChild(chat)
    const getColor = async () => {

        chatButton.style.backgroundColor = "#793eee"
        document.body.appendChild(chatButton)
      }
      
    getColor()
}
if (document.readyState === 'complete') {
    init();
} else {
    window.addEventListener('load', init);
}

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 550px)')

function handleSizeChange(e) {
  // Check if the media query is true
  if (e.matches) {
    chat.style.height = '600px'
    chat.style.width = '450px'
  }
}

// Register event listener
mediaQuery.addEventListener('change', handleSizeChange)

// Initial check
handleSizeChange(mediaQuery)


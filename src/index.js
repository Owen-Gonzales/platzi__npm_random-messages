const messages = [
  "Oscar",
  "Ana",
  "Matias",
  "Federico",
  "Marcos",
  "Owen",
  "Isabel",
  "De arco",
  "Manuel",
  "Sean"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = {randomMsg}
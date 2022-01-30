const quotes = [
    {
        id: 1,
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        name: "Nelson Mandela"
    }, 
    {
        id: 2,
        text: "The way to get started is to quit talking and begin doing.",
        name: "Walt Disney"
    }, 
    {
        id:3, 
        text: "Life is what happens when you're busy making other plans.",
        name:"John Lennon" 
    },
    {
        id: 4,
        text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        name: "Mother Teresa"
    }
]

const genBtn = document.querySelector('#genBtn')
const text = document.getElementById('text')
const name = document.getElementById('name')
maxNum = quotes.length
window.addEventListener('DOMContentLoaded', function() {
    ChangeItem(GiveRandomNum(maxNum))
})


genBtn.addEventListener('click', function() {
    ChangeItem(GiveRandomNum(maxNum))
})

function ChangeItem(quote) {
    const item = quotes[quote]
    text.textContent = item.text
    name.textContent = item.name
}

function GiveRandomNum(max) {
    return Math.floor(Math.random() * quotes.length)
}


import React from 'react'

const displayMinutes = (minutes) => {
    let emojis
    if (minutes >= 30) {
        const bentoNum = Math.ceil(minutes/10)
        emojis = "🍱".repeat(bentoNum)
    } else {
        const coffeeNum = Math.ceil(minutes/5)
        emojis = "☕️".repeat(coffeeNum)
    }
    return `${emojis} ${minutes} min read`
}



const Article = ({title="Title missing", date = "January 1, 1970", preview, minutes}) => (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <p>{displayMinutes(minutes)}</p>
    </article>
)

export default Article
import {
    deleteEntry
} from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")

//takes in the journal entry and corresponding mood obj and returns the HTML rep 
export const JournalEntryHTML = (entry, mood) => {
    return `
        <section id="entry--${entry.id}" class="journal__entry">
        <button class="delete--${entry.id}">X</button
        <p class ="entry__date"><b>${entry.date}</b></p>
        <p class ="entry__concept">Concepts: ${entry.concept}</p>
        <p class="entry__para">${entry.entry}</p>
        <p class="entry__mood">Mood: ${mood.label}</p>
        </section>
    `
}

//listens for when the user clicks on the delete button 
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.className.startsWith("delete--")) {
        //takes the class of the journal entry delete button and splits it to get the specific journal id
        const entryId = clickEvent.target.className.split("--")[1]
        deleteEntry(entryId)
    }
})
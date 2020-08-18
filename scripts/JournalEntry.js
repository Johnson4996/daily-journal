/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

import { deleteEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")


export const JournalEntryHTML = (entry,mood) => {
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

eventHub.addEventListener("click", clickEvent =>{
if(clickEvent.target.className.startsWith("delete--")){
    const entryId = clickEvent.target.className.split("--")[1]
    deleteEntry(entryId)
}
})

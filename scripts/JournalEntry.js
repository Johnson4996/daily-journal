/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryHTML = (entry,mood) => {
    return `
        <section id="entry--${entry.id}" class="journal__entry">
        <p class ="entry__date"><b>${entry.date}</b></p>
        <p class ="entry__concept">Concepts: ${entry.concept}</p>
        <p class="entry__para">${entry.entry}</p>
        <p class="entry__mood">Mood: ${mood.label}</p>
        </section>
    `
}
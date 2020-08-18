import { saveJournalEntry } from "./JournalDataProvider.js"
import { getMoods, useMoods } from "./MoodDataProvider.js";

const contentTarget = document.querySelector(".content__left")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("click", eventClick => {
    //make sure user clicked on add button
if(eventClick.target.id === "add__button"){
    //store refrences to each input field 
    const journalDate = document.querySelector("#date")
    const journalConcepts = document.querySelector("#concepts")
    const journalEntry = document.querySelector("#journal_entry_text")
    const journalMood = document.querySelector("#mood_list")

    //create new journal object using input values
    const newEntry = {
        date: journalDate.value,
        concept:journalConcepts.value,
        entry: journalEntry.value,
        moodId: parseInt(journalMood.value.split("--")[1])
    }

    saveJournalEntry(newEntry)
}
})





export const JournalForm = () =>{
render()
}

const render = () =>{
    getMoods()
    .then(()=>{
       const allMoods = useMoods()
        contentTarget.innerHTML = `
    <form >
    <fieldset>
        <label for="date">Current Date</label>
        <input type="date" name="date" id="date">
        <label for="concepts">Concepts Covered</label>
        <input type="text" name="concepts" id="concepts">
        <label for="concepts">Journal Entry</label>
        <textarea name="journal_entry_text" id="journal_entry_text" cols="50" rows="10"></textarea>
        <select name="mood" id="mood_list">
        <option value= "0"> Mood...</option>
           ${
            allMoods.map((mood) =>{
                return `<option value ="mood--${mood.id}">${mood.label}</option>`
            }).join("")

           }
        </select>
        <input id="add__button" type="submit" value="Add Journal Entry">
    </fieldset>
</form>
`
    })
    
}
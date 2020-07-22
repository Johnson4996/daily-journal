/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */


 const journalList =[
     {
         id: 1,
        date:"07/10/20",
        concept:"HTML, CSS, Git & GitHub",
        entry:"Completed most of brochure group project.",
        mood:"Happy"
     },
     {
         id: 2,
        date:"07/13/20",
        concept:"HTML, CSS, Git & GitHub, Wireframing",
        entry:"Did final merge of group projects and presented. Also started on wireframes for this daily journal project.",
        mood:"Other"
     },
     {
         id: 3,
        date:"07/14/20",
        concept:"Javascript",
        entry:"Learned about automation with javascript. Was very confusing, but I am getting the hang of it slowly.",
        mood:"Stressed"
     },
     {
         id: 4,
        date:"07/14/20",
        concept:"Javascript",
        entry:"Learned about automation with javascript. Was very confusing, but I am getting the hang of it slowly.",
        mood:"Stressed"
     },
 ]

 export const useJournalEntries = () => {
    const sortedByDate = journalList.sort(
        (currentEntry, nextEntry) =>
        Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
 }
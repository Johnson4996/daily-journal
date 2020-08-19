let moods = []

export const useMoods = () => {

return moods.slice()

}
//gets all mood objs from the API and stores them in the moods variable
export const getMoods = () =>{
    return fetch("http://localhost:8088/moods")
    .then(res => res.json())
    .then(res =>{
        moods = res
    })
}
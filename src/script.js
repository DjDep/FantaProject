//Non va la ricerca
/*
import  db  from '@/src/main.js';

const searcInput = document.querySelector(["data-search"])

let footballers = []

searcInput.addEventListener("input", e => {
 const value = e.target.value.toLowerCase()
 users.forEach(footballers => {
     const isVisible = 
     footballers.CognomeNome.toLowerCase().includes(value)
     footballers.element.classList.toggle("hide", !isVisible)

 })

});
var searchfootballers = searcInput.searcInput(); 
export default searchfootballers;



export default {
    data() {
        return {
            footballers: []
        }
    },
    created() {
        db.collection('footballers').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
              const data = {
                key: doc.id,
                    
                    'CognomeNome': doc.data().CognomeNome,
                    
              }   
                })
         });
    },
}
*/

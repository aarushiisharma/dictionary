
const search=document.getElementById('search')
const word=document.getElementById('word')
const input=document.getElementById('type')
const phonetics=document.getElementById('phonetics')
const definition=document.getElementById('definition')
const example=document.getElementById('example')

search.onclick=async function(){

    const URL=`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`;

    try {
        const response=await fetch(URL)
        const data=await response.json();
        console.log(data);
        
        word.innerHTML=input.value
        phonetics.innerHTML=`${data[0].phonetic}`
        definition.innerHTML=`${data[0].meanings[0].definitions[0].definition}`
        example.innerHTML=`Eg - ${data[0].meanings[0].definitions[0].example}`


        input.value=""
    }  

    catch (error) {
        console.log("error found",error);
    }    
}

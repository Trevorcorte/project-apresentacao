/*
    Determinando variáveis 
*/

const knowledge = document.querySelectorAll('.knowledge');
const textDescription = document.querySelector('.textDescrip');
const text = [
                '<p>HTML</p> <br>',
                '<p>CSS</p>  <br>',
                '<p>JavaScript</p> <br>',
                '<p>ReactJS</p> <br>',
                '<p>Git</p> <br>',
                '<p>GitHub</p> <br>'
]

const dataEarly = [
                    (new Date(2021, 10, 1)).getTime(), 
                    (new Date(2021, 10, 1)).getTime(), 
                    (new Date(2022, 0, 1)).getTime(), 
                    (new Date(2022, 3, 1)).getTime(), 
                    (new Date(2022, 3, 1)).getTime(), 
                    (new Date(2021, 11, 1)).getTime(), 
                    ]

const dataToday = (new Date()).getTime();


/*
    Eventos
*/

knowledge.forEach(  (element, form) => {
    let form1 = form;
    let elemento1 = element;
    element.addEventListener('mouseover', (event) => {
        let time = 'month';
        let timingKnowlegde = Math.round((dataToday-dataEarly[form1])/(1000*60*60*24*30));
        if (timingKnowlegde > 1) time = 'months'
        textDescription.innerHTML = `<p>${text[form1]} </p>` ;
    } )
    element.addEventListener('mouseout', (event, element,) => {
        textDescription.innerHTML = '*Passe o mouse*';
    } )
} );




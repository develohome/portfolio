window.addEventListener('scroll', function(){
    // if(window.scrollY > 5){

    // }
    // document.querySelector('.scroll').innerHTML = `-1${window.scrollY}px`
    document.querySelector('.nome h1').style.marginLeft= `-${window.scrollY}px`
})



function escrever(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 175 * i)
    });
}
const titulo = document.querySelector('.nome p');

function apagar(){
    let campo = document.querySelector('.nome p');
    let texto = campo.textContent.split('')
    
    for(let x = 0;x<campo.textContent.length;x++){
            texto.pop()
            var aux = '';
            for(let i = 0;i<texto.length;i++){
                aux += texto[i] 
            }
            setTimeout(() => {
                campo.innerHTML += aux;
            }, 175 * i)
    }

    // texto.forEach((letra, i) =>{
    //     texto.pop()
    //     campo.innerHTML += texto[x]
    //     x--;
    // })
    
}
setTimeout(escrever(titulo), 2000);
setTimeout(apagar, 4000);

var skill = [
    {
        nome: 'HTML',
        percent: 90,
        cor: "#DD4B25"
    },
    {
        nome: 'CSS',
        percent: 90,
        cor:'#254BDD'
    },
    {
        nome: 'JAVASCRIPT',
        percent:80,
        cor:'#F7DF1E'
    },
    {
        nome: 'BOOTSTRAP',
        percent: 60,
        cor:'#533B78'
    },
    {
        nome: 'REACT',
        percent: 50,
        cor:'#5ED3F3'
    }
    ,
    {
        nome: 'ANGULAR',
        percent: 20,
        cor:'#BD002E'
    },
    {
        nome: 'PHP',
        percent: 70,
        cor:'#7075D6'
    },
    {
        nome: 'NODEJS',
        percent: 50,
        cor:'#7EC729'
    },
    {
        nome: 'DB',
        percent: 70,
        cor:'#000'
    }
]
var eventoSkill = document.querySelectorAll('.skills .card')
for(let i = 0;i<eventoSkill.length;i++){
    eventoSkill[i].addEventListener('mouseover', ()=>{
        document.querySelector('.number h2').innerHTML = skill[i].percent + "<span>%</spn>"
        document.querySelector('.number h2').style.color = skill[i].cor
        document.getElementById('valor').style.strokeDashoffset = 440 - (440 * skill[i].percent) / 100;
        document.querySelector('.text').innerHTML = skill[i].nome
        document.querySelector('.text').style.color = skill[i].cor 
    })
    eventoSkill[i].addEventListener('mouseout', ()=>{
        document.querySelector('.number h2').innerHTML = 0 + "<span>%</span>"
        document.getElementById('valor').style.strokeDashoffset = 440 - (440 * 0) / 100;
        document.getElementById('valor').style.stroke = skill[i].cor
        document.querySelector('.text').innerHTML = ''
        document.querySelector('.number h2').style.color = "#FFF"
    })
}
var pos = 0
document.querySelector('.fa-angle-left').addEventListener('click', ()=>{
    if(pos==1){
        document.querySelector('.skillWidth').style.marginLeft = '-220px';
        pos--
    }else{
        document.querySelector('.skillWidth').style.marginLeft = '0px';
    }
    
    
})
document.querySelector('.fa-angle-right').addEventListener('click', ()=>{
    if(pos == 0){
        document.querySelector('.skillWidth').style.marginLeft = '-880px'
        pos++
    }else{
        document.querySelector('.skillWidth').style.marginLeft = '-1100px'
    }
    
    
})


const agendas = [
    { id: 1, categoria:'Agendas', img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Agenda 1", color:"Rosa" },
    { id: 2, categoria:'Agendas', img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Agenda 2", color:"Violeta"},
    { id: 3, categoria:'Encuadernacion', img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Cuaderno 1", color:"Celeste"},
    { id: 4, categoria:'Identidad de Marca', img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Identidad 1", color:"Ambar"},
    { id: 5, categoria:'Identidad de Marca', img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Identidad 2", color:"Rosa" },
    { id: 6, categoria:'Carteleria', img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Cartel 1", color:"Violeta"},
    { id: 7, categoria:'Carteleria', img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Cartel 2", color:"Celeste"},
    { id: 8, categoria:'Tarjeteria', img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Tarjeta 1", color:"Ambar"},
];

export const getFetch = new Promise((resolve)=>{
    
    setTimeout(()=>{
        resolve(agendas)
    }, 3000)
})


const agenda = { id: 1,img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Agenda 1", color:"Rosa"}

export const unArti = new Promise ((resolve)=>{

    setTimeout(()=>{
        resolve(agenda)
    },2000)
})
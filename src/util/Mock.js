const agendas = [
    { id: 1,img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Agenda 1" },
    { id: 2,img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Agenda 2"},
    { id: 3,img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "Agenda 3"},
];

export const getFetch = new Promise((resolve)=>{
    
    setTimeout(()=>{
        resolve(agendas)
    }, 3000)
})


const agenda = [
    { id: 1,img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/466/517/products/img_07741-df789143881231cf5b16019056704688-1024-1024.jpg', name: "ag1"},
    { id: 2,img:'https://www.quade.com.ar/1503687-large_default/agenda-2021-a5-semana-a-la-vista-tute-vengo-por-las-dudas.jpg', name: "ag2"},
    { id: 3,img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/131/621/products/agendaplantas1-9eed60fd8273023fb615765351565772-1024-1024.jpg', name: "ag3"},
];

export const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(agenda)
    }, 3000)
})


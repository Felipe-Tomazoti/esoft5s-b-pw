let visitorCount = localStorage.getItem("visitorCount");

if(!visitorCount){
    visitorCount = {
        count: 1,
        lastVisition: new Date()
    }
    localStorage.setItem("visitorCount", JSON.stringify(visitorCount));
} else{
    visitorCount = JSON.parse(visitorCount);
    visitorCount = {
        count: visitorCount.count+1,
        lastVisition: new Date()
    }
    localStorage.setItem("visitorCount", JSON.stringify(visitorCount));
}

const footer = document.querySelector("footer");
const p = document.createElement("p");

let options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
};

const dateFormat = new Intl.DateTimeFormat("pt-BR", options);
let dateFormated = dateFormat.format(visitorCount.lastVisition);

p.textContent = `Esta página foi visitada ${visitorCount.count} vezes. 
A última visita foi: ${dateFormated}`

footer.appendChild(p);




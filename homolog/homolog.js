class Element{

    constructor(name, atomicNumber, id){

        this.name = name
        this.atomicNumber = atomicNumber
        this.id = id

    }

    redirect(){

        window.location.href = this.name+".html"

    }

}

const elements = [
    {
        "name": 'Hidrogenio',
        'atomicNumber' : '1',
        'id' : 'h',
        'url' : 'hidrogenio.html'
    },
    {
        "name": 'Helio',
        'atomicNumber':'2',
        'id' : 'he'
    }

]

const elementos = []

elements.forEach(element => {

    let name = element.name,
        atomicNumber = element.atomicNumber,
        id = element.id,
        url = element.url

    var elemento = new Element(name, atomicNumber, id, url)

    elementos.push(elemento)
    
    console.log(elemento)

});

console.log(elementos)

import {data} from "../../../data.js"

export function load({params}){
    const person = data.crew.find((tech) => tech.name == params.name)
    return {
        person
    }
}


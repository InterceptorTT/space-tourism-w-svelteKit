import {data} from "../../../data.js"

export function load({params}){
    const tech = data.technology.find((tech) => tech.name === params.tech)
    return {
        tech
    }
}
import { data } from "../../../data.js"

export function load({ params }) {
    const destination = data.destinations.find((destination) => destination.name === params.destination)
    return {
        destination,
    }
}
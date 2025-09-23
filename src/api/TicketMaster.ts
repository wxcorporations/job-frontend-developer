
const { TICKET_MASTER_KEY } = process.env

export default class TicketMaterAPI {
    private endpoint = 'https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2'

    constructor() {}

    async events(size:number = 1): Promise<any> {
        try {
            const recurso = `/events.json?size=${size}&apikey=${TICKET_MASTER_KEY}`
            const result = await fetch(`${this.endpoint}${recurso}`)
            const data = await result.json()

            console.log('===> ', data)
        } catch (error) {
            console.log(error)
        }
    }
}
export default class OfferService {
    static myInstance = null;
    Url = "https://webdev-neu-backend.herokuapp.com/";
    static getInstance() {
        if(OfferService.myInstance == null) {
            OfferService.myInstance = new OfferService()
        }
        return this.myInstance
    }

    findAllOffers =  () =>
        fetch(this.Url+"offer")
            .then(response => response.json())
            
    deleteOffer = (id)=>
        fetch(this.Url + "offer/"+id,{
            method: 'DELETE'
            })
    
    createNewOffer = (newOffer) =>
        fetch(this.Url + "offer", {
            body: JSON.stringify(newOffer),
            headers: {
            'Content-Type': 'application/json' },
            method: 'POST'
            }).then(response =>response.json());
    
    findAllBySellerUsername(username) {
        return fetch(this.Url + "offer/" + username, {
            method: 'GET'
        }).then(response => { return response.json() })
    }

    
}
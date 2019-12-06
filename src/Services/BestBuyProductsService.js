export default class BestBuyProductsService {
    static myInstance = null;
    // Url = "https://webdev-neu-backend.herokuapp.com/";
    Url = "http://localhost:8080/";
    static getInstance() {
        if(BestBuyProductsService.myInstance == null) {
            BestBuyProductsService.myInstance = new BestBuyProductsService()
        }
        return this.myInstance
    }

    findAllProductsByTitle = (title) => {
        return fetch(this.Url + "api/best-buy/products/" + title)
            .then(response => { 
                return response.json();
            })    
        } 
        
    findProductBySKU = (sku) => {
        return fetch(this.Url + "api/best-buy/products/sku/" + sku)
            .then(response => { 
                return response.json();
            })    
        } 
}
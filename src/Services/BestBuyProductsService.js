export default class BestBuyProductsService {
    static myInstance = null;
    Url = "https://webdev-team11-project-backend.herokuapp.com/";
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
export default class ItemSevices {
    items = [
        
    ]
    static getInstance() {
        if(ItemSevices.myInstance == null) {
            ItemSevices.myInstance = new ItemSevices()
        }
        return this.myInstance
    }
    API_URL = "";

    itemSearch = (itemName) =>{
        fetch(this.API_URL+itemName).then(response => response.json());
    }

    detailsSearch = (itemId) =>{
        fetch(this.API_URL+itemId).then(response => response.json());
    }
  

   
}
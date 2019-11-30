export default class ItemService {
    static myInstance = null;
    Url = "https://webdev-neu-backend.herokuapp.com/";
    static getInstance() {
        if(ItemService.myInstance == null) {
            ItemService.myInstance = new ItemService()
        }
        return this.myInstance
    }

    findAllItems =  () =>
        fetch(this.Url+"item")
            .then(response => response.json())
            
    deleteItem = (id)=>
        fetch(this.Url + "item/"+id,{
            method: 'DELETE'
            })
    

    
}
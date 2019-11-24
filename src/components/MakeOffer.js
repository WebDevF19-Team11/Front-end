import React from 'react'

export default class MakeOffer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return ( 
            <div class="container-fluid t11-container t11-offer-form">        
                <h1 className="t11-privacy-title">Make an Offer</h1>
                <h5 className="t11-privacy-title">Selling, renting-out, and giving made easy!</h5>
                    <div className="t11-offer-form">
                        <select class="custom-select">
                            <option selected>Offer Type</option>
                            <option value="1">Selling</option>
                            <option value="2">Renting-out</option>
                            <option value="3">Giving for free!</option>
                        </select>
                    </div>
                <form>
                    <div class="form-group t11-offer-form">
                        <label for="itemName">Item's name</label>
                        <input type="text" 
                        class="form-control" 
                        id="itemName"
                        placeholder="Name"/>
                    </div>
                    <div class="form-group t11-offer-form">
                        <label for="description">Item's description</label>
                        <input type="text" 
                        class="form-control" 
                        id="description" 
                        placeholder="Description"/>
                    </div>
                    <div class="form-group t11-offer-form">
                        <label for="location">Location</label>
                        <input type="text" 
                        class="form-control" 
                        id="location" 
                        placeholder="City or area"/>
                    </div>
                </form>
                <form>
                    <div class="form-group t11-offer-form">
                        <label for="file">Upload an Image</label>
                        <input type="file" 
                        class="form-control-file" 
                        id="file"/>
                    </div>
                </form>
                <center>
                    <button type="button" class="btn btn-light t11-offer-form-btn">Submit</button>
                </center>
            </div>
        );
    }

}
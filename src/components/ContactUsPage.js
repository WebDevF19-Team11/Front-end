import React from 'react'

export default class ContactUsPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return ( 
            <div class="container-fluid t11-container t11-contactPage">        
                <h1 className="t11-privacy-title">Contact Form</h1>
            <div class="mx-auto">
                <div class="container">
                <form className="form-group">
                    <label for="fname">First Name</label>
                    <input type="text" 
                    className="form-control"
                    id="fname" 
                    name="firstname" 
                    placeholder="Your name.."/>

                    <label for="lname">Last Name</label>
                    <input type="text" 
                    id="lname" 
                    className="form-control"
                    name="lastname" 
                    placeholder="Your last name.."/>

                    <label for="subject">Subject</label>
                    <textarea id="subject" 
                    name="subject" 
                    className="form-control"
                    placeholder="Write something.."></textarea>
                    <button type="button" class="btn btn-light">Submit</button>
                </form>
                </div>
            </div>
            </div>
        );
    }

}
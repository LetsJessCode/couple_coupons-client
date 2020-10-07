import React, { Component } from 'react'

export class CouponForm extends Component {
    state = {
        title: "",
        their_name: "",
        your_name: "",
        description: "",
        expiration: ""

    }
    handleSubmit = e => {
        e.preventDefault();

    }
    render() {
        return (
            <div>
                <h3>Create a Coupon</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label for="title">Name of Coupon: </label>
                        <input type="text" name="title" id="title" placeholder="One Free Massage" value={this.state.title}/>
                    </div>
                    <div>
                        <label for="their_name">Your Partner's Name: </label>
                        <input type="text" name="their_name" id="their_name" value={this.state.their_name} />
                    
                        <label for="your_name">Your Name: </label>
                        <input type="text" name="your_name" id="your_name" value={this.state.your_name}/>
                    </div>
                    <div>
                        <label for="description">Coupon Description: </label><br />
                        <textarea name="reason" id="reason" placeholder="This coupon rewards you with one free foot massage..." cols="30" rows="5" value={this.state.description}/>
                    </div>
                    <div>
                        <label for="expiration">Expiration Date: </label>
                        <input type="date" name="expiration" id="expiration" value={this.state.expiration}/>
                    </div>
                    <input type="submit" value="View Coupon" />
                </form>
            </div>
        )
    }
}

export default CouponForm

// t.string :their_name
// t.date :expiration
// t.text :reason
// t.string :title
// t.string :your_name
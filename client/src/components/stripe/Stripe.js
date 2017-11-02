import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Stripe extends Component {
  render() {
    const {fee, title} = this.props
    return (
      <StripeCheckout
        name="Outstanding Training Center"
        description={title}
        amount={fee}
        token={token => this.props.handleToken(token, fee, title)}
        stripeKey='pk_test_dsDSuSBtWVWQg8KQAc1MRJl0'
      >
        <button className="btn">
          Register Now
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Stripe);

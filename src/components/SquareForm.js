import React from 'react';

import {
  SquarePaymentForm,
  CreditCardNumberInput,
  CreditCardExpirationDateInput,
  CreditCardPostalCodeInput,
  CreditCardCVVInput,
  CreditCardSubmitButton,
} from 'react-square-payment-form';
import 'react-square-payment-form/lib/default.css';

const applicationId = 'sandbox-sq0idb-SaWXUHXVJNKbinyVeTDayw';
const locationId = 'LK35YG0Q0VFMA';

class SquareForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessages: [],
    };
  }

  cardNonceResponseReceived = (errors, nonce, cardData, buyerVerificationToken) => {
    if (errors) {
      this.setState({ errorMessages: errors.map((error) => error.message) });
      return;
    }

    this.setState({ errorMessages: [] });
  }

  createVerificationDetails = () => {
    return {
      amount: '100.00',
      currencyCode: 'USD',
      intent: 'CHARGE',
      billingContact: {
        familyName: 'Smith',
        givenName: 'John',
        email: 'jsmith@example.com',
        country: 'GB',
        city: 'London',
        addressLines: ['1235 Emperor\'s Gate'],
        postalCode: 'SW7 4JA',
        phone: '020 7946 0532',
      },
    };
  }

  render() {
    return (
      <div>
        <h1>Payment Page</h1>

        <SquarePaymentForm
          sandbox
          applicationId={applicationId}
          locationId={locationId}
          cardNonceResponseReceived={this.cardNonceResponseReceived}
          createVerificationDetails={this.createVerificationDetails}
        >
          <fieldset className="sq-fieldset">
            <CreditCardNumberInput />
            <div className="sq-form-third">
              <CreditCardExpirationDateInput />
            </div>

            <div className="sq-form-third">
              <CreditCardPostalCodeInput />
            </div>

            <div className="sq-form-third">
              <CreditCardCVVInput />
            </div>
          </fieldset>

          <CreditCardSubmitButton>
            Pay $1.00
          </CreditCardSubmitButton>

        </SquarePaymentForm>

        <div className="sq-error-message">
          {this.state.errorMessages.map((errorMessage) => <li key={`sq-error-${errorMessage}`}>{errorMessage}</li>)}
        </div>

      </div>
    );
  }
}

export default SquareForm;

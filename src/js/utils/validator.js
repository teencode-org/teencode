class Validator {
  constructor(data, options) {
    this.data = data;
    this.options = options;
    this.errors = {};
    this.concatenatedErrors = "";
    this.isValid = true;
    this.minPhoneNumber = 9;
    this.defaultErrorMessages = {
      email: 'Please enter a valid email address',
      phone_number: 'Please enter a valid phone number'
    }
  }

  validateEmail(email) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }

  validatePhoneNumber(phone_number) {
    return parseInt(phone_number) && phone_number.toString().length >= this.minPhoneNumber;
  }

  isEmptyString(str) {
    return typeof str === 'string' && (!str || str.length === 0);
  }

  getFriendlyName(field) {
    return field.replace("_", " ")
  }

  testRequired(validatorOption, fieldName) {
    if (validatorOption && this.isEmptyString(this.data[fieldName])) {
      if (!this.errors[fieldName]) {
        this.errors[fieldName] = `The ${this.getFriendlyName(fieldName)} is required`;
      }
    }
  }

  testMaxLength(validatorOption, fieldName) {
    if (this.data[fieldName].toString().length < validatorOption) {
      if (!this.errors[fieldName]) {
        this.errors[fieldName] = `The ${this.getFriendlyName(fieldName)} must be up to ${validatorOption} characters long`;
      }
    }
  }

  testEmail(fieldName) {
    if (!this.validateEmail(this.data[fieldName])) {
      this.errors[fieldName] = this.defaultErrorMessages[fieldName];
    }
  }

  testPhoneNumber(fieldName) {
    if (!this.validatePhoneNumber(this.data[fieldName])) {
      this.errors[fieldName] = this.defaultErrorMessages[fieldName];
    }
  }

  validatorResults() {
    return {
      errors: this.errors,
      concatenatedErrors: Object.values(this.errors).join('. '),
      isValid: Object.keys(this.errors).length === 0
    };
  }

  validateByOptions() {
    Object.keys(this.options).forEach(fieldName => {
      Object.keys(this.options[fieldName]).forEach(optionKey => {
        let validatorOption = this.options[fieldName][optionKey];

        switch(optionKey) {
        case "message": {
          this.defaultErrorMessages[fieldName] = validatorOption;
          break;
        }
        case "required": {
          this.testRequired(validatorOption, fieldName);
          break;
        }
        case "maxLength": {
          this.testMaxLength(validatorOption, fieldName);
          break;
        }
        }
      })
    })
  }

  validateAllInputs() {
    if(!this.data || Object.keys(this.data).length === 0) {
      return this.validatorResults();
    }

    this.data.phone_number && this.testPhoneNumber('phone_number');
    if (this.options) {
      this.validateByOptions(this.data, this.options);
    }

    return this.validatorResults();
  }
}

export default Validator;

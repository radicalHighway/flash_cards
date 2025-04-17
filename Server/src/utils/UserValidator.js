class UserValidator {
  static validateUser(data) {
    const { login, email, password } = data;
    if (!login || typeof login !== 'string' || login.trim() === '') {
      return {
        isValid: false,
        error: 'Type login please',
      };
    }
    if (login.length <= 3) {
      return {
        isValid: false,
        error: 'Login should be longer than 3 symbols',
      };
    }
    if (!email || typeof email !== 'string' || email.trim() === '') {
      return {
        isValid: false,
        error: 'Type email please',
      };
    }
    if (!email.includes('@')) {
      return {
        isValid: false,
        error: "Email should contain: '@'.",
      };
    }
    if (!password || typeof password !== 'string' || password.trim() === '') {
      return {
        isValid: false,
        error: 'Please type password',
      };
    }
    if (password.length < 4) {
      return {
        isValid: false,
        error: 'Please type password longer than 4 symbols',
      };
    }
    return {
      isValid: true,
      error: null,
    };
  }
 
}

module.exports = UserValidator;

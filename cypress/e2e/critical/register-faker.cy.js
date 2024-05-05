import { registrationPage } from '../../pageobjects/registrationPage';
import { billPay } from '../../pageobjects/billPay';
import { login } from '../../pageobjects/login';


describe('Registration Test', () => {
    it('should be able to register', () => {
      
      //Register With Faker in POM
      registrationPage.visitRegistrationPage();

      //Login in POM
      login.login();
    
      
      //Bill Pay 
      billPay.billPay();
      
     
  });
});


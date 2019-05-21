import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
export const routes:Routes=[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'login',component:LoginComponent}
];

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent],
      imports:[FormsModule,RouterTestingModule.withRoutes(routes)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('on initialization of component error message should be empty ',()=>{
  //   expect(component.showErrorMessage).toEqual('');
  // });
  // it('On login() error message should not be empty',()=>{
  //   component.login();
  //   expect(component.showErrorMessage).toEqual('user name is required')
  // });
  // it('setting username and login should not have the error message ',()=>{
  //   component.userName='uitricks';
  //   component.login();
  //   expect(component.showErrorMessage).toEqual('');
  // });  
  
// it('once we set the username to the component class the dom should display the username ',()=>{
//   component.userName='uitricks';
//   let compNativeElement:HTMLElement=fixture.nativeElement;
//   let userNameField:HTMLElement=compNativeElement.querySelector("input[name='userName']");
//   userNameField.textContent.match('uitricks');
//   }); 

//   it('dont set user name,trigger login from the UI errorMessage should be non empty',()=>
//   {
// let compNativeElement:HTMLElement=fixture.nativeElement;
// let loginButtonField:HTMLElement=compNativeElement.querySelector('#loginButton');
// loginButtonField.click();
// expect(component.showErrorMessage).toBe('user name is required');
//   });
it('set the username,trigger login from the UI errorMessage should be non empty',()=>{
fixture.detectChanges();
let compNativeElement:HTMLElement=fixture.nativeElement;
let userNameField:HTMLInputElement=compNativeElement.querySelector("input[name='userName']");
userNameField.value='UI Tricks';
userNameField.dispatchEvent(new Event('input'));
fixture.whenStable().then(()=>{
fixture.detectChanges();
let loginButtonField:HTMLElement=compNativeElement.querySelector("#loginButton");
loginButtonField.click();
expect(component.showErrorMessage).toBe('');
  });
});
});

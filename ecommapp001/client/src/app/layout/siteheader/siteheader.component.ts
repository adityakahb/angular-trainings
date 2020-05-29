import { Component, OnInit, AfterViewInit, HostListener, Input } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

declare const require: any;
declare const $: any;

const className = 'nav-open';
const langJson = require('./../../data/lang.json');
const navJson = require('./../../data/megamenu.json');
let bodyElem;
let htmlElem;
let lastScrollTop = 0;
let lastScrollTopVal = 0;


@Component({
  selector: 'app-siteheader',
  templateUrl: './siteheader.component.html',
  styleUrls: ['./siteheader.component.scss']
})
export class SiteheaderComponent implements OnInit, AfterViewInit {

  @Input() loggedInUser;

  isLangNavOpen = false;
  isNavOpen = false;
  isScrolledDown = false;
  isSearchNavOpen = false;
  isUserNavOpen = false;
  langArr = [];
  langData = langJson;
  navData = navJson;

  loginForm;
  currentUser: any;
  querySubscription: Subscription;
  loginFormSubmitted = false;

  USER_EMAIL: FormControl;
  USER_PASSWORD: FormControl;
  isLoginLoading = false;
  isLoginFailed = false;
  loginFailMsg = '';

  constructor(private _formBuilder: FormBuilder) { }

  ngAfterViewInit() {
    if (window && document) {
      window.setTimeout(() => {
        $('nav:first').accessibleMegaMenu();
      }, 1000);
      bodyElem = document.querySelector('body');
      htmlElem = document.documentElement;
    }
    this.langData.forEach((item, index) => {
      if (index !== 0) {
        this.langArr.push(item);
      }
    });
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  get loginControls() { return this.loginForm.controls; }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (window && document) {
      lastScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (lastScrollTop > 0) {
        // this.isScrolledDown = true;
        this.isScrolledDown = false;
      } else if (this.isScrolledDown && lastScrollTop <= 0) {
        this.isScrolledDown = false;
      }
    }
  }

  createFormControls() {
    this.USER_EMAIL = new FormControl({ value: '' }, [Validators.required, Validators.email]);
    this.USER_PASSWORD = new FormControl({ value: '' }, [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/)
    ]);
  }
  createForm(): void {
    this.loginForm = this._formBuilder.group({
      USER_EMAIL: this.USER_EMAIL,
      USER_PASSWORD: this.USER_PASSWORD,
    });
  }

  updateScrollVal() {
    if (window && document && bodyElem) {
      bodyElem.classList.add(className);
      bodyElem.style.top = (-1 * lastScrollTop) + 'px';
      lastScrollTopVal = lastScrollTop;
    }
  }

  openNav() {
    this.isNavOpen = true;
    this.updateScrollVal();
  }

  openSearchNav() {
    this.isSearchNavOpen = true;
    this.updateScrollVal();
  }

  openLangNav() {
    this.isLangNavOpen = true;
    this.updateScrollVal();
  }

  openUserNav() {
    this.isUserNavOpen = true;
    this.loginForm.reset();
    this.updateScrollVal();
  }

  closeAllNav() {
    this.isNavOpen = false;
    this.isUserNavOpen = false;
    this.isLangNavOpen = false;
    this.isSearchNavOpen = false;
    if (window && document && htmlElem && bodyElem && bodyElem.classList.contains(className)) {
      bodyElem.removeAttribute('style');
      bodyElem.classList.remove(className);
      window.scroll({
        top: lastScrollTopVal
      });
    }
  }

  onLoginSubmit(formValue) {

  }
}
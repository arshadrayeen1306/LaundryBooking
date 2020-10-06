webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myorders_myorders__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addaddress_addaddress__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tnc_tnc__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signin_signin__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AccountPage = (function () {
    function AccountPage(navCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.name = localStorage.getItem('user_name');
        this.user_email = localStorage.getItem('user_email');
        this.user_img = localStorage.getItem('user_img');
    }
    AccountPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    AccountPage.prototype.myorders = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__myorders_myorders__["a" /* MyordersPage */]);
    };
    AccountPage.prototype.addaddress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__addaddress_addaddress__["a" /* AddaddressPage */]);
    };
    AccountPage.prototype.about = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__about_about__["a" /* AboutPage */]);
    };
    AccountPage.prototype.contact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__contact_contact__["a" /* ContactPage */]);
    };
    AccountPage.prototype.tnc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tnc_tnc__["a" /* TncPage */]);
    };
    AccountPage.prototype.signin = function () {
        window.localStorage.clear();
        // this.appCtrl.getRootNavs()[0].push(SigninPage);
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__signin_signin__["a" /* SigninPage */]);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/account/account.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title text-center>Account</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" no-bounce>\n    <div class="order-head" (click)="profile()">\n        <!-- <ion-row>\n            <ion-col col-4><img src="assets/imgs/user_1.png"></ion-col>\n            <ion-col col-8>\n                <p class="x-lg-text">{{name}}<br>\n                    <div class="lg-md-text txt-light-muted">{{user_email}}</div><span class="md-text">View\n                        profile</span>\n                </p>\n            </ion-col>\n        </ion-row> -->\n\n        <ion-row>\n            <ion-col col-4><img src="assets/imgs/user_1.png"></ion-col>\n            <ion-col col-8>\n                <p class="x-lg-text">{{name}}<br><div class="lg-md-text txt-light-muted">{{user_email}}</div><span class="md-text">View profile</span></p>\n            </ion-col> \n        </ion-row>\n\n    </div>\n    <ion-list no-lines>\n        <ion-item (click)="addaddress()">\n            <ion-icon name="md-pin" item-start></ion-icon>\n            My address\n        </ion-item>\n        <ion-item (click)="about()">\n            <ion-icon name="md-clipboard" item-start></ion-icon>\n            About us\n        </ion-item>\n        <ion-item (click)="contact()">\n            <ion-icon name="md-mail" item-start></ion-icon>\n            Contact us\n        </ion-item>\n        <!-- <ion-item (click)="tnc()">\n            <ion-icon name="md-document" item-start></ion-icon>\n            Terms & Services\n        </ion-item> -->\n        <ion-item (click)="signin()">\n            <ion-icon name="md-open" item-start></ion-icon>\n            Logout\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servic_servic__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangePasswordPage = (function () {
    function ChangePasswordPage(appCtrl, navCtrl, navParams, loadingCtrl, toastCtrl, serviceProvider) {
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.oldPassBoolean = false;
        this.email = "";
        this.from = "";
        this.user_id = "";
        this.user_type = "";
        this.object = { "confirmPassword": "", "firstPass": "" };
        this.objectTwo = { "oldPass": "", "confirmPassword": "", "firstPass": "" };
        this.object = { "confirmPassword": this.confirmPassword, "firstPass": this.firstPass };
        this.objectTwo = { "oldPass": this.oldPass, "confirmPassword": this.confirmPassword, "firstPass": this.firstPass };
        this.user_id = localStorage.getItem('user_id');
        this.email = localStorage.getItem('user_email');
        this.user_type = localStorage.getItem('user_type');
        this.from = navParams.get('from');
        if (this.from == "profile") {
            this.oldPassBoolean = true;
        }
        else {
            this.oldPassBoolean = false;
        }
        if (this.user_type == "client") {
            this.user_type = "user";
        }
        else {
            this.user_type = "staff";
        }
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage.prototype.signin = function () {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_3__providers_global__["a" /* global_data */].api_key,
            "email": this.email,
            "newpassword": this.confirmPassword,
            "action": "forgot_password"
        };
        console.log(this.requestData);
        console.log(this.object);
        if (this.object.firstPass != "" && this.object.confirmPassword != "") {
            if (this.object.firstPass == this.object.confirmPassword) {
                this.showLoader();
                console.log('Resquest Object', this.requestData);
                this.serviceProvider.servicePost(this.requestData).then(function (result) {
                    _this.loading.dismiss();
                    _this.dataResponse = result;
                    if (_this.dataResponse.status == "true") {
                        _this.presentToast(_this.dataResponse.response);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
                    }
                    else {
                        _this.presentToast(_this.dataResponse.response);
                    }
                }, function (err) {
                    _this.loading.dismiss();
                    _this.presentToast("Server down...");
                });
            }
            else {
                this.presentToast("Password does not match! ");
            }
        }
        else {
            this.presentToast("Enter password! ");
        }
    };
    ChangePasswordPage.prototype.changePass = function () {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_3__providers_global__["a" /* global_data */].api_key,
            "user_id": this.user_id,
            "type": this.user_type,
            "old_password": this.oldPass,
            "new_password": this.firstPass,
            "confirm_password": this.confirmPassword,
            "action": "change_password"
        };
        console.log(this.requestData);
        console.log(this.objectTwo);
        if (this.objectTwo.firstPass != "" && this.objectTwo.firstPass != "" && this.objectTwo.confirmPassword != "") {
            if (this.objectTwo.firstPass == this.objectTwo.confirmPassword) {
                this.showLoader();
                console.log('Resquest Object', this.requestData);
                this.serviceProvider.servicePost(this.requestData).then(function (result) {
                    _this.loading.dismiss();
                    _this.dataResponse = result;
                    if (_this.dataResponse.status == "true") {
                        _this.presentToast(_this.dataResponse.response);
                        localStorage.clear();
                        window.localStorage.clear();
                        _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
                    }
                    else {
                        _this.presentToast(_this.dataResponse.response);
                    }
                }, function (err) {
                    _this.loading.dismiss();
                    _this.presentToast("Server down...");
                });
            }
            else {
                this.presentToast("Password does not match! ");
            }
        }
        else {
            this.presentToast("Enter password! ");
        }
    };
    ChangePasswordPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    ChangePasswordPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/change-password/change-password.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title-center">Create Password</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <p text-center>Ceate New Password<br>for your registered Email</p>\n    <ion-list no-lines class="form">\n        <ion-item *ngIf="oldPassBoolean">\n            <ion-icon name="md-lock" item-start></ion-icon>\n            <ion-label floating>Old Password</ion-label>\n            <ion-input [(ngModel)]="oldPass" type="password"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="md-lock" item-start></ion-icon>\n            <ion-label floating>New Password</ion-label>\n            <ion-input [(ngModel)]="firstPass" type="password"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="md-lock" item-start></ion-icon>\n            <ion-label floating>Confirm Password</ion-label>\n            <ion-input [(ngModel)]="confirmPassword" type="password"></ion-input>\n        </ion-item>\n    </ion-list>\n    <!-- change Password -->\n\n    <button *ngIf="!oldPassBoolean" ion-button block (click)="signin()">Submit</button>\n    <button *ngIf="oldPassBoolean" ion-button block (click)="changePass()">Submit</button>\n</ion-content>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/change-password/change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_servic_servic__["a" /* ServicProvider */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyordersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyordersPage = (function () {
    function MyordersPage(navCtrl, navParams, serviceProvider, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.bookingDetails = [];
        this.unitList = [];
        this.unit = "0";
        this.order_id = "";
        this.order = "order_info";
        this.currSymbol = "$";
        this.order_id = this.navParams.get('order_id');
        this.currSymbol = localStorage.getItem('currSymbol');
        console.log('currSymbol', this.currSymbol);
        this.fnDetailsBooking();
    }
    MyordersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderStaffPage');
    };
    MyordersPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    MyordersPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MyordersPage.prototype.fnDetailsBooking = function () {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_3__providers_global__["a" /* global_data */].api_key,
            "order_id": this.order_id,
            "action": "get_appointment_detail"
        };
        this.showLoader();
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.loading.dismiss();
            _this.dataResponse = result;
            if (_this.dataResponse.status == "true") {
                _this.bookingDetails = _this.dataResponse.response;
                for (var i = 0; i < _this.bookingDetails.length; i++) {
                    _this.unit = _this.bookingDetails[i].unit_title;
                }
                _this.unitList = _this.unit.split(',');
                console.log('List Unit', _this.unitList);
                console.log('Details Data ', _this.bookingDetails);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    MyordersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myorders',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/myorders/myorders.html"*/'<ion-header >\n        <ion-navbar>\n            <div style="text-align: center;margin-right: 40px;padding-top: 10px;" *ngFor="let item of bookingDetails let i=index ">\n                    <ion-title >Order No. {{order_id}}<br><span>{{item.start_date}}</span></ion-title>\n            </div>\n        </ion-navbar>\n        <ion-list class="details" no-lines> \n            <ion-row *ngFor="let item of bookingDetails let i=index">\n                <ion-item item-start>\n                        <h2>\n                            Ordered by<strong>{{item.client_name}}</strong>\n                        </h2>\n                        <ion-avatar item-end>\n                            <ion-icon name="md-person"></ion-icon>\n                        </ion-avatar>\n                 </ion-item>\n            </ion-row>\n            <ion-row *ngFor="let item of bookingDetails let i=index">\n                <ion-item item-start class="status">\n                    <h2 *ngIf="item.booking_status==\'A\'">\n                        Ordered status<strong>Ready to Deliver</strong>\n                    </h2>\n                    <ion-avatar *ngIf="item.booking_status==\'A\'" item-end>\n                        <img src="assets/imgs/pickedup.png">\n                    </ion-avatar>\n                    <h2 *ngIf="item.booking_status==\'CO\'">\n                            Ordered status<strong>Item Delivered</strong>\n                        </h2>\n                        <ion-avatar *ngIf="item.booking_status==\'CO\'" item-end>\n                            <img src="assets/imgs/delivered.png">\n                        </ion-avatar>\n                </ion-item>\n            </ion-row>\n            \n        </ion-list>\n        <ion-segment [(ngModel)]="order">\n            <ion-segment-button value="order_info">\n                Order Info\n            </ion-segment-button>\n            <ion-segment-button value="cloth_list">\n                Cloth List\n            </ion-segment-button>\n        </ion-segment>\n    </ion-header> \n    \n    <ion-content class="bg-light">\n        <div [ngSwitch]="order" class="order-list">\n            <div *ngSwitchCase="\'order_info\'" no-lines class="order_info">\n                <div class="info">\n                    <ion-row *ngFor="let item of bookingDetails let i=index">\n                        <ion-col col-6>\n                            <p><small>Picked up</small></p>\n                            <h2><strong>{{item.appointment_date}} </strong> <span>{{item.appointment_time}}</span></h2>\n                        </ion-col>\n                        <ion-col col-6>\n                            <p><small>Delivery</small></p>\n                             <h2><strong>Today, 22 June </strong> <span>01:00 pm - 02:00pm</span></h2>\n                        </ion-col>\n                    </ion-row>\n                </div>\n    \n                <div class="address info">\n                    <ion-row *ngFor="let item of bookingDetails let i=index">\n                        <p><small>Pick up Address</small></p>\n                        <ion-col col-10 style="align-items: center;display: flex;">\n                            <h2><strong>{{item.client_address}}</strong></h2>\n                        </ion-col>\n    \n                        <ion-col col-2>\n                            <ion-icon name="ios-home-outline"></ion-icon>\n                        </ion-col>\n                    </ion-row>\n                    <!-- <div class="map">\n                        <img src="assets/imgs/map-img.png">\n                    </div> -->\n                </div>\n                <div class="info payment">\n                    <p><small>Payment</small></p>\n                    <ion-row *ngFor="let item of bookingDetails let i=index">\n                        <ion-col col-12>\n                            <h2><strong>{{currSymbol}} {{item.booking_price}}</strong>\n                                <span>{{item.payment_type}}</span>\n                            </h2>\n                        </ion-col>\n                    </ion-row>\n                    <!-- <button ion-button block margin-top class="btn">Deliverd</button> -->\n                </div>\n            </div>\n            <div *ngSwitchCase="\'cloth_list\'" no-lines class="cloth_list">\n                <div class="receipt">\n                        <div padding-top class="units-cart">\n                        <ion-row *ngFor="let unit of unitList">\n                            <li class="txt-light-muted">\n                                {{unit}}\n                            </li>\n                        </ion-row>\n                       </div>\n                    <div class="total" padding-top *ngFor="let item of bookingDetails let i=index">\n                            <ion-row class="grend_total">\n                                <ion-col col-6>\n                                    <h2><strong>Total Ammount</strong></h2>\n                                </ion-col>\n                                <ion-col col-6>\n                                    <p><strong>{{currSymbol}}{{item.booking_price}}</strong></p>\n                                </ion-col>\n                            </ion-row>\n                    </div>\n                </div>\n                <!-- <div class="fixed-bottom">\n                    <button ion-button block>Delivered</button>\n                </div> -->\n            </div>\n        </div>\n    </ion-content>\n    '/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/myorders/myorders.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servic_servic__["a" /* ServicProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MyordersPage);
    return MyordersPage;
}());

//# sourceMappingURL=myorders.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_payment__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SelectdatePage = (function () {
    function SelectdatePage(datePipe, navCtrl, loadingCtrl, toastCtrl, serviceProvider) {
        this.datePipe = datePipe;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.category = "pick";
        this.allDateList = [];
        this.allDateListDelivery = [];
        this.date = new Date().toISOString();
        this.selectedDate = "";
        this.selectedPicTime = "";
        this.selectedDeliverDate = "";
        this.selectedDeliverTime = "";
        this.allTimeListDelivery = [];
        this.minimum_delivery_days = 0;
        this.timeListDeliveryCount = "0";
        this.timeListPickCount = "0";
        console.log('today', this.date.substring(0, 10));
    }
    SelectdatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
        this.fnLoadDatePick();
    };
    SelectdatePage.prototype.fnLoadDatePick = function () {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_5__providers_global__["a" /* global_data */].api_key,
            "action": "getAvailable_date"
        };
        this.showLoader();
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.loading.dismiss();
            _this.dataResponse = result;
            if (_this.dataResponse.status == "true") {
                _this.minimum_delivery_days = parseInt(_this.dataResponse.minimum_delivery_days);
                _this.allDateList = _this.dataResponse.response;
                // this.allDateListDelivery = this.dataResponse.response;
                _this.selectedDate = _this.date.substring(0, 10);
            }
            console.log('minimum_delivery_days', _this.minimum_delivery_days);
            console.log(_this.allDateList);
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    SelectdatePage.prototype.fnLoadDateDeliver = function (date) {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_5__providers_global__["a" /* global_data */].api_key,
            "limit_date": this.minimum_delivery_days,
            "selected_date": date,
            "action": "get_delivery_date"
        };
        this.showLoader();
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.loading.dismiss();
            _this.dataResponseDeliver = result;
            if (_this.dataResponseDeliver.status == "true") {
                _this.allDateListDelivery = _this.dataResponseDeliver.response;
                // this.selectedDate = this.date.substring(0, 10);
            }
            console.log('minimum_delivery_days', _this.minimum_delivery_days);
            console.log(_this.allDateList);
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    SelectdatePage.prototype.fnListSlotPick = function (selectDate) {
        var _this = this;
        this.allTimeList = [];
        this.selectedDate = this.datePipe.transform(selectDate, 'yyyy-MM-dd');
        localStorage.setItem('deliver_date', this.selectedDate);
        this.requestData = {
            "api_key": "1",
            "selected_date": this.selectedDate,
            "staff_id": "1",
            "zip_code": localStorage.getItem('zipCode'),
            "action": "get_slots"
        };
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.dataResponseTime = result;
            if (_this.dataResponseTime.status == "true") {
                _this.allTimeList = _this.dataResponseTime.response;
            }
            _this.timeListPickCount = "" + _this.allTimeList.length;
        }, function (err) {
            _this.presentToast("Server down...");
        });
    };
    SelectdatePage.prototype.fnListSlotDeliver = function (selectDate) {
        var _this = this;
        this.allTimeListDelivery = [];
        this.selectedDate = this.datePipe.transform(selectDate, 'yyyy-MM-dd');
        localStorage.setItem('deliver_date', this.selectedDate);
        this.requestData = {
            "api_key": "1",
            "selected_date": this.selectedDate,
            "staff_id": "1",
            "action": "get_slots"
        };
        this.showLoader();
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.loading.dismiss();
            _this.dataResponseDeliverTime = result;
            if (_this.dataResponseDeliverTime.status == "true") {
                _this.allTimeListDelivery = _this.dataResponseDeliverTime.response;
            }
            _this.timeListDeliveryCount = "" + _this.allTimeListDelivery.length;
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    SelectdatePage.prototype.fnSelectedTimeDeliver = function (item) {
        localStorage.setItem('deliver_time', item.substring(0, 5) + ":00");
        this.selectedDeliverTime = item.substring(0, 5) + ":00";
        console.log(item);
        localStorage.setItem('booking_delivery_date_time_start', this.selectedDate + " " + item.substring(0, 5) + ":00");
        localStorage.setItem('booking_delivery_date_time_end', this.selectedDate + " " + item.substring(13, 18) + ":00");
        console.log('booking_delivery_date_time_start', this.selectedDate + " " + item.substring(0, 5) + ":00");
        console.log('booking_delivery_date_time_end', this.selectedDate + " " + item.substring(13, 18) + ":00");
    };
    SelectdatePage.prototype.fnSelectedDateDeliver = function (selectDate) {
        this.allTimeListDelivery = [];
        this.selectedDeliverDate = selectDate;
        this.selectedDate = this.datePipe.transform(selectDate, 'yyyy-MM-dd');
        localStorage.setItem('deliver_date time', this.selectedDate);
        console.log('Selected deliver_date time:', this.selectedDate);
        this.fnListSlotDeliver(this.selectedDate);
    };
    SelectdatePage.prototype.fnSelectedDatePickup = function (dateList) {
        this.selectedDate = this.datePipe.transform(dateList, 'yyyy-MM-dd');
        localStorage.setItem('pick_date', this.selectedDate);
        this.fnLoadDateDeliver(this.selectedDate);
        this.fnListSlotPick(this.selectedDate);
    };
    SelectdatePage.prototype.fnSelectedTimePickup = function (item) {
        this.selectedPicTime = item.substring(0, 5) + ":00";
        localStorage.setItem('pick_time', item.substring(0, 5) + ":00");
        localStorage.setItem('booking_pickup_date_time_start', this.selectedDate + " " + item.substring(0, 5) + ":00");
        localStorage.setItem('booking_pickup_date_time_end', this.selectedDate + " " + item.substring(13, 18) + ":00");
        console.log('booking_pickup_date_time_start', this.selectedDate + " " + item.substring(0, 5) + ":00");
        console.log('booking_pickup_date_time_end', this.selectedDate + " " + item.substring(13, 18) + ":00");
    };
    SelectdatePage.prototype.payment = function () {
        if (this.selectedDate == '') {
            this.presentToast("Please select Date!");
        }
        else if (this.selectedPicTime == "") {
            this.presentToast("Please select time!");
        }
        else if (this.selectedDeliverDate == "") {
            this.presentToast("Please select delivery Date !");
        }
        else if (this.selectedDeliverTime == "") {
            this.presentToast("Please select delivery Time !");
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentPage */]);
        }
    };
    SelectdatePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    SelectdatePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SelectdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selectdate',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/selectdate/selectdate.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title-center">Select Date & Time</ion-title>\n    </ion-navbar>\n    <ion-toolbar no-border-top class="select-tab">\n        <ion-segment [(ngModel)]="category">\n            <ion-segment-button value="pick">\n                <span class="pick"></span> Pick up\n            </ion-segment-button>\n            <ion-segment-button value="delivery">\n                <span class="delivery"></span> Delivery\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class="bg-light" no-bounce>\n    <div [ngSwitch]="category">\n        <ion-list [hidden]="category != \'pick\'" no-lines>\n            <div class="select-day">\n                <p class="heading">Select Pick up Date</p>\n                <ion-scroll scrollX style="height:42px;white-space: nowrap;">\n                    <div class="scroll-item" *ngFor="let item of allDateList;let i= index">\n                        <label ion-label for="date_slot_pick_{{i}}" class="date-slot-radio">\n                            <input ion-radio type="radio" name="date-slot-pick" id="date_slot_pick_{{i}}"\n                                (click)="fnSelectedDatePickup(item.dateList)" />\n                            <div class="date-radio-label">\n                                <p class="date-slot-title">{{item.dateList}}</p>\n                            </div>\n                        </label>\n                    </div>\n                </ion-scroll>\n            </div>\n            <div class="select-time">\n                <p class="heading">Select Pick up Time</p>\n                <ion-row no-padding>\n                    <div *ngIf="timeListPickCount==\'0\'">\n                        <h5 text-center>Pickup time is not availabe!. please select other date.</h5>\n                    </div>\n                    <ion-col col-6 no-padding *ngFor="let item of allTimeList;let i= index">\n                        <label ion-label for="time_slot_pick_{{i}}" class="date-slot-radio">\n                            <input ion-radio type="radio" name="time-slot-pick" id="time_slot_pick_{{i}}"\n                                (click)="fnSelectedTimePickup(item)" />\n                            <div class="date-radio-label">\n                                <p class="date-slot-title">{{item}}</p>\n                            </div>\n                        </label>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-list>\n\n        <ion-list [hidden]="category != \'delivery\'" no-lines>\n            <div class="select-day">\n                <p class="heading">Select Delivery Date</p>\n                <ion-scroll scrollX style="height:42px;white-space: nowrap;">\n\n                    <div class="scroll-item" *ngFor="let item of allDateListDelivery;let i= index">\n                        <label ion-label for="date_slot_{{i}}" class="date-slot-radio">\n                            <input ion-radio type="radio" name="date-slot-deliver" id="date_slot_{{i}}"\n                                (click)="fnSelectedDateDeliver(item.dateList)" />\n                            <div class="date-radio-label">\n                                <p class="date-slot-title">{{item.dateList}}</p>\n                            </div>\n                        </label>\n                    </div>\n                </ion-scroll>\n            </div>\n            <div class="select-time">\n                <p class="heading">Select Delivery Time</p>\n                <ion-row no-padding>\n\n                    <div *ngIf="timeListDeliveryCount==\'0\'">\n                        <h5 text-center>Delivery time is not availabe!. please select other date.</h5>\n                    </div>\n                    <ion-col col-6 no-padding *ngFor="let item of allTimeListDelivery;let i= index">\n                        <label ion-label for="time_slot_{{i}}" class="date-slot-radio">\n                            <input ion-radio type="radio" name="time-slot-deliver" id="time_slot_{{i}}"\n                                (click)="fnSelectedTimeDeliver(item)" />\n                            <div class="date-radio-label">\n                                <p class="date-slot-title">{{item}}</p>\n                            </div>\n                        </label>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer class="fixed-bootom">\n    <ion-row>\n        <ion-col (click)="payment()" class="next">Next\n            <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n        </ion-col>\n    </ion-row>\n</ion-footer>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/selectdate/selectdate.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_servic_servic__["a" /* ServicProvider */]])
    ], SelectdatePage);
    return SelectdatePage;
}());

//# sourceMappingURL=selectdate.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStaffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myorders_myorders__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderStaffPage = (function () {
    function OrderStaffPage(navCtrl, navParams, serviceProvider, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.status = "assigned";
        this.allBooking = [];
        this.user_id = "";
        this.currSymbol = "$";
        this.activeBookingAvailable = 0;
        this.completeBookingAvailable = 0;
        this.activeBooking = [];
        this.completeBooking = [];
        this.user_id = localStorage.getItem("user_id");
        this.currSymbol = localStorage.getItem("currSymbol");
        console.log('currSymbol', this.currSymbol);
    }
    OrderStaffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderStaffPage');
        this.fnGetAssignedBooking();
    };
    OrderStaffPage.prototype.orderinfo = function (orderinfo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__myorders_myorders__["a" /* MyordersPage */], { order_id: orderinfo });
    };
    OrderStaffPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    OrderStaffPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    OrderStaffPage.prototype.fnGetAssignedBooking = function () {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_4__providers_global__["a" /* global_data */].api_key,
            "user_id": this.user_id,
            "user_type": "staff",
            "action": "get_user_appointments_list"
        };
        this.showLoader();
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.loading.dismiss();
            _this.allBookingResponse = result;
            if (_this.allBookingResponse.status == "true") {
                _this.allBooking = _this.allBookingResponse.response;
                for (var i = 0; i < _this.allBooking.length; i++) {
                    if (_this.allBooking[i].booking_status == 'A') {
                        _this.activeBooking.push(_this.allBooking[i]);
                    }
                    else if (_this.allBooking[i].booking_status == 'CO') {
                        _this.completeBooking.push(_this.allBooking[i]);
                    }
                }
                _this.activeBookingAvailable = _this.activeBooking.length;
                _this.completeBookingAvailable = _this.completeBooking.length;
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    OrderStaffPage.prototype.openSetting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */]);
    };
    OrderStaffPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-staff',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/order-staff/order-staff.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="openSetting()">\n                <ion-icon name="settings"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title text-center style="margin-left: 40px;"><strong>Pickup</strong>/Deliveries\n        </ion-title>\n    </ion-navbar>\n    <ion-segment [(ngModel)]="status">\n        <ion-segment-button value="assigned">\n            Assigned\n        </ion-segment-button>\n        <ion-segment-button value="completed">\n            Completed\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div [ngSwitch]="status" class="order-list">\n        <ion-list *ngSwitchCase="\'assigned\'" no-lines class="assigned" padding-top>\n            <div *ngIf="activeBookingAvailable==0" text-center>\n                Data not available!\n            </div>\n            <ion-row *ngFor="let item of activeBooking">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/dispatched.png">\n                    </ion-avatar>\n                    <div class="contant">\n                        <h2 class="d-flex">\n                            <span class="text">\n                                {{item.title}}\n                                <small>\n                                    Order No: {{item.order_id}}\n                                </small>\n                            </span>\n                            <span class="end">\n                                <button ion-button blok full padding-top padding-bottom\n                                    (click)="orderinfo(item.order_id)">View</button>\n                            </span>\n                        </h2>\n                        <h3 class="d-flex">\n                            <span class="text">\n                                <small>\n                                    Appointment time\n                                </small>\n                                <strong>\n                                    {{item.appointment_time}}\n                                    <span>{{item.appointment_date}}</span>\n                                </strong>\n                            </span>\n                            <span class="end text">\n                                <small>\n                                    Payment\n                                </small>\n                                <strong>\n                                    {{currSymbol}} {{item.total_payment}}\n                                    <span>{{item.payment_method}}</span>\n                                </strong>\n                            </span>\n                        </h3>\n                        <h3 class="d-flex">\n                            <span class="text">\n                                <small>\n                                    Delivery Address\n                                </small>\n                                <strong>\n                                    {{item.client_info_data.address}},{{item.client_info_data.zip}},{{item.client_info_data.city}}\n                                </strong>\n                            </span>\n                        </h3>\n                    </div>\n                </ion-item>\n            </ion-row>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'completed\'" no-lines class="completed" padding-top>\n            <div *ngIf="completeBookingAvailable==0" text-center>\n                Data not available!\n            </div>\n            <ion-row *ngFor="let item of completeBooking">\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/dispatched.png">\n                    </ion-avatar>\n                    <div class="contant">\n                        <h2 class="d-flex">\n                            <span class="text">\n                                {{item.title}}\n                                <small>\n                                    Order No: {{item.order_id}}\n                                </small>\n                            </span>\n                            <span class="end">\n                                <button ion-button blok full padding-top padding-bottom\n                                    (click)="orderinfo(item.order_id)">View</button>\n                            </span>\n                        </h2>\n                        <h3 class="d-flex">\n                            <span class="text">\n                                <small>\n                                    Appointment time\n                                </small>\n                                <strong>\n                                    {{item.appointment_time}}\n                                    <span>{{item.appointment_date}}</span>\n                                </strong>\n                            </span>\n                            <span class="end text">\n                                <small>\n                                    Payment\n                                </small>\n                                <strong>\n                                    {{currSymbol}} {{item.total_payment}}\n                                    <span>{{item.payment_method}}</span>\n                                </strong>\n                            </span>\n                        </h3>\n                        <h3 class="d-flex">\n                            <span class="text">\n                                <small>\n                                    Delivery Address\n                                </small>\n                                <strong>\n                                    {{item.client_info_data.address}},{{item.client_info_data.zip}},{{item.client_info_data.city}}\n                                </strong>\n                            </span>\n                        </h3>\n                    </div>\n                </ion-item>\n            </ion-row>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/order-staff/order-staff.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servic_servic__["a" /* ServicProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], OrderStaffPage);
    return OrderStaffPage;
}());

//# sourceMappingURL=order-staff.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_password_change_password__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, loadingCtrl, toastCtrl, serviceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.user_id = "";
        this.user_email = "";
        this.user_type = "";
        this.first_name = "";
        this.full_name = "";
        this.last_name = "";
        this.phone = "";
        this.address = "";
        this.city = "";
        this.state = "";
        this.country = "";
        this.zip = "";
        this.user_id = localStorage.getItem('user_id');
        this.user_type = localStorage.getItem('user_type');
        this.getUserInfo();
    }
    ProfilePage.prototype.getUserInfo = function () {
        var _this = this;
        if (this.user_type == "client") {
            this.user_type = "user";
        }
        else {
            this.user_type = "staff";
        }
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* global_data */].api_key,
            "user_id": this.user_id,
            "type": this.user_type,
            "action": "get_profile_detail"
        };
        this.showLoader();
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.loading.dismiss();
            _this.dataResponse = result;
            _this.userInfo = _this.dataResponse.response;
            console.log(_this.userInfo);
            for (var _i = 0, _a = _this.userInfo; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.user_email = item.user_email;
                _this.first_name = item.first_name;
                _this.last_name = item.last_name;
                _this.full_name = item.fullname;
                _this.phone = item.phone;
                _this.address = item.address;
                _this.city = item.city;
                _this.state = item.state;
                _this.country = item.country;
                _this.zip = item.zip;
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    ProfilePage.prototype.updateProfile = function () {
        var _this = this;
        this.requestUpdateData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* global_data */].api_key,
            "user_id": this.user_id,
            "type": this.user_type,
            "firstname": this.first_name,
            "lastname": this.last_name,
            "fullname": this.full_name,
            "phone": this.phone,
            "address": this.address,
            "city": this.city,
            "state": this.state,
            "zip": this.zip,
            "country": this.country,
            "email": this.user_email,
            "action": "profile_detail_update"
        };
        this.showLoader();
        this.serviceProvider.servicePost(this.requestUpdateData).then(function (result) {
            _this.loading.dismiss();
            _this.dataUpdateResponse = result;
            if (_this.dataUpdateResponse.status == "true") {
                localStorage.setItem("first_name", _this.dataResponse.response.first_name);
                localStorage.setItem("last_name", _this.dataResponse.response.last_name);
                localStorage.setItem("phone", _this.dataResponse.response.phone);
                localStorage.setItem("zip", _this.dataResponse.response.zip);
                localStorage.setItem("address", _this.dataResponse.response.address);
                localStorage.setItem("city", _this.dataResponse.response.city);
                localStorage.setItem("state", _this.dataResponse.response.state);
                _this.presentToast(_this.dataUpdateResponse.response);
            }
            else {
                _this.presentToast(_this.dataUpdateResponse.response);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    ProfilePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    ProfilePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ProfilePage.prototype.changePassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__change_password_change_password__["a" /* ChangePasswordPage */], {
            from: "profile"
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/profile/profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title-center">My Profile</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding no-bounce>\n    <div class="profile-img"><img src="assets/imgs/user_1.png">\n    </div>\n    <div class="text-center profile-email lg-text txt-light-muted">{{user_email}}</div>\n    <ion-list no-lines class="form">\n        <ion-item *ngIf="user_type==\'user\'">\n            <ion-icon name="md-person" item-start></ion-icon>\n            <ion-label floating>Enter First Name</ion-label>\n            <ion-input [(ngModel)]="first_name" type="text">{{first_name}}</ion-input>\n        </ion-item>\n        <ion-item *ngIf="user_type==\'user\'">\n            <ion-icon name="md-person" item-start></ion-icon>\n            <ion-label floating>Enter Last Name</ion-label>\n            <ion-input [(ngModel)]="last_name" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="user_type==\'staff\'">\n            <ion-icon name="md-person" item-start></ion-icon>\n            <ion-label floating>Enter Full Name</ion-label>\n            <ion-input [(ngModel)]="full_name" type="text">{{full_name}}</ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="md-phone-portrait" item-start></ion-icon>\n            <ion-label floating>Phone Number</ion-label>\n            <ion-input [(ngModel)]="phone" type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="md-mail" item-start></ion-icon>\n            <ion-label floating>Address</ion-label>\n            <ion-input [(ngModel)]="address" type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="md-apps" item-start></ion-icon>\n            <ion-label floating>Zip Code</ion-label>\n            <ion-input [(ngModel)]="zip" type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="md-pin" item-start></ion-icon>\n            <ion-label floating>City</ion-label>\n            <ion-input [(ngModel)]="city" type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="md-pin" item-start></ion-icon>\n            <ion-label floating>State</ion-label>\n            <ion-input [(ngModel)]="state" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="user_type==\'staff\'">\n            <ion-icon name="md-pin" item-start></ion-icon>\n            <ion-label floating>Country</ion-label>\n            <ion-input [(ngModel)]="country" type="text"></ion-input>\n        </ion-item>\n    </ion-list>\n    <button ion-button full (click)="updateProfile()">Update Profile</button>\n    <p text-center (click)="changePassword()">Change Password</p>\n</ion-content>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servic_servic__["a" /* ServicProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddaddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddaddressPage = (function () {
    function AddaddressPage(navCtrl, serviceProvider, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.serviceProvider = serviceProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.address = "home";
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        console.log('User Parse --', this.userInfo.address);
        this.zipcode = this.userInfo.zip;
        this._address = this.userInfo.address;
        this.city = this.userInfo.city;
        this.state = this.userInfo.state;
        this.type = this.userInfo.usertype;
        this.first_name = this.userInfo.first_name;
        this.last_name = this.userInfo.last_name;
        this.phone = this.userInfo.phone;
        this.user_id = this.userInfo.id;
        this.user_email = this.userInfo.user_email;
    }
    AddaddressPage.prototype.fnUpdateProfile = function () {
        var _this = this;
        if (this.type == 'client') {
            this.type = "user";
        }
        else {
            this.type = "staff";
        }
        this.requestObject = {
            "api_key": __WEBPACK_IMPORTED_MODULE_3__providers_global__["a" /* global_data */].api_key,
            "firstname": this.first_name,
            "lastname": this.last_name,
            "address": this._address,
            "city": this.city,
            "state": this.state,
            "phone": this.phone,
            "zip": this.zipcode,
            "user_id": this.user_id,
            "type": this.type,
            "email": this.user_email,
            "action": "profile_detail_update"
        };
        console.log('Request update', this.requestObject);
        this.showLoader();
        this.serviceProvider.servicePostAddress(this.requestObject).then(function (result) {
            _this.loading.dismiss();
            _this.userResponse = result;
            console.log('Get Response', _this.userResponse);
            if (_this.userResponse.status == "true") {
                _this.messResponse = _this.userResponse.response;
                localStorage.setItem("zip", _this.zipcode);
                localStorage.setItem("address", _this._address);
                localStorage.setItem("city", _this.city);
                localStorage.setItem("state", _this.state);
                _this.presentToast(_this.messResponse);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    AddaddressPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    AddaddressPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AddaddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addaddress',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/addaddress/addaddress.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title-center">My Address</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" no-bounce>\n    <!-- <p padding-left padding-right class="heading">Click on icons to add Address</p> -->\n    <ion-toolbar no-border-top class="select-tab">\n        <ion-segment [(ngModel)]="address">\n            <ion-segment-button value="home">\n                <span class="home-img"></span> Home\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n    <div class="address-list">\n        <ion-list no-lines class="home-address">\n            <div class="input-address" padding>\n                <p class="heading" no-margin padding-bottom>Enter Home Address Details</p>\n                <ion-list no-line>\n                    <ion-item>\n                        <ion-input type="text" [(ngModel)]="_address" placeholder="Building/Society Name & Number">\n                        </ion-input>\n                    </ion-item>\n                    <ion-row no-padding>\n                        <ion-col no-padding>\n                            <ion-item>\n                                <ion-input type="text" [(ngModel)]="zipcode" placeholder="Zip Code"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col no-padding>\n                            <ion-item>\n                                <ion-input type="text" [(ngModel)]="city" placeholder="City"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-item>\n                        <ion-input type="text" [(ngModel)]="state" placeholder="State"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <button ion-button full (click)="fnUpdateProfile()">Save Address</button>\n            </div>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/addaddress/addaddress.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servic_servic__["a" /* ServicProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AddaddressPage);
    return AddaddressPage;
}());

//# sourceMappingURL=addaddress.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    function AboutPage(loadingCtrl, serviceProvider, toastCtrl, navCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.serviceProvider = serviceProvider;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.fnGetAllServices();
    }
    AboutPage.prototype.fnGetAllServices = function () {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_3__providers_global__["a" /* global_data */].api_key,
            "action": "get_all_services",
        };
        this.showLoader();
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.loading.dismiss();
            _this.dataResponse = result;
            if (_this.dataResponse.status == "true") {
                _this.allServices = _this.dataResponse.response;
            }
            else {
                _this.presentToast("Services is not available");
            }
            console.log('Response Services data', _this.allServices);
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    AboutPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    AboutPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/about/about.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title-center">\n            About Us\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n    <div padding>\n        <div class="logo">\n            <img src="assets/imgs/logo4.png">\n        </div>\n        <p>\n            LaundryBooking app is an on-demand laundry and dry cleaning app that delivers clean clothes at the tap of a\n            button. Services like washing clothes, ironing clothes, or dry clean of clothes can be book with this app.\n        </p>\n        <p>\n            Skymoon Lab has provided professional website development solutions to small business for many years. With\n            years of web related experience, Skymoon Lab is quickly becoming leading website Development Company. We\n            have special team for Website Design who has been involved in designing professional websites of all\n            categories. We look forward to establishing a long term relationship with our clients. Our motto is to\n            provide our customers with an affordable web marketing tool that returns Results. Through a simple process\n            we will work with you through the development stage, ensuring to you get exactly what you want out of your\n            website, while making sure we always provide you with the right advice so that you end up with a product\n            that you, and the customer using it, will be glad with.\n        </p>\n    </div>\n    <div class="services" padding>\n        <p class="txt-light-muted">Our Services</p>\n        <ion-row>\n            <ion-col *ngFor="let service of allServices" col-4>\n                <img *ngIf="service.image" [src]="service.image" width="90" height="80">\n                <img *ngIf="!service.image" width="90" height="80" src="assets/imgs/default_service.png">\n                <h6 class="md-text" [innerHTML]="service.title"></h6>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servic_servic__["a" /* ServicProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = (function () {
    function ContactPage(alertCtrl, navCtrl, loadingCtrl, toastCtrl, serviceProvider) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.fnGetContact();
    }
    ContactPage.prototype.fnGetContact = function () {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_3__providers_global__["a" /* global_data */].api_key,
            "ld_company_name": "ld_company_name",
            "ld_company_address": "ld_company_address",
            "ld_company_email": "ld_company_email",
            "ld_company_phone": "ld_company_phone",
            "action": "get_contact_us"
        };
        this.showLoader();
        console.log('contact requestData', this.requestData);
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.loading.dismiss();
            _this.dataResponse = result;
            console.log('contact dataResponse', _this.dataResponse);
            if (_this.dataResponse.status == "true") {
                _this.contactList = _this.dataResponse.response;
            }
            else {
                _this.presentToast(_this.dataResponse.response);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    ContactPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    ContactPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/contact/contact.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title-center">\n            Contact\n        </ion-title>\n    </ion-navbar>\n</ion-header> \n<ion-content class="bg-light" no-bounce>\n    <ion-list no-lines>\n        <ion-item *ngFor="let item of contactList">\n            <p>Call us</p>\n            <h2 *ngIf="item.comapny_phone!=\'\'">{{item.comapny_phone}}</h2>\n            <h2 class="long-press-select" *ngIf="item.comapny_phone==\'\'">+0000000000</h2>\n            <ion-avatar item-end>\n                <ion-icon name="md-call"></ion-icon>\n            </ion-avatar>\n        </ion-item>\n        <ion-item *ngFor="let item of contactList">\n            <p>Email us</p>\n            <h2 class="long-press-select">{{item.comapny_email}}</h2>\n            <ion-avatar item-end>\n                <ion-icon name="md-mail"></ion-icon>\n            </ion-avatar>\n        </ion-item>\n        <ion-item *ngFor="let item of contactList">\n            <p>Reach us</p>\n            <h2>{{item.comapny_add}}</h2>\n            <ion-avatar item-end>\n                <ion-icon name="home"></ion-icon>\n            </ion-avatar>\n        </ion-item>\n    </ion-list>\n    <!-- <div class="map">\n        <ion-icon name="md-navigate"></ion-icon>\n        <img src="assets/imgs/map-img.png">\n    </div> -->\n</ion-content>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servic_servic__["a" /* ServicProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TncPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TncPage = (function () {
    function TncPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TncPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tnc',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/tnc/tnc.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title  class="title-center">\n            Terms & Conditions\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n \n<ion-content>\n    <div padding no-bounce>\n        <div class="logo">\n            <img src="assets/imgs/logo2.png">\n        </div>\n        <p class="heading">Terms of Use</p>\n        <p>\n            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n        </p>\n        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>\n    </div>\n    <div class="conditions" padding>\n        <p class="heading">Privacy Policy</p>\n        <p>\n            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n        </p>\n        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/tnc/tnc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], TncPage);
    return TncPage;
}());

//# sourceMappingURL=tnc.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_booking_details_booking_details__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationPage = (function () {
    function NotificationPage(modalCtrl, alertCtrl, navCtrl, loadingCtrl, toastCtrl, serviceProvider) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.allBooking = [];
        this.allData = [];
        this.order_id = "0";
        this.totalCount = "0";
        this.currSymbol = "$";
        this.currSymbol = localStorage.getItem('currSymbol');
        console.log('currSymbol', this.currSymbol);
    }
    NotificationPage.prototype.fnGetAllBooking = function () {
        var _this = this;
        this.allBooking = [];
        this.allData = [];
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_3__providers_global__["a" /* global_data */].api_key,
            "user_id": localStorage.getItem("user_id"),
            "page": "1",
            "user_type": localStorage.getItem("user_type"),
            "action": "get_user_appointments_list"
        };
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.allBookingResponse = result;
            if (_this.allBookingResponse.status == "true") {
                _this.allBooking = _this.allBookingResponse.response;
                for (var i = 0; i < _this.allBooking.length; i++) {
                    _this.allData.push(_this.allBooking[i]);
                }
                _this.totalCount = "" + _this.allData.length;
            }
        }, function (err) {
            _this.presentToast("Server down...");
        });
    };
    NotificationPage.prototype.ionViewDidEnter = function () {
        this.fnGetAllBooking();
    };
    NotificationPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    NotificationPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    NotificationPage.prototype.doCancel = function (order_id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Cancel Appointment',
            message: 'Enter a Reason for this Canceling Appointment',
            inputs: [
                {
                    name: 'reason',
                    placeholder: 'Enter Reason'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirm',
                    handler: function (data) {
                        console.log('Confirm clicked', data.reason);
                        _this.fnCancelAppointment(order_id, data.reason);
                    }
                }
            ]
        });
        alert.present();
    };
    NotificationPage.prototype.fnCancelAppointment = function (order_id, data) {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_3__providers_global__["a" /* global_data */].api_key,
            "order_id": order_id,
            "cancel_reason": data,
            "gc_event_id": "you will get this id from my appointment api",
            "gc_staff_event_id": "you will get this id from my appointment api",
            "pid": "provider id here if any of staff assigned to this appointment",
            "action": "cancel_appointment"
        };
        console.log(this.requestData);
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.cancelResponse = result;
            if (_this.cancelResponse.status == "true") {
                _this.presentToast(_this.cancelResponse.response);
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            }
            else {
                _this.presentToast(_this.cancelResponse.response);
            }
        }, function (err) {
            _this.presentToast("Server down...");
        });
    };
    NotificationPage.prototype.fnGetDetails = function (orderId) {
        this.order_id = orderId;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_booking_details_booking_details__["a" /* BookingDetailsPage */], { order_id: this.order_id });
        modal.present();
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/notification/notification.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title text-center>All Appointment</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" no-bounce overflow-scroll="true">\n    <div class="order-list">\n        <ion-label text-center *ngIf="totalCount == \'0\'">Data not found</ion-label>\n        <ion-list no-lines>\n            <div *ngFor="let item of allData" class="padding-top">\n                <div class="order-header">\n                    <ion-row>\n                        <ion-col col-4>\n                            <small>Order No: {{ item.order_id }}</small>\n                        </ion-col>\n                        <ion-col col-6 text-right text-right *ngIf="item.booking_status == \'A\'">\n                            <small>{{ item.appointment_date }}</small>\n                        </ion-col>\n                        <ion-col col-8 text-right text-right *ngIf="item.booking_status != \'A\'">\n                            <small>{{ item.appointment_date }}</small>\n                        </ion-col>\n                        <ion-col col-2 text-right *ngIf="item.booking_status == \'A\'">\n                            <ion-icon (click)="doCancel(item.order_id)"\n                                style="font-size: 20px;color: #187d90;margin-right: 5px;" name="close"></ion-icon>\n                        </ion-col>\n                    </ion-row>\n                </div>\n                <ion-item (click)="fnGetDetails(item.order_id)">\n                    <ion-row style="align-items: center">\n                        <ion-col col-4 *ngIf="\n                item.booking_status == \'R\' ||\n                item.booking_status == \'CS\' ||\n                item.booking_status == \'CC\'\n              ">\n                            <ion-avatar item-start>\n                                <img src="assets/imgs/cancel.png" />\n                            </ion-avatar>\n                        </ion-col>\n                        <ion-col col-4 *ngIf="\n                item.booking_status == \'C\' ||\n                item.booking_status == \'A\' ||\n                item.booking_status == \'CO\' ||\n                item.booking_status == \'MN\'\n              ">\n                            <ion-avatar item-start>\n                                <img src="assets/imgs/confirmed.png" />\n                            </ion-avatar>\n                        </ion-col>\n                        <ion-col col-8>\n                            <h2>{{ item.title }}</h2>\n                            <h3 *ngIf="item.booking_status == \'C\'" class="color-green">\n                                Confirmed\n                            </h3>\n                            <h3 *ngIf="item.booking_status == \'R\'" class="color-danger">\n                                Rejected\n                            </h3>\n                            <h3 *ngIf="item.booking_status == \'A\'" class="color-warning">\n                                Pending\n                            </h3>\n                            <h3 *ngIf="item.booking_status == \'CS\'" class="color-danger">\n                                Cancelled\n                            </h3>\n                            <h3 *ngIf="item.booking_status == \'CC\'" class="color-danger">\n                                Cancelled\n                            </h3>\n                            <h3 *ngIf="item.booking_status == \'CO\'" class="color-primary">\n                                Completed\n                            </h3>\n                            <h3 *ngIf="item.booking_status == \'MN\'" class="color-green">\n                                No Show\n                            </h3>\n                            <ion-row>\n                                <ion-col col-5>\n                                    <h3 text-left>{{ item.appointment_time }}</h3>\n                                </ion-col>\n                                <ion-col col-7>\n                                    <h2 text-right>{{ currSymbol }}{{ item.total_payment }}</h2>\n                                </ion-col>\n                            </ion-row>\n                        </ion-col>\n                    </ion-row>\n                </ion-item>\n            </div>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/notification/notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servic_servic__["a" /* ServicProvider */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectclothes_selectclothes__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_booking_details_booking_details__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(alertCtrl, modalCtrl, navCtrl, loadingCtrl, toastCtrl, serviceProvider) {
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.curSymbol = null;
        this.allActiveBooking = [];
        this.allActive = [];
        this.totalActiveOrder = "0";
        this.order_id = "0";
        this.currSymbol = "$";
        this.slides = [
            {
                image: "assets/imgs/banner1.png",
                title: "Get quick booking <br>details",
            },
            {
                image: "assets/imgs/banner2.png",
                title: "Cleaning, Done it <br>Right",
            }
        ];
        this.services = [
            {
                image: "assets/imgs/washing.png",
                title: "Wash & Fold",
                small: "Min 12 Hours",
            },
            {
                image: "assets/imgs/iron.png",
                title: "Wash & Iorn",
                small: "Min 6 Hours",
            },
            {
                image: "assets/imgs/dryclean.png",
                title: "Dry Clean",
                small: "Min 24 Hours",
            }
        ];
        this.fnGetAllServices();
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.fnGetCurrencySym();
        this.fnGetActiveBooking();
    };
    HomePage.prototype.fnGetAllServices = function () {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_4__providers_global__["a" /* global_data */].api_key,
            "action": "get_all_services",
        };
        this.showLoader();
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.loading.dismiss();
            _this.dataResponse = result;
            if (_this.dataResponse.status == "true") {
                _this.allServices = _this.dataResponse.response;
            }
            else {
                _this.presentToast("Services is not available");
            }
            console.log('Response Services data', _this.allServices);
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    HomePage.prototype.fnGetActiveBooking = function () {
        var _this = this;
        this.allActiveBooking = [];
        this.allActive = [];
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_4__providers_global__["a" /* global_data */].api_key,
            "user_id": localStorage.getItem("user_id"),
            "page": "1",
            "user_type": localStorage.getItem("user_type"),
            "action": "get_user_appointments_list"
        };
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.allActiveBookingResponse = result;
            if (_this.allActiveBookingResponse.status == "true") {
                _this.allActiveBooking = _this.allActiveBookingResponse.response;
                for (var i = 0; i < _this.allActiveBooking.length; i++) {
                    if (_this.allActiveBooking[i].booking_status == "A") {
                        _this.allActive.push(_this.allActiveBooking[i]);
                    }
                }
                _this.totalActiveOrder = "" + _this.allActive.length;
                console.log('Past data', _this.allActiveBooking);
            }
            else {
                console.log('Past data', 'Past Booking not available');
            }
        }, function (err) {
        });
    };
    HomePage.prototype.selectclothes = function (id, serviceName) {
        localStorage.setItem('selectedServiceName', serviceName);
        localStorage.setItem('servicesId', id);
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__selectclothes_selectclothes__["a" /* SelectclothesPage */], {
            servicesId: id
        });
    };
    HomePage.prototype.fnGotoAllOrder = function () {
        this.navCtrl.parent.select(2);
    };
    HomePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    HomePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    HomePage.prototype.fnGetDetails = function (orderId) {
        this.order_id = orderId;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_booking_details_booking_details__["a" /* BookingDetailsPage */], { order_id: this.order_id });
        modal.present();
    };
    HomePage.prototype.doCancel = function (order_id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Cancel Appointment',
            message: 'Enter a Reason for this Canceling Appointment',
            inputs: [
                {
                    name: 'reason',
                    placeholder: 'Enter Reason'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirm',
                    handler: function (data) {
                        console.log('Confirm clicked', data.reason);
                        _this.fnCancelAppointment(order_id, data.reason);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.fnCancelAppointment = function (order_id, data) {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_4__providers_global__["a" /* global_data */].api_key,
            "order_id": order_id,
            "cancel_reason": data,
            "gc_event_id": "you will get this id from my appointment api",
            "gc_staff_event_id": "you will get this id from my appointment api",
            "pid": "provider id here if any of staff assigned to this appointment",
            "action": "cancel_appointment"
        };
        console.log(this.requestData);
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.cancelResponse = result;
            if (_this.cancelResponse.status == "true") {
                _this.presentToast(_this.cancelResponse.response);
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            }
            else {
                _this.presentToast(_this.cancelResponse.response);
            }
            console.log('Response cancel', _this.cancelResponse.response);
        }, function (err) {
            _this.presentToast("Server down...");
        });
    };
    HomePage.prototype.fnGetCurrencySym = function () {
        var _this = this;
        this.requestCurrObject = {
            "api_key": __WEBPACK_IMPORTED_MODULE_4__providers_global__["a" /* global_data */].api_key,
            "option_name": "ld_currency_symbol",
            "action": "get_setting"
        };
        this.serviceProvider.servicePost(this.requestCurrObject).then(function (result) {
            _this.dataCurrResponse = result;
            if (_this.dataCurrResponse.status == "true") {
                _this.currSymbol = _this.dataCurrResponse.response[0].option_value;
                console.log('currency res', _this.currSymbol);
                localStorage.setItem("currSymbol", _this.currSymbol);
            }
        }, function (err) {
            _this.presentToast(err.message);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar> \n        <ion-title text-center><strong>Laundry</strong>Booking</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" no-bounce overflow-scroll="true">\n    <ion-slides pager>\n        <ion-slide *ngFor="let slide of slides; let i=index">\n            <img [src]="slide.image" class="slide-image" />\n            <div class="banner-text">\n                <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n                <button *ngIf="i==0" (click)="fnGotoAllOrder()" ion-button outline item-end icon-end clear small>\n                    View booking\n                    <ion-icon name="md-arrow-forward"></ion-icon>\n                </button>\n            </div>\n        </ion-slide>\n    </ion-slides>\n\n    <p padding-left padding-right class="heading">Services</p>\n    <ion-scroll scrollX style="height:165px;white-space: nowrap;">\n        <div class="scroll-item" *ngFor="let service of allServices" (click)="selectclothes(service.id,service.title)">\n            <div class="item-box">\n                <img *ngIf="service.image" [src]="service.image" width="120" height="100">\n                <img *ngIf="!service.image" width="120" height="100" src="assets/imgs/default_service.png">\n                <h5 class="top-zero" [innerHTML]="service.title"></h5>\n                <p [innerHTML]="service.description"></p>\n            </div>\n        </div>\n    </ion-scroll>\n\n    <p padding-left padding-right class="heading">Your Active Order ({{totalActiveOrder}})<span\n            *ngIf="totalActiveOrder!=\'0\'" (click)="fnGotoAllOrder()">All Booking</span></p>\n    <div padding-left padding-right class="order-list">\n        <ion-list no-lines>\n            <div *ngFor="let item of allActive;" class="padding-top">\n                <div *ngIf="item.booking_status==\'A\'">\n                    <div class="order-header">\n                        <ion-row>\n                            <ion-col col-4>\n                                <small>Order No: {{item.order_id}}</small>\n                            </ion-col>\n                            <ion-col col-6 text-right>\n                                <small>{{item.appointment_date}}</small>\n                            </ion-col>\n                            <ion-col col-2 text-right>\n                                <ion-icon (click)="doCancel(item.order_id)"\n                                    style="font-size: 20px;color: #187d90;margin-right: 5px;" name="close"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                    <ion-item (click)="fnGetDetails(item.order_id)">\n                        <div>\n                            <ion-row style="align-items: center">\n                                <ion-col col-3>\n                                    <ion-avatar item-start>\n                                        <img src="assets/imgs/confirmed.png">\n                                    </ion-avatar>\n                                </ion-col>\n                                <ion-col col-9>\n                                    <h3>{{item.title}}</h3>\n                                    <p class="color-warning">Pending</p>\n                                    <ion-row>\n                                        <ion-col col-5>\n                                            <h3 text-left>{{item.appointment_time}}</h3>\n                                        </ion-col>\n                                        <ion-col col-7>\n                                            <h2 text-right>{{currSymbol}}{{item.total_payment}}</h2>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-col>\n                            </ion-row>\n                        </div>\n                    </ion-item>\n                </div>\n            </div>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servic_servic__["a" /* ServicProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectclothesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderconfirmed_orderconfirmed__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectclothesPage = (function () {
    function SelectclothesPage(navParams, loadingCtrl, toastCtrl, serviceProvider, navCtrl) {
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.allUnitsBack = [];
        this.servicesId = "";
        this.totalAmt = 0;
        this.selectedItem = 0;
        this.listClothEnable = false;
        this.currSymbol = "$";
        this.listClothEnable = false;
        this.servicesId = navParams.get('servicesId');
        this.currSymbol = localStorage.getItem('currSymbol');
        this.fnGetUnitsList();
    }
    SelectclothesPage.prototype.fnGetUnitsList = function () {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_4__providers_global__["a" /* global_data */].api_key,
            "service_id": this.servicesId,
            "action": "get_units_of_services_method"
        };
        this.allUnitsBack = [];
        console.log('Request arshad', this.requestData);
        this.showLoader();
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.loading.dismiss();
            _this.dataResponse = result;
            if (_this.dataResponse.status == "true") {
                _this.allUnits = _this.dataResponse.response;
                for (var _i = 0, _a = _this.allUnits; _i < _a.length; _i++) {
                    var obj = _a[_i];
                    localStorage.setItem('tax', JSON.stringify(obj.tax));
                    _this.allUnitsBack.push({
                        id: obj.id,
                        units_title: obj.units_title,
                        base_price: obj.base_price,
                        minlimit: "0",
                        maxlimit: obj.maxlimit,
                        predefine_image: obj.predefine_image,
                        image: obj.image,
                        total: ""
                    });
                    _this.totalAmt = _this.itemTotal();
                    _this.selectedItem = _this.itemTotalSelected();
                }
            }
            else {
                _this.presentToast(_this.dataResponse.response);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    SelectclothesPage.prototype.remove = function (id, minVal) {
        var cnt = minVal;
        if (minVal == "0") {
            this.allUnitsBack.find(function (v) { return v.id == id; }).minlimit = "0";
        }
        else {
            cnt--;
            this.allUnitsBack.find(function (v) { return v.id == id; }).minlimit = cnt;
        }
        this.totalAmt = this.itemTotal();
        this.selectedItem = this.itemTotalSelected();
    };
    SelectclothesPage.prototype.add = function (id, minVal, maxVal) {
        var cnt = minVal;
        if (maxVal == cnt) {
            // this.presentToast("Max Order is  - " + maxVal);
        }
        else {
            cnt++;
            this.allUnitsBack.find(function (v) { return v.id == id; }).minlimit = "" + cnt;
            this.allUnitsBack.find(function (v) { return v.id == id; }).totalAmt = "" + cnt;
        }
        this.totalAmt = this.itemTotal();
        this.selectedItem = this.itemTotalSelected();
    };
    SelectclothesPage.prototype.fnCheckPostalCode = function () {
        var _this = this;
        this.requestData = {
            "api_key": "1",
            "postal_code": this.zipCode,
            "action": "check_postal_code"
        };
        this.showLoader();
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.loading.dismiss();
            _this.dataResponseZip = result;
            if (_this.dataResponseZip.status == "true") {
                localStorage.setItem("zip", _this.zipCode);
                _this.listClothEnable = true;
            }
            else {
                _this.presentToast(_this.dataResponseZip.response);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    SelectclothesPage.prototype.orderconfirmed = function () {
        if (this.totalAmt == 0) {
            this.presentToast("Please select atleast one Cloth !");
        }
        else {
            localStorage.setItem('zipCode', this.zipCode);
            localStorage.setItem('OrderList', JSON.stringify(this.allUnitsBack));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__orderconfirmed_orderconfirmed__["a" /* OrderconfirmedPage */]);
        }
    };
    SelectclothesPage.prototype.itemTotal = function () {
        var total = 0;
        for (var i = 0; i < this.allUnitsBack.length; i++) {
            if (this.allUnitsBack[i].base_price && this.allUnitsBack[i].minlimit) {
                total += Number(this.allUnitsBack[i].base_price * this.allUnitsBack[i].minlimit);
            }
        }
        return total;
    };
    SelectclothesPage.prototype.itemTotalSelected = function () {
        var total = 0;
        for (var i = 0; i < this.allUnitsBack.length; i++) {
            if (this.allUnitsBack[i].minlimit) {
                total += Number(this.allUnitsBack[i].minlimit);
            }
        }
        return total;
    };
    SelectclothesPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    SelectclothesPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SelectclothesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selectclothes',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/selectclothes/selectclothes.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title *ngIf="listClothEnable" class="title-center">Select Clothes</ion-title>\n        <ion-title *ngIf="!listClothEnable" class="title-center">Select Zip Code</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content class="bg-light" no-bounce>\n    <div style="margin-top: 8px;" class="cloth-list" *ngIf="listClothEnable">\n        <ion-list no-lines>\n            <ion-item *ngFor="let unit of allUnitsBack ">\n                <ion-row>\n                    <ion-col col-3 class="center-left">\n                        <img *ngIf="unit.image==\'\' && unit.predefine_image==\'\'"\n                            src="../assets/imgs/default_service.png"\n                            width="80" height="70">\n                        <img *ngIf="unit.image==\'\'"\n                        \n                            src="http://skymoonlabs.com/laundry/assets/images/article-icons/{{unit.predefine_image}}"\n                            width="80" height="70">\n                        <img *ngIf="unit.predefine_image!=\'\' && unit.image!=\'\'"\n                            src="http://skymoonlabs.com/laundry/assets/images/article-icons/{{unit.image}}"\n                            width="80" height="70">\n                    </ion-col>\n                    <ion-col col-4 class="center-left">\n                        <ion-note>{{unit.units_title}}</ion-note>\n                    </ion-col>\n                    <ion-col col-2 class="center-left">\n                        <ion-note class="price">{{currSymbol}}{{unit.base_price}}</ion-note>\n                    </ion-col>\n                    <ion-col col-3 class="center-left align-right">\n                        <ion-note end>\n                            <ion-icon name="remove-circle" (click)="remove(unit.id,unit.minlimit)"></ion-icon>\n                            <span>{{unit.minlimit}}</span>\n                            <ion-icon name="add-circle" (click)="add(unit.id,unit.minlimit,unit.maxlimit)"></ion-icon>\n                        </ion-note>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n        </ion-list>\n    </div>\n    <div *ngIf="!listClothEnable" class="bg">\n        <ion-row class="booking_title_bg">\n            <h3 class="bookin_title">Where would you like us to provide service?</h3>\n        </ion-row>\n        <!-- First slide for postal code -->\n        <div class="main_view_bg">\n            <div style="text-align: center">\n                <img class="booking_img" src="../assets/imgs/laundry_bg.png">\n            </div>\n            <ion-card class="zip-card">\n                <ion-item no-lines class="zip-card">\n                    <ion-label stacked color=\'primary\' class="login_icon">\n                        <ion-icon name="apps"></ion-icon>\n                    </ion-label>\n                    <ion-input type="text" [(ngModel)]="zipCode" placeholder="Zip or Postal Code" name="postal_code"\n                        class="login_text">\n                    </ion-input>\n                </ion-item>\n                <ion-item class="zip-card">\n                    <button type="submit" ion-button color="primary" class="btnsubmit"\n                        (click)="fnCheckPostalCode()">Verify ZIP Code</button>\n                </ion-item>\n            </ion-card>\n        </div>\n    </div>\n\n</ion-content>\n<ion-footer *ngIf="listClothEnable">\n    <div class="fixed-bootom" (click)="orderconfirmed()">\n        <ion-row>\n            <ion-col class="cost">Total {{currSymbol}}{{totalAmt}} </ion-col>\n            <ion-col class="small">{{selectedItem}} Items added</ion-col>\n            <ion-col class="next">Next\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-footer> '/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/selectclothes/selectclothes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servic_servic__["a" /* ServicProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], SelectclothesPage);
    return SelectclothesPage;
}());

//# sourceMappingURL=selectclothes.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderconfirmedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectdate_selectdate__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { SelectaddressPage } from '../selectaddress/selectaddress';


var OrderconfirmedPage = (function () {
    function OrderconfirmedPage(navCtrl, serviceProvider, loadingCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.serviceProvider = serviceProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.totalAmt = "0";
        this.taxAmmount = "";
        this.grandTotal = "";
        this.getCoupon = "";
        this.getCouponBoolean = false;
        this.couponDiscount = "0";
        this.couponDiscountType = "0";
        this.currSymbol = "$";
        this.cart_detail = [];
        this.order_details = [];
        this.selectedServiceName = localStorage.getItem('selectedServiceName');
        this.orderListArray = JSON.parse(localStorage.getItem('OrderList'));
        this.currSymbol = localStorage.getItem('currSymbol');
        this.taxArray = JSON.parse(localStorage.getItem('tax'));
        var total = 0;
        for (var i = 0; i < this.orderListArray.length; i++) {
            total = this.orderListArray[i].base_price * this.orderListArray[i].minlimit;
            this.orderListArray.find(function (v) { return v.id == _this.orderListArray[i].id; }).total = "" + total;
        }
        for (var j = 0; j < this.orderListArray.length; j++) {
            if (this.orderListArray[j].minlimit != "0") {
                this.order_details.push(this.orderListArray[j]);
            }
        }
        this.totalAmt = "" + this.itemTotal().toFixed(2);
        for (var _i = 0, _a = this.orderListArray; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.minlimit != "0") {
                this.cart_detail.push({
                    id: obj.id,
                    service_id: localStorage.getItem('servicesId'),
                    unit_name: obj.units_title,
                    unit_rate: obj.base_price,
                    unit_qty: obj.minlimit
                });
            }
        }
        localStorage.setItem('cart_detail', JSON.stringify(this.cart_detail));
    }
    OrderconfirmedPage.prototype.itemTotal = function () {
        var total = 0;
        for (var i = 0; i < this.orderListArray.length; i++) {
            if (this.orderListArray[i].total) {
                total += Number(this.orderListArray[i].total);
            }
        }
        this.taxAmmount = "" + this.taxCalculation(total);
        return total;
    };
    OrderconfirmedPage.prototype.selectaddress = function () {
        if (this.getCouponBoolean) {
            localStorage.setItem('booleanDiscount', "true");
            localStorage.setItem('total_amt', this.grandTotalCoupon);
        }
        else {
            localStorage.setItem('booleanDiscount', "false");
            localStorage.setItem('total_amt', this.grandTotal);
        }
        localStorage.setItem('sub_total', this.totalAmt);
        localStorage.setItem('discount', this.couponDiscount);
        localStorage.setItem('tax', this.taxAmmount);
        localStorage.setItem('booleanDiscount', "" + this.getCouponBoolean);
        localStorage.setItem('OrderList', JSON.stringify(this.order_details));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__selectdate_selectdate__["a" /* SelectdatePage */]);
    };
    OrderconfirmedPage.prototype.fnGetPromocode = function () {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_4__providers_global__["a" /* global_data */].api_key,
            "coupon_code": this.getCoupon,
            "action": "check_couponcode"
        };
        console.log('Request Json :', this.requestData);
        this.showLoader();
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.loading.dismiss();
            _this.dataResponse = result;
            if (_this.dataResponse.status == "true") {
                _this.couponResponse = _this.dataResponse.response;
                localStorage.setItem('coupon_code', _this.getCoupon);
                // console.log(this.couponResponse);
                _this.grandTotalCoupon = "" + _this.couponCalculator(_this.grandTotal, _this.couponResponse.coupon_value, _this.couponResponse.coupon_type);
                _this.getCouponBoolean = true;
            }
            else {
                _this.presentToast(_this.dataResponse.response);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    OrderconfirmedPage.prototype.closeCoupon = function () {
        this.getCouponBoolean = false;
        // this.grandTotal=""+this.couponCalculator(this.grandTotal,0,"N");
    };
    OrderconfirmedPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    OrderconfirmedPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    OrderconfirmedPage.prototype.taxCalculation = function (total) {
        var taxType = this.taxArray.type;
        var taxValue = this.taxArray.value;
        var payTaxValue = 0;
        if (taxType == "P") {
            payTaxValue = parseFloat(taxValue);
        }
        else if (taxType == "F") {
            payTaxValue = (parseFloat(taxValue) / 100) * total;
        }
        console.log("grandTotal" + total + payTaxValue);
        this.grandTotal = parseFloat(total + payTaxValue).toFixed(2);
        return payTaxValue.toFixed(2);
    };
    OrderconfirmedPage.prototype.couponCalculator = function (total, val, type) {
        console.log('Coupon', total);
        var discount = 0;
        if (type == 'P') {
            discount = total * (100 / val);
            this.couponDiscountType = "%";
            this.couponDiscount = "" + (val).toFixed(2);
        }
        else if (type == 'F') {
            discount = total - (val);
            this.couponDiscountType = "Flat";
            this.couponDiscount = "" + parseFloat(val).toFixed(2);
        }
        else {
            discount = total;
        }
        return (discount).toFixed(2);
    };
    OrderconfirmedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderconfirmed',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/orderconfirmed/orderconfirmed.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title-center">Review Order</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" no-bounce>\n    <div class="all-orders">\n        <p class="order-header">Your selected clothe list</p>\n        <ion-label *ngFor="let item of order_details">\n            <span class="items">{{item.base_price}}</span>\n            <span class="cross">x</span>\n            <span class="items mg-right">{{item.minlimit}}</span>\n            <span class="name">{{item.units_title}}</span>\n            <span class="service">{{selectedServiceName}}</span>\n            <span class="amount">{{currSymbol}}{{item.total}}</span>\n        </ion-label>\n    </div>\n    <div class="fixed-bottom">\n        <ion-row *ngIf="!getCouponBoolean">\n            <ion-col col-8 class="col-item-center">\n                <input type="text" ion-input name="coupon" [(ngModel)]="getCoupon" placeholder="Have promo code ?" />\n            </ion-col>\n            <ion-col class="col-item-center">\n                <button ion-button name="applyPromocode" (click)="fnGetPromocode()">\n                    <ion-icon name="pricetag"></ion-icon>\n                    Apply\n                </button>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="getCouponBoolean">\n            <ion-col col-4 class="col-item-center">\n                <ion-label>Coupon Applied</ion-label>\n            </ion-col>\n            <ion-col col-6>\n                <button ion-button class="ion-item-tag" ion-label color="light">\n                    <ion-label>{{getCoupon}}</ion-label>\n                    <ion-icon name="link"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button class="btn-circle" color="light" (click)="closeCoupon()">\n                    <ion-icon name="close"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n        <div class="price-section">\n            <ion-label>Sub Total<span>{{currSymbol}}{{totalAmt}}</span></ion-label>\n            <ion-label>Total Tax Amount<span>{{currSymbol}}{{taxAmmount}}</span></ion-label>\n            <ion-label *ngIf="getCouponBoolean">Coupon\n                Discount({{couponDiscountType}})<span>{{currSymbol}}{{couponDiscount}}</span></ion-label>\n            <ion-label *ngIf="!getCouponBoolean" class="total-amount">Payble\n                Amount<span>{{currSymbol}}{{grandTotal}}</span></ion-label>\n            <ion-label *ngIf="getCouponBoolean" class="total-amount">Payble\n                Amount<span>{{currSymbol}}{{grandTotalCoupon}}</span></ion-label>\n        </div>\n        <p (click)="selectaddress()" text-center class="btn">Confirm Order\n            <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n        </p>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/orderconfirmed/orderconfirmed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_servic_servic__["a" /* ServicProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], OrderconfirmedPage);
    return OrderconfirmedPage;
}());

//# sourceMappingURL=orderconfirmed.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orderslip_orderslip__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentPage = (function () {
    function PaymentPage(modalCtrl, loadingCtrl, toastCtrl, serviceProvider, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.payment = "strip";
        this.cardNumber = "";
        this.cardMonth = "";
        this.cardYear = "";
        this.cardCvv = "";
        this.trasactionId = "";
        this.first_name = localStorage.getItem('first_name');
        this.last_name = localStorage.getItem('last_name');
        this.email = localStorage.getItem('user_email');
        this.phone = localStorage.getItem('phone');
        this.password = localStorage.getItem('user_pwd');
        this.zipcode = localStorage.getItem('zip');
        this.address = localStorage.getItem('address');
        this.city = localStorage.getItem('city');
        this.state = localStorage.getItem('state');
        this.date = new Date().toISOString().substring(0, 10);
        this.year = [];
        var d = this.date.substring(0, 4);
        for (var i = 0; i < 10; i++) {
            this.year.push(parseInt(d) + i);
        }
        console.log(this.year);
        this.month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    }
    PaymentPage.prototype.orderslip = function () {
        var _this = this;
        if (this.payment == "strip") {
            this.requestData = {
                "api_key": __WEBPACK_IMPORTED_MODULE_3__providers_global__["a" /* global_data */].api_key,
                "full_name": localStorage.getItem('user_name'),
                "email": localStorage.getItem('user_email'),
                "card_number": this.cardNumber,
                "card_month": this.cardMonth,
                "card_year": this.cardYear,
                "card_cvv": this.cardCvv,
                "amount": localStorage.getItem('total_amt'),
                "action": "stripe_payment_method"
            };
            console.log('Request arshad', this.requestData);
            this.showLoader();
            this.serviceProvider.servicePost(this.requestData).then(function (result) {
                _this.loading.dismiss();
                _this.dataResponse = result;
                if (_this.dataResponse.status == "true") {
                    _this.trasactionId = _this.dataResponse.response;
                    localStorage.setItem('payment_type', "Strip");
                    localStorage.setItem('transaction_id', _this.trasactionId);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__orderslip_orderslip__["a" /* OrderslipPage */]);
                }
                else {
                    _this.presentToast(_this.dataResponse.response);
                }
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast("Server down...");
            });
        }
        else {
            localStorage.setItem('payment_type', "Pay Locally");
            localStorage.setItem('transaction_id', "");
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__orderslip_orderslip__["a" /* OrderslipPage */]);
            modal.present();
        }
    };
    PaymentPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    PaymentPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PaymentPage.prototype.mask = function (event) {
        var _this = this;
        console.log("maskEvent func");
        setTimeout(function () {
            var inputTxt = event.srcElement.value;
            inputTxt = inputTxt ? inputTxt.split(" ").join("") : "";
            inputTxt = inputTxt.length > 16 ? inputTxt.substring(0, 16) : inputTxt;
            _this.cardNumber = _this.maskString(inputTxt);
        }, 500);
    };
    PaymentPage.prototype.maskString = function (inputTxt) {
        inputTxt = inputTxt.replace(/\D/g, "");
        inputTxt = inputTxt.replace(/(\d{4})(\d)/, "$1  $2");
        inputTxt = inputTxt.replace(/(\d{4})(\d)/, "$1  $2");
        inputTxt = inputTxt.replace(/(\d{4})(\d)/, "$1  $2");
        inputTxt = inputTxt.replace(/(\d{4})(\d)/, "$1  $2");
        return inputTxt;
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/payment/payment.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title-center">Payment</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" no-bounce>\n    <p padding-left padding-right class="heading">Select Payment Method</p>\n    <ion-toolbar no-border-top class="select-tab">\n        <ion-segment [(ngModel)]="payment">\n            <ion-segment-button value="strip">\n                <span class="debit"></span> Stripe payment\n            </ion-segment-button>\n\n            <ion-segment-button value="cod">\n                <span class="cod"></span> Cash on Delivery\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n\n    <div [ngSwitch]="payment" class="address-list">\n        <ion-list *ngSwitchCase="\'strip\'" no-lines class="home-address">\n            <div class="input-address" padding>\n                <p class="heading" no-margin padding-bottom>Enter Card Details</p>\n                <ion-list no-line>\n                    <ion-item>\n                        <ion-input (keypress)="mask($event)" [(ngModel)]="cardNumber" type="Card" placeholder="Card Number"></ion-input>\n                    </ion-item>\n                    <ion-row no-padding>\n                        <ion-col no-padding>\n                            <ion-item>\n                                <!-- <ion-input [(ngModel)]="cardMonth" type="Number" placeholder="Month"></ion-input> -->\n                                <ion-label>Month</ion-label>\n                                <ion-select placeholder="" [(ngModel)]="cardMonth">\n                                    <ion-option *ngFor="let item of month" [value]="item">{{item}}</ion-option>\n                                </ion-select>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col no-padding>\n                            <ion-item>\n                                <!-- <ion-input [(ngModel)]="cardYear" type="Number" placeholder="Year"></ion-input> -->\n                                <ion-label>Year</ion-label>\n                                <ion-select placeholder="" [(ngModel)]="cardYear">\n                                    <ion-option *ngFor="let item of year" [value]="item">{{item}}</ion-option>\n                                </ion-select>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-item>\n                        <ion-input type="text" maxlength="3" onkeypress="return event.charCode >= 48 && event.charCode <= 57" [(ngModel)]="cardCvv" placeholder="CVV"></ion-input>\n                    </ion-item>\n                </ion-list>\n            </div>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'cod\'" no-lines class="other-address">\n            <div class="input-address" padding>\n                <p class="heading" no-margin padding-bottom>Registered Address Details</p>\n                <ion-list no-line>\n\n                    <ion-item>\n                        <ion-input disabled="true" [(ngModel)]="address" type="text"\n                            placeholder="Street Address, Landmark, etc."></ion-input>\n                    </ion-item>\n                    <ion-row no-padding>\n                        <ion-col no-padding>\n                            <ion-item>\n                                <ion-input disabled="true" [(ngModel)]="zipcode" type="text" placeholder="Zip Code">\n                                </ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col no-padding>\n                            <ion-item>\n                                <ion-input disabled="true" [(ngModel)]="city" type="text" placeholder="City">\n                                </ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-item class="check-item">\n\n                        <ion-label>Can\'t update Address</ion-label>\n                    </ion-item>\n                </ion-list>\n            </div>\n        </ion-list>\n    </div>\n\n</ion-content>\n<ion-footer>\n    <div class="fixed-bootom" (click)="orderslip()">\n        <ion-row>\n            <ion-col class="cost" col-7>Amount Payable $75.00</ion-col>\n            <ion-col class="next" col-5>Confirmed\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-footer>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/payment/payment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servic_servic__["a" /* ServicProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderslipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_global__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderslipPage = (function () {
    function OrderslipPage(appCtrl, viewCtrl, datePipe, loadingCtrl, toastCtrl, serviceProvider, navCtrl) {
        var _this = this;
        this.appCtrl = appCtrl;
        this.viewCtrl = viewCtrl;
        this.datePipe = datePipe;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.userRegister = true;
        this.first_name = localStorage.getItem('first_name');
        this.last_name = localStorage.getItem('last_name');
        this.email = localStorage.getItem('user_email');
        this.phone = localStorage.getItem('phone');
        this.password = localStorage.getItem('user_pwd');
        this.zipcode = localStorage.getItem('zip');
        this.address = localStorage.getItem('address');
        this.city = localStorage.getItem('city');
        this.state = localStorage.getItem('state');
        this.date = new Date().toISOString().substring(0, 10);
        this.orderId = "";
        this.pickDate = localStorage.getItem('pick_date');
        this.pickTime = localStorage.getItem('pick_time');
        this.deliverDate = localStorage.getItem('deliver_date');
        this.deliverTime = localStorage.getItem('deliver_time');
        this.sub_total = localStorage.getItem('sub_total');
        this.discount = localStorage.getItem('discount');
        this.tax = localStorage.getItem('tax');
        this.grandTotal = localStorage.getItem('total_amt');
        this.booleanDiscount = localStorage.getItem('booleanDiscount');
        this.selectedServiceName = "";
        this.currSymbol = "$";
        this.pickDate = this.datePipe.transform(this.pickDate, 'MMM dd, yyyy');
        this.deliverDate = this.datePipe.transform(this.deliverDate, 'MMM dd, yyyy');
        this.selectedServiceName = localStorage.getItem('selectedServiceName');
        this.orderListArray = JSON.parse(localStorage.getItem('OrderList'));
        this.currSymbol = localStorage.getItem('currSymbol');
        var total = 0;
        for (var i = 0; i < this.orderListArray.length; i++) {
            total = this.orderListArray[i].base_price * this.orderListArray[i].minlimit;
            this.orderListArray.find(function (v) { return v.id == _this.orderListArray[i].id; }).total = "" + total;
        }
        this.fnConfirmBooking();
    }
    ;
    OrderslipPage.prototype.rate = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
    };
    OrderslipPage.prototype.fnConfirmBooking = function () {
        var _this = this;
        this.responseBooking = {
            "api_key": __WEBPACK_IMPORTED_MODULE_1__providers_global__["a" /* global_data */].api_key,
            "action": "book_appointment",
            "first_name": this.first_name,
            "last_name": this.last_name,
            "email": this.email,
            "phone": this.phone,
            "password": this.password,
            "zipcode": this.zipcode,
            "address": this.address,
            "city": this.city,
            "state": this.state,
            "staff_id": "1",
            "booking_pickup_date_time_start": localStorage.getItem('booking_pickup_date_time_start'),
            "booking_pickup_date_time_end": localStorage.getItem('booking_pickup_date_time_end'),
            "booking_delivery_date_time_start": localStorage.getItem('booking_delivery_date_time_start'),
            "booking_delivery_date_time_end": localStorage.getItem('booking_delivery_date_time_end'),
            "user_type": "existing",
            "service_id": localStorage.getItem('servicesId'),
            "coupon_code": localStorage.getItem('coupon_code'),
            "payment_method": localStorage.getItem('payment_type'),
            "sub_total": localStorage.getItem('sub_total'),
            "discount": localStorage.getItem('discount'),
            "tax": localStorage.getItem('tax'),
            "net_amount": localStorage.getItem('total_amt'),
            "partial_amount": "0",
            "transaction_id": localStorage.getItem('transaction_id'),
            "cart_detail": JSON.parse(localStorage.getItem('cart_detail'))
        };
        console.log('responseBooking', this.responseBooking);
        this.showLoader();
        this.serviceProvider.servicePost(this.responseBooking).then(function (result) {
            _this.loading.dismiss();
            _this.dataResponse = result;
            if (_this.dataResponse.status == "true") {
                _this.orderId = _this.dataResponse.order_id;
            }
            else {
                _this.userRegister = false;
                _this.presentToast(_this.dataResponse.response);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    OrderslipPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    OrderslipPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    OrderslipPage.prototype.fnCloseModel = function () {
        this.viewCtrl.dismiss();
    };
    OrderslipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderslip',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/orderslip/orderslip.html"*/'<ion-header>\n    <ion-navbar>\n\n        <ion-title>&nbsp;</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" no-bounce overflow-scroll="true">\n    <div *ngIf="!userRegister" class="user-not">\n        Email address does not register. please register your email address. or login again!\n    </div>\n    <div *ngIf="userRegister" class="order-head">\n        <p class="header">Order No. {{orderId}}<small>\n                <ion-datetime disabled display-format="MMMM YYYY" [(ngModel)]="date"></ion-datetime>\n            </small></p>\n        <ion-row>\n            <ion-col style="max-width: 110px;"><img src="assets/imgs/clock.png"></ion-col>\n            <ion-col>\n                <p>Order Status<strong>Order Pending</strong></p>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div *ngIf="userRegister" class="order-address">\n        <ion-row>\n            <ion-col col-6>Pick up<strong>{{pickDate}}</strong><span>{{pickTime}}</span></ion-col>\n            <ion-col col-6>Delivery<strong>{{deliverDate}}</strong><span>{{deliverTime}}</span></ion-col>\n\n        </ion-row>\n    </div>\n    <div *ngIf="userRegister" class="all-orders">\n        <p class="order-header">Your cloth list</p>\n        <ion-label *ngFor="let item of orderListArray">\n            <span class="items">{{item.base_price}}</span>\n            <span class="cross">x</span>\n            <span class="items mg-right">{{item.minlimit}}</span>\n            <span class="name">{{item.units_title}}</span>\n            <span class="service">{{selectedServiceName}}</span>\n            <span class="amount">{{currSymbol}}{{item.total}}</span>\n        </ion-label>\n        <div class="price-section">\n            <ion-label>Sub Total<span>{{currSymbol}}{{sub_total}}</span></ion-label>\n            <ion-label>Tax<span>{{currSymbol}}{{tax}}</span></ion-label>\n            <ion-label *ngIf="booleanDiscount==\'true\'">Coupon Discount<span>{{currSymbol}}{{discount}}</span>\n            </ion-label>\n            <ion-label class="total-amount">Payble Amount<span>{{currSymbol}}{{grandTotal}}</span></ion-label>\n        </div>\n    </div>\n\n</ion-content>\n<ion-footer>\n    <button ion-button full (click)="rate()" no-margin style="height: 50px">Finish</button>\n</ion-footer>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/orderslip/orderslip.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_servic_servic__["a" /* ServicProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]])
    ], OrderslipPage);
    return OrderslipPage;
}());

//# sourceMappingURL=orderslip.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveAppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_booking_details_booking_details__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActiveAppointmentPage = (function () {
    function ActiveAppointmentPage(modalCtrl, alertCtrl, navCtrl, loadingCtrl, toastCtrl, serviceProvider) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.allBooking = [];
        this.activBooking = [];
        this.totalActiveBooking = "0";
        this.order_id = "0";
        this.currSymbol = "$";
    }
    ActiveAppointmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActiveAppointmentPage');
        this.currSymbol = localStorage.getItem('currSymbol');
        console.log('currSymbol', this.currSymbol);
    };
    ActiveAppointmentPage.prototype.ionViewDidEnter = function () {
        this.fnGetActiveBooking();
    };
    ActiveAppointmentPage.prototype.fnGetActiveBooking = function () {
        var _this = this;
        this.allBooking = [];
        this.activBooking = [];
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_3__providers_global__["a" /* global_data */].api_key,
            "user_id": localStorage.getItem("user_id"),
            "page": "1",
            "user_type": localStorage.getItem("user_type"),
            "action": "get_user_appointments_list"
        };
        this.showLoader();
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.loading.dismiss();
            _this.allBookingResponse = result;
            if (_this.allBookingResponse.status == "true") {
                _this.allBooking = _this.allBookingResponse.response;
                for (var i = 0; i < _this.allBooking.length; i++) {
                    if (_this.allBooking[i].booking_status == 'A') {
                        _this.activBooking.push(_this.allBooking[i]);
                    }
                }
                _this.totalActiveBooking = "" + _this.activBooking.length;
            }
            //  else {
            //   this.presentToast(this.allBookingResponse.response);
            // }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    ActiveAppointmentPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    ActiveAppointmentPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ActiveAppointmentPage.prototype.doCancel = function (order_id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Cancel Appointment',
            message: 'Enter a Reason for this Canceling Appointment',
            inputs: [
                {
                    name: 'reason',
                    placeholder: 'Enter Reason'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirm',
                    handler: function (data) {
                        console.log('Confirm clicked', data.reason);
                        _this.fnCancelAppointment(order_id, data.reason);
                    }
                }
            ]
        });
        alert.present();
    };
    ActiveAppointmentPage.prototype.fnCancelAppointment = function (order_id, data) {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_3__providers_global__["a" /* global_data */].api_key,
            "order_id": order_id,
            "cancel_reason": data,
            "gc_event_id": "you will get this id from my appointment api",
            "gc_staff_event_id": "you will get this id from my appointment api",
            "pid": "provider id here if any of staff assigned to this appointment",
            "action": "cancel_appointment"
        };
        console.log(this.requestData);
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.cancelResponse = result;
            if (_this.cancelResponse.status == "true") {
                _this.presentToast(_this.cancelResponse.response);
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            }
            else {
                _this.presentToast(_this.cancelResponse.response);
            }
            console.log('Response cancel', _this.cancelResponse.response);
        }, function (err) {
            _this.presentToast("Server down...");
        });
    };
    ActiveAppointmentPage.prototype.fnGetDetails = function (orderId) {
        this.order_id = orderId;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_booking_details_booking_details__["a" /* BookingDetailsPage */], { order_id: this.order_id });
        modal.present();
    };
    ActiveAppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-active-appointment',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/active-appointment/active-appointment.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title text-center>Active Appointment</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content class="bg-light" no-bounce overflow-scroll="true">\n    <div text-center class="order-list">\n        <ion-label *ngIf="totalActiveBooking==\'0\'">Data not found</ion-label>\n        <ion-list no-lines>\n            <div *ngFor="let item of activBooking;" class="padding-top">\n                <div *ngIf="item.booking_status==\'A\'">\n                    <div class="order-header">\n                        <ion-row>\n                            <ion-col col-4 text-left>\n                                <small>Order No: {{item.order_id}}</small>\n                            </ion-col>\n                            <ion-col col-6 text-right>\n                                <small>{{item.appointment_date}}</small>\n                            </ion-col>\n                            <ion-col col-2 text-right>\n                                <ion-icon (click)="doCancel(item.order_id)"\n                                    style="font-size: 20px;color: #187d90;margin-right: 5px;" name="close">\n                                </ion-icon>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                    <ion-item (click)="fnGetDetails(item.order_id)">\n                        <ion-row style="align-items: center">\n                            <ion-col col-4>\n                                <ion-avatar item-start>\n                                    <img src="assets/imgs/confirmed.png">\n                                </ion-avatar>\n                            </ion-col>\n                            <ion-col col-8>\n                                <h2>{{item.title}}</h2>\n                                <h3 class="color-warning">Pending</h3>\n                                <ion-row>\n                                    <ion-col col-5>\n                                        <h3 text-left>{{item.appointment_time}}</h3>\n                                    </ion-col>\n                                    <ion-col col-7>\n                                        <h2 text-right>{{currSymbol}}{{item.total_payment}}</h2>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-col>\n                        </ion-row>\n                    </ion-item>\n                </div>\n            </div>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/active-appointment/active-appointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servic_servic__["a" /* ServicProvider */]])
    ], ActiveAppointmentPage);
    return ActiveAppointmentPage;
}());

//# sourceMappingURL=active-appointment.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp_otp__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PasswordPage = (function () {
    function PasswordPage(navCtrl, loadingCtrl, toastCtrl, serviceProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.email = "";
    }
    PasswordPage.prototype.otp = function () {
        var _this = this;
        localStorage.setItem('user_email', this.email);
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_4__providers_global__["a" /* global_data */].api_key,
            "email": this.email,
            "action": "otp"
        };
        if (this.requestData.email != "") {
            this.showLoader();
            console.log('Resquest Object', this.requestData);
            this.serviceProvider.servicePost(this.requestData).then(function (result) {
                _this.loading.dismiss();
                _this.dataResponse = result;
                console.log('OTP', _this.dataResponse);
                if (_this.dataResponse.status == "true") {
                    _this.presentToast("OTP sent to email");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__otp_otp__["a" /* OtpPage */]);
                }
                else {
                    _this.presentToast("Incorrect email or not exist!");
                }
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast("Server down...");
            });
        }
        else {
            this.presentToast("Enter email");
        }
    };
    PasswordPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    PasswordPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/password/password.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title-center">Forgot Password</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <p text-center>Let us know your registered email address<br>and we\'ll send you password reset<br>instruction</p>\n    <ion-list no-lines class="form">\n        <ion-item>\n            <ion-icon name="md-mail" item-start></ion-icon>\n            <ion-label floating>Enter Email Address</ion-label>\n            <ion-input [(ngModel)]="email" type="email"></ion-input>\n        </ion-item>\n    </ion-list>\n    <button ion-button block (click)="otp()">Submit</button> \n</ion-content>\n '/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/password/password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_servic_servic__["a" /* ServicProvider */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password_change_password__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { SigninPage } from '../signin/signin';



var OtpPage = (function () {
    function OtpPage(navCtrl, loadingCtrl, toastCtrl, serviceProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.email = "";
        this.verifyOtp = "";
        this.email = localStorage.getItem('user_email');
    }
    OtpPage.prototype.verificationOtp = function () {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_4__providers_global__["a" /* global_data */].api_key,
            "email": this.email,
            "otp": this.verifyOtp,
            "action": "confirm_otp_email"
        };
        console.log(this.requestData);
        if (this.verifyOtp != "") {
            this.showLoader();
            console.log('Resquest Object', this.requestData);
            this.serviceProvider.servicePost(this.requestData).then(function (result) {
                _this.loading.dismiss();
                _this.dataResponse = result;
                if (_this.dataResponse.status == "true") {
                    _this.presentToast(_this.dataResponse.response);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__change_password_change_password__["a" /* ChangePasswordPage */]);
                }
                else {
                    _this.presentToast(_this.dataResponse.response);
                }
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast("Server down...");
            });
        }
        else {
            this.presentToast("Enter otp!");
        }
    };
    OtpPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    OtpPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otp',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/otp/otp.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title-center">Enter OTP</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <p text-center>Let us know One time password (OTP)<br>we\'ll send you OTP on your registered<br>email address</p>\n    <ion-list no-lines class="form">\n        <ion-item>\n            <ion-input [(ngModel)]="verifyOtp" type="number" placeholder="Enter One Time Password" text-center>\n            </ion-input>\n        </ion-item>\n    </ion-list>\n    <button ion-button block (click)="verificationOtp()">Submit</button>\n</ion-content>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/otp/otp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servic_servic__["a" /* ServicProvider */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { OtpPage } from '../otp/otp';

var SignupPage = (function () {
    function SignupPage(loadingCtrl, toastCtrl, navCtrl, servicProvider) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.servicProvider = servicProvider;
        this.register = {
            fname: "", lname: "", email: "", password: "", number: "", zip: "", address: "", city: "", state: ""
        };
    }
    SignupPage.prototype.otp = function () {
        var _this = this;
        if (this.register.fname != "" && this.register.lname != "" && this.register.email != "" && this.register.password != "" && this.register.number != "" && this.register.address != "" && this.register.city != "" && this.register.state != "" && this.register.zip != "") {
            this.requestObject = {
                "api_key": __WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* global_data */].api_key,
                "email": this.register.email,
                "password": this.register.password,
                "first_name": this.register.fname,
                "last_name": this.register.lname,
                "phone": this.register.number,
                "address": this.register.address,
                "city": this.register.city,
                "state": this.register.state,
                "zipcode": this.register.zip,
                "action": "add_customer"
            };
            console.log('Request_object', this.requestObject);
            this.showLoader();
            this.servicProvider.servicePost(this.requestObject).then(function (result) {
                _this.dataResponse = result;
                _this.loading.dismiss();
                if (_this.dataResponse.status == "true") {
                    console.log('response', _this.dataResponse);
                    _this.presentToast("Account created successfully");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
                }
                else {
                    _this.presentToast("Email already exists");
                }
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast("Server down...");
            });
        }
        else {
            this.presentToast("Please fillup all fields");
        }
    };
    SignupPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    SignupPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/signup/signup.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title-center">Register now</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding no-bounce>\n    <!-- <ion-icon name="md-camera" class="cam-icon"></ion-icon>\n    <p text-center>Add Photo</p> -->\n    <ion-col class="center-left">\n        <div class="text-center">\n            <img src="assets/imgs/user_1.png" width="80" height="80">\n        </div>\n    </ion-col>\n    <ion-list no-lines class="form">\n        <ion-item>\n            <ion-icon name="md-person" item-start></ion-icon>\n            <ion-label floating>Enter First Name</ion-label>\n            <ion-input type="text"  [(ngModel)]="register.fname" ></ion-input>\n        </ion-item>\n        <ion-item>\n                <ion-icon name="md-person" item-start></ion-icon>\n                <ion-label floating>Enter Last Name</ion-label>\n                <ion-input type="text"  [(ngModel)]="register.lname"></ion-input>\n            </ion-item>\n        <ion-item>\n            <ion-icon name="md-mail" item-start></ion-icon>\n            <ion-label floating>Email Address</ion-label>\n            <ion-input type="email"  [(ngModel)]="register.email"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="md-phone-portrait" item-start></ion-icon>\n            <ion-label floating>Phone Number</ion-label>\n            <ion-input type="tel"  [(ngModel)]="register.number"></ion-input>\n        </ion-item>\n        <ion-item>\n                <ion-icon md="md-apps" item-start></ion-icon>\n                <ion-label floating>Zip Code</ion-label>\n                <ion-input type="number"  [(ngModel)]="register.zip"></ion-input>\n        </ion-item>\n        <ion-item>\n                <ion-icon md="md-pin" item-start></ion-icon>\n                <ion-label floating>Building/Society Name & Number, etc.</ion-label> \n                <ion-input type="text"  [(ngModel)]="register.address"></ion-input>\n        </ion-item>\n        <ion-item>\n                <ion-icon md="md-pin" item-start></ion-icon>\n                <ion-label floating>City</ion-label>\n                <ion-input type="text"  [(ngModel)]="register.city"></ion-input>\n        </ion-item>\n        <ion-item>\n                <ion-icon md="md-pin" item-start></ion-icon>\n                <ion-label floating>State</ion-label>\n                <ion-input type="text"  [(ngModel)]="register.state"></ion-input>\n        </ion-item>\n        <ion-item>\n                <ion-icon name="md-lock" item-start></ion-icon>\n                <ion-label floating>Password</ion-label>\n                <ion-input type="password"  [(ngModel)]="register.password"></ion-input>\n            </ion-item>\n    </ion-list>\n    <button ion-button block (click)="otp()">Register Now</button>\n</ion-content>\n'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servic_servic__["a" /* ServicProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(246);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_account__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_addaddress_addaddress__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_myorders_myorders__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notification_notification__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_offers_offers__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_orderconfirmed_orderconfirmed__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_orderslip_orderslip__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_otp_otp__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_password_password__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_payment_payment__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_rate_rate__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_selectaddress_selectaddress__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_selectclothes_selectclothes__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_selectdate_selectdate__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_signin_signin__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_tnc_tnc__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_global_global__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_change_password_change_password__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_active_appointment_active_appointment__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_booking_details_booking_details__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_order_staff_order_staff__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_background_mode__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_addaddress_addaddress__["a" /* AddaddressPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_myorders_myorders__["a" /* MyordersPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_orderconfirmed_orderconfirmed__["a" /* OrderconfirmedPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_orderslip_orderslip__["a" /* OrderslipPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_rate_rate__["a" /* RatePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_selectaddress_selectaddress__["a" /* SelectaddressPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_selectclothes_selectclothes__["a" /* SelectclothesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_selectdate_selectdate__["a" /* SelectdatePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_tnc_tnc__["a" /* TncPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_active_appointment_active_appointment__["a" /* ActiveAppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_booking_details_booking_details__["a" /* BookingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_order_staff_order_staff__["a" /* OrderStaffPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_addaddress_addaddress__["a" /* AddaddressPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_myorders_myorders__["a" /* MyordersPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_orderconfirmed_orderconfirmed__["a" /* OrderconfirmedPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_orderslip_orderslip__["a" /* OrderslipPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_rate_rate__["a" /* RatePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_selectaddress_selectaddress__["a" /* SelectaddressPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_selectclothes_selectclothes__["a" /* SelectclothesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_selectdate_selectdate__["a" /* SelectdatePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_tnc_tnc__["a" /* TncPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_active_appointment_active_appointment__["a" /* ActiveAppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_booking_details_booking_details__["a" /* BookingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_order_staff_order_staff__["a" /* OrderStaffPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_29__providers_servic_servic__["a" /* ServicProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_global_global__["a" /* GlobalProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_order_staff_order_staff__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_background_mode__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var MyApp = (function () {
    function MyApp(platform, statusBar, backgroundMode, loadingCtrl, splashScreen) {
        this.backgroundMode = backgroundMode;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        this.email = localStorage.getItem('user_email');
        this.name = localStorage.getItem('user_name');
        this.type = localStorage.getItem('user_type');
        this.backgroundMode.enable();
        if (localStorage.getItem('user_name')) {
            if (localStorage.getItem('user_type') == 'staff') {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_order_staff_order_staff__["a" /* OrderStaffPage */];
            }
            else {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
            }
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        }
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OffersPage = (function () {
    function OffersPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [
            {
                title: "New User? First Wash Free!!",
                detail: "Oh! You're new User? Order & get your first washing up to 3 Cloths are free. You need to register",
                code: "NEWFREE3",
            },
            {
                title: "Upto 20% Discout on Credit Card Payment",
                detail: "Your order No. 123456345 is confirmed now. pick up guy will reach on selected date & time.",
                code: "CREDIT20",
            },
            {
                title: "Summer Offier: Pay for Wash & get Iorned Free",
                detail: "Your order No. 123456345 is confirmed now. pick up guy will reach on selected date & time.",
                code: "FREEIRON",
            }
        ];
    }
    OffersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offers',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/offers/offers.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Offers</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-list no-lines>\n        <ion-item *ngFor="let item of items">\n            <h2 [innerHTML]="item.title">Cher</h2>\n            <p><span [innerHTML]="item.detail"></span><span class="read">Read more</span></p>\n            <div class="copy"><span [innerHTML]="item.code"></span>Tap to copy</div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/offers/offers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], OffersPage);
    return OffersPage;
}());

//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RatePage = (function () {
    function RatePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RatePage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    RatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rate',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/rate/rate.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Rate Order</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content> \n    <div class="status" padding text-center>\n        <img src="assets/imgs/delivered.png">\n        <p>Hey Sam,<br>Your order has been<br> Delivered Successfully</p>\n    </div>\n    <div class="rate" padding text-center>\n        <p>Rate your last order experiece</p>\n        <div class="stars">\n            <ion-icon name="md-star"></ion-icon>\n            <ion-icon name="md-star"></ion-icon>\n            <ion-icon name="md-star"></ion-icon>\n            <ion-icon name="md-star-half"></ion-icon>\n            <ion-icon name="md-star-outline"></ion-icon>\n        </div>\n        <ion-input type="text" placeholder="Share your experiece in words"></ion-input>\n        <button ion-button full style="height: 50px" (click)="tabs()">Submit Review</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/rate/rate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], RatePage);
    return RatePage;
}());

//# sourceMappingURL=rate.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectaddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectdate_selectdate__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectaddressPage = (function () {
    function SelectaddressPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.address = "home";
        this.pltNum = "0";
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        console.log("User Information", this.userInfo);
    }
    SelectaddressPage.prototype.selectdate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__selectdate_selectdate__["a" /* SelectdatePage */]);
    };
    SelectaddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selectaddress',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/selectaddress/selectaddress.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title-center">Select Address</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" no-bounce>\n    <p padding-left padding-right class="heading">Select Pick up & Delivery Address</p>\n    <ion-toolbar no-border-top class="select-tab">\n        <ion-segment [(ngModel)]="address">\n            <ion-segment-button value="home">\n                <span class="home-img"></span> Home\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n\n    <div [ngSwitch]="address" class="address-list">\n        <ion-list *ngSwitchCase="\'home\'" no-lines class="home-address">\n            <div class="input-address" padding>\n                <p class="heading" no-margin padding-bottom>Enter Address Details</p>\n                <ion-list no-line>\n                    <ion-item>\n                        <ion-input type="text" [ngModel]="pltNum" placeholder="Building/Society Name & Number">\n                        </ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input type="text" [ngModel]="userInfo.address"\n                            placeholder="Street Address, Landmark, etc."></ion-input>\n                    </ion-item>\n                    <ion-row no-padding>\n                        <ion-col no-padding>\n                            <ion-item>\n                                <ion-input type="text" [ngModel]="userInfo.zip" placeholder="Zip Code"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col no-padding>\n                            <ion-item>\n                                <ion-input type="text" [ngModel]="userInfo.city" placeholder="City"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-item>\n                        <ion-input type="text" [ngModel]="userInfo.phone" placeholder="Enter phone number"></ion-input>\n                    </ion-item>\n                </ion-list>\n            </div>\n        </ion-list>\n    </div>\n\n    <div class="fixed-bootom" (click)="selectdate()">\n        <ion-row>\n            <ion-col class="cost" col-8>Amount Payable $75.00</ion-col>\n            <ion-col class="next">Next\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/selectaddress/selectaddress.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], SelectaddressPage);
    return SelectaddressPage;
}());

//# sourceMappingURL=selectaddress.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalProvider = (function () {
    function GlobalProvider(http) {
        this.http = http;
        console.log('Hello GlobalProvider Provider');
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__password_password__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_order_staff_order_staff__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SigninPage = (function () {
    function SigninPage(navCtrl, loadingCtrl, toastCtrl, serviceProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.requestData = { "email": "", "password": "" };
        this.email = "";
        this.password = "";
    }
    SigninPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    SigninPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SigninPage.prototype.tab = function () {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_7__providers_global__["a" /* global_data */].api_key,
            "email": this.email,
            "password": this.password,
            "action": "check_login"
        };
        if (this.requestData.email != "" && this.requestData.password != "") {
            this.showLoader();
            this.serviceProvider.servicePost(this.requestData).then(function (result) {
                _this.loading.dismiss();
                _this.dataResponse = result;
                if (_this.dataResponse.status == "true") {
                    localStorage.setItem('userInfo', JSON.stringify(_this.dataResponse.response));
                    localStorage.setItem("user_id", _this.dataResponse.response.id);
                    localStorage.setItem("first_name", _this.dataResponse.response.first_name);
                    localStorage.setItem("last_name", _this.dataResponse.response.last_name);
                    localStorage.setItem("user_name", _this.dataResponse.response.fullname);
                    localStorage.setItem("user_email", _this.dataResponse.response.user_email);
                    localStorage.setItem("phone", _this.dataResponse.response.phone);
                    localStorage.setItem("zip", _this.dataResponse.response.zip);
                    localStorage.setItem("address", _this.dataResponse.response.address);
                    localStorage.setItem("city", _this.dataResponse.response.city);
                    localStorage.setItem("state", _this.dataResponse.response.state);
                    localStorage.setItem("user_type", _this.dataResponse.response.usertype);
                    localStorage.setItem("user_img", _this.dataResponse.response.image);
                    localStorage.setItem("user_pwd", _this.dataResponse.response.user_pwd);
                    if (_this.dataResponse.response.usertype == 'staff') {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_order_staff_order_staff__["a" /* OrderStaffPage */]);
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                    }
                }
                else {
                    _this.presentToast("Incorrect email and password");
                }
                console.log(_this.dataResponse);
                console.log('User info', JSON.parse(localStorage.getItem('userInfo')));
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err.message);
            });
        }
        else {
            this.presentToast("Enter email and password");
        }
    };
    SigninPage.prototype.fnPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__password_password__["a" /* PasswordPage */]);
    };
    SigninPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/signin/signin.html"*/'<ion-content padding no-bounce>\n    <img src="assets/imgs/logo3.png" class="logo">\n    <h3 text-center>Sign in now</h3>\n    <ion-list no-lines class="form">\n        <ion-item>\n            <ion-icon name="md-mail" item-start></ion-icon>\n            <ion-label floating>Email</ion-label>\n            <ion-input [(ngModel)]="email" type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="md-lock" item-start></ion-icon>\n            <ion-label floating>Password</ion-label>\n            <ion-input [(ngModel)]="password"  type="password"></ion-input>\n            <h5 item-end (click)="fnPassword()">Forgot ?</h5> \n        </ion-item>\n    </ion-list>\n    <button ion-button block (click)="tab()">Sign in</button>\n    <p text-center>Oh! Not Registered yet?</p>\n    <button ion-button outline block (click)="signup()">Register Now</button>\n</ion-content>\n '/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/signin/signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_servic_servic__["a" /* ServicProvider */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_account__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__active_appointment_active_appointment__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { OffersPage } from '../offers/offers';



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__notification_notification__["a" /* NotificationPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__active_appointment_active_appointment__["a" /* ActiveAppointmentPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__account_account__["a" /* AccountPage */];
        console.log('arshad Tabs');
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="" tabIcon="home" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="list" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="" tabIcon="list-box" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="" tabIcon="person" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servic_servic__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookingDetailsPage = (function () {
    function BookingDetailsPage(navParams, viewCtrl, alertCtrl, navCtrl, loadingCtrl, toastCtrl, serviceProvider) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.bookingInfo = [];
        this.orderId = "0";
        this.unitList = [];
        this.unit = "0";
        this.unit2 = "0";
        this.unitList2 = [];
        this.currSymbol = "$";
        this.orderId = this.navParams.get('order_id');
        this.currSymbol = localStorage.getItem('currSymbol');
        console.log('currSymbol', this.currSymbol);
    }
    BookingDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookingDetailsPage');
        this.fnGetBookingDetails();
    };
    BookingDetailsPage.prototype.fnGetBookingDetails = function () {
        var _this = this;
        this.requestData = {
            "api_key": __WEBPACK_IMPORTED_MODULE_3__providers_global__["a" /* global_data */].api_key,
            "order_id": this.orderId,
            "action": "get_appointment_detail"
        };
        console.log('Request data', this.requestData);
        this.showLoader();
        this.serviceProvider.servicePost(this.requestData).then(function (result) {
            _this.loading.dismiss();
            _this.bookingResponse = result;
            if (_this.bookingResponse.status == "true") {
                _this.bookingInfo = _this.bookingResponse.response;
                console.log('Booking Details', _this.bookingInfo);
                for (var i = 0; i < _this.bookingInfo.length; i++) {
                    _this.unit = _this.bookingInfo[i].unit_title;
                }
                _this.unitList = _this.unit.split(',');
                console.log(_this.unitList);
            }
            else {
                _this.loading.dismiss();
                _this.presentToast(_this.bookingResponse.response);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("Server down...");
        });
    };
    BookingDetailsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    BookingDetailsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    BookingDetailsPage.prototype.fnCloseModel = function () {
        this.viewCtrl.dismiss();
    };
    BookingDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-booking-details',template:/*ion-inline-start:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/booking-details/booking-details.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-title text-center class="title-center-ios">Booking Details</ion-title>\n    <ion-icon class="close-icon" name="close" (click)="fnCloseModel()"></ion-icon>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" no-bounce>\n  <div *ngFor="let item of bookingInfo let i=index ">\n    <ion-card class="card_border_radius p_b_25">\n\n      <ion-row padding class="bg_image">\n\n        <ion-col col-6 class="p_l_10">\n          <div>\n            <ion-label stacked class="my-label label_white">Order Id</ion-label>\n            <ion-label class="my-s-label label_white">#{{item.id}}</ion-label>\n          </div>\n        </ion-col>\n\n        <ion-col col-6 text-right>\n          <div>\n            <ion-label stacked class="my-label">Price</ion-label>\n            <ion-label class="my-s-label lbl_price_size">{{currSymbol}}{{item.booking_price}}</ion-label>\n          </div>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-item>\n        <ion-label stacked class="my-label">Service Name</ion-label>\n        <ion-label class="my-s-label">{{item.service_title}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked class="my-label">Unit</ion-label>\n      </ion-item>\n      <div class="bg-light units-cart">\n        <li class="my-s-label" *ngFor="let unit of unitList">\n          {{unit}}\n        </li>\n      </div>\n      <ion-item>\n        <ion-label stacked class="my-label">Payment Type</ion-label>\n        <ion-label class="my-s-label">{{item.payment_type}}</ion-label>\n      </ion-item>\n      <ion-item class="row_color">\n        <ion-label stacked class="my-label">Booking Status</ion-label>\n        <ion-label class="my-s-label" *ngIf="item.booking_status == \'A\'">Pending</ion-label>\n        <ion-label class="my-s-label" *ngIf="item.booking_status == \'MN\'">Appointment Marked as No Shown</ion-label>\n        <ion-label class="my-s-label" *ngIf="item.booking_status == \'C\'">Confirmed</ion-label>\n        <ion-label class="my-s-label" *ngIf="item.booking_status == \'R\'">Rejected</ion-label>\n        <ion-label class="my-s-label" *ngIf="item.booking_status == \'RS\'">Rescheduled</ion-label>\n        <ion-label class="my-s-label" *ngIf="item.booking_status == \'CC\'">Cancelled by customer</ion-label>\n        <ion-label class="my-s-label" *ngIf="item.booking_status == \'CS\'">Cancelled by Service Provider</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked class="my-label">Start Date</ion-label>\n        <ion-label class="my-s-label">{{item.start_date}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked class="my-label">Start Time</ion-label>\n        <ion-label class="my-s-label">{{item.start_time}}</ion-label>\n      </ion-item>\n    </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/yashcomputers/Desktop/Arshad Workspace/BIWorkSpace/IONIC PROJECT/LaundryBooking/src/pages/booking-details/booking-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servic_servic__["a" /* ServicProvider */]])
    ], BookingDetailsPage);
    return BookingDetailsPage;
}());

//# sourceMappingURL=booking-details.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return global_data; });
var global_data = {
    // url: "http://192.168.1.105:8081/laundry_10/api/",
    url: "http://skymoonlabs.com/laundry/api/",
    // url :'http://laundrycustom.bi-team.in/api/',
    api_key: "1",
    headers: new Headers({ 'Content-Type': 'application/json' }),
};
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// let apiUrl = 'http://localhost/laundry_10/api/';
var ServicProvider = (function () {
    function ServicProvider(http) {
        this.http = http;
        console.log('Hello ServicProvider Provider');
    }
    ServicProvider.prototype.servicePost = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* global_data */].url, (credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ServicProvider.prototype.servicePostAddress = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            console.log("Json resquest", JSON.stringify(credentials));
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__providers_global__["a" /* global_data */].url, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    ServicProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServicProvider);
    return ServicProvider;
}());

//# sourceMappingURL=servic.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.js.map
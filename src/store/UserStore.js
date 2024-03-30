import {makeAutoObservable} from 'mobx';

export default class UserStore {

    phoneNumber = '';
    email = '';
    selectedService = 1; // выбранная услуга: 'шиномонтаж' или 'мойка'
    selectedLocation = ''; // выбранное место
    selectedTime = '';  // Выбранное время
    selectedOrganization = {}; 
    selectedServices = [] // Выбранные услуги для организации

    organizations = [
        { organization_id: 0, subject_name: 'Агригатор', city_name: 'Москва', street_name: 'Буянова', house_number: 23 },
        { organization_id: 1, subject_name: 'МоскваСити', city_name: 'Москва', street_name: 'Матросова', house_number: 21 },
        { organization_id: 2, subject_name: 'РусАвто', city_name: 'Самара', street_name: 'Буянова', house_number: 44 },
        { organization_id: 3, subject_name: 'СамараАвто', city_name: 'Самара', street_name: 'Маяковская', house_number: 55 },
    ];

    carServices = [
        { type_id: 0, type_code: 1,  type_name: 'Мойка кузова', price: 500, duration: '1 час' },
        { type_id: 1, type_code: 1,  type_name: 'Мойка днища', price: 700, duration: '1.5 часа' },
        { type_id: 2, type_code: 1,  type_name: 'Полировка', price: 1000, duration: '2 часа' },
        { type_id: 3, type_code: 2,  type_name: 'Ремонт двигателя', price: 5000, duration: '3 часа' },
        { type_id: 4, type_code: 2,  type_name: 'Замена масла', price: 1000, duration: '1 час' },
        { type_id: 5, type_code: 2,  type_name: 'Подготовка к зиме', price: 1500, duration: '2 часа' },
    ];
   
    constructor() {
        // this._isAuth = true;
        // this._user = {}
        makeAutoObservable(this)
    }

    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    setEmail(email) {
        this.email = email;
    }

    setSelectedService(service) {
        this.selectedService = service;
    }

    setSelectedLocation(location) {
        this.selectedLocation = location;
    }

    setSelectedOrganization(organization) {
        this.selectedOrganization = organization;
    }


    addSelectedService(service) {
        this.selectedServices.push(service);
    }

    removeSelectedService(serviceId) {
        this.selectedServices = this.selectedServices.filter(service => service.type_id !== serviceId);
    }


    setSelectedTime(time) {
        this.selectedTime = time;
    }

    ////////////////////////////////////

    getPhone() {
        return this.phoneNumber
    }

    getEmail() {
        return this.email
    }
    
    getSelectedLocation(){
        return this.selectedLocation
    }

    getSelectedOrganization(){
        return this.selectedOrganization
    }
    getSelectedService() {
        return this.selectedService
    }
    getSelectedTime(){
        return this.selectedTime
    }


    reset() {
        this.phoneNumber = '';
        this.email = '';
        this.selectedService = '';
        this.selectedLocation = '';
        this.selectedTime = '';
        this.selectedOrganization = {};
        this.selectedServices = [];
    }

    printUserData() {

        console.log('Phone Number:', this.phoneNumber);
        console.log('Email:', this.email);
        console.log('Selected Service:', this.selectedService);
        console.log('Selected Location:', this.selectedLocation);
        console.log('Selected Organization:', this.selectedOrganization = {});
        console.log('Selected Time:', this.selectedTime);
        ;
    }




    //////////////////////


    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._ = user
    }

    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }

    
}
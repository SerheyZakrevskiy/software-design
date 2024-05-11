class Subscription {
    constructor(monthlyFee, minimumPeriod, channels) {
        this.monthlyFee = monthlyFee;
        this.minimumPeriod = minimumPeriod;
        this.channels = channels;
    }
}

class DomesticSubscription extends Subscription {
    constructor(channels) {
        super(10, 1, channels);
    }
}

class EducationalSubscription extends Subscription {
    constructor(channels) {
        super(15, 3, channels);
    }
}

class PremiumSubscription extends Subscription {
    constructor(channels) {
        super(25, 6, channels);
    }
}

class PurchaseInterface {
    createSubscription(channels) {
        throw new Error('Method createSubscription must be implemented');
    }
}

class WebSite extends PurchaseInterface {
    createSubscription(channels) {
        return new DomesticSubscription(channels);
    }
}

class MobileApp extends PurchaseInterface {
    createSubscription(channels) {
        return new EducationalSubscription(channels);
    }
}

class ManagerCall extends PurchaseInterface {
    createSubscription(channels) {
        return new PremiumSubscription(channels);
    }
}

// Приклад використання:
const website = new WebSite();
const mobileApp = new MobileApp();
const managerCall = new ManagerCall();

const channels = ['Discovery', 'ТСН', 'Jetix'];
const channels2 = ['1 + 1', 'Суспільне', 'Львів сьогодення', 'QTV'];
const channels3 = ['Politics', '1 + 1', 'Discovery'];

const subscription1 = website.createSubscription(channels);
const subscription2 = mobileApp.createSubscription(channels3);
const subscription3 = managerCall.createSubscription(channels2);

console.log("Subscription 1:", subscription1);
console.log("Subscription 2:", subscription2);
console.log("Subscription 3:", subscription3);

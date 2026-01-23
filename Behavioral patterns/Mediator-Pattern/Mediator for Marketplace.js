// Mediator class that manages communication between vendors and customers
class MarketplaceMediator {
    constructor() {
        // List of registered vendors
        this.vendors = [];

        // List of registered customers
        this.customers = [];
    }

    // Registers a vendor and assigns this mediator to it
    registerVendor(vendor) {
        this.vendors.push(vendor);
        vendor.setMediator(this);
    }

    // Registers a customer and assigns this mediator to it
    registerCustomer(customer) {
        this.customers.push(customer);
        customer.setMediator(this);
    }

    // Notifies all customers when a new product is listed
    listProduct(product) {
        this.customers.forEach(customer => {
            customer.notifyProduct(product);
        });
    }
}

// Vendor class that adds products to the marketplace
class Vendor {
    // Sets the mediator for this vendor
    setMediator(mediator) {
        this.mediator = mediator;
    }

    // Adds a product and informs the mediator
    addProduct(product) {
        console.log(`Product added: ${product}`);
        this.mediator.listProduct(product);
    }
}

// Customer class that receives notifications about new products
class Customer {
    // Sets the mediator for this customer
    setMediator(mediator) {
        this.mediator = mediator;
    }

    // Called by the mediator when a new product is available
    notifyProduct(product) {
        console.log(`New product available: ${product}`);
    }
}

// Create the mediator (marketplace)
const market = new MarketplaceMediator();

// Create a vendor and a customer
const vendor = new Vendor();
const customer = new Customer();

// Register vendor and customer in the marketplace
market.registerVendor(vendor);
market.registerCustomer(customer);

// Vendor adds a product, customers get notified
vendor.addProduct("Gaming Laptop");

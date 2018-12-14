var app = new Vue({
    el: "#shoppingCartItems",
    data: {
        items: [],
        name: "",
        price: [],
        total: null,
        numItems: 0,
    },
    methods: {
        addItem(name, price) {
            this.items.push(this.name);
            this.price = price
            this.total += price
            this.name = "";
            this.price = null;
            this.numItems++
        },
        removeItem(anItem) {
            var index = this.items.indexOf(anItem)
            if (KSG.num > 0){
                KSG.num--
            } else if (KGATLW.num > 0) {
                KGATLW.num--
            } else if (LUSH.num > 0) {
                LUSH.num--
            }
            if (anItem.quantity == 1) {
                this.items.splice(index, 1)
                this.total -= anItem.price
                this.numItems--
                anItem.subtotal -= anItem.price
            } else {
                anItem.quantity--;
                this.total -= anItem.price
                anItem.subtotal -= anItem.price
                this.numItems--
            }
            if (anItem.price == 25) {
                KSG.kQuantity++;
            }
            if (anItem.price == 10) {
                KGATLW.gQuantity++;
            }
            if (anItem.price == 13) {
                LUSH.lQuantity++;
            }
        }
    }
}) //end of app

//album obects
var KSG = new Vue({
    el: "#ksg",
    data: {
        kName: "Kids See Ghosts - Kids See Ghosts Vinyl",
        kPrice: 25,
        kDescription: "Collaborative hip-hop project from the minds of Kanye West and Kid Cudi",
        kQuantity: 2,
        num: 0,
        KSGIndex: 0,
    },
    methods: {
        addKSG() {
            if (this.num == 0) {
                app.items.push({
                    name: this.kName,
                    price: this.kPrice,
                    quantity: 1,
                    subtotal: this.kPrice
                });
                app.price = this.kPrice;
                app.total += this.kPrice;
                app.numItems++;
                this.kQuantity--;
                this.num++
                KSGIndex = app.items.length -1
                return;
            }
            else if (this.num > 0) {
                app.items[KSGIndex].quantity++;
                app.items[KSGIndex].subtotal += this.kPrice;
                app.price += this.kPrice;
                app.total += this.kPrice;
                app.numItems++;
                this.kQuantity--;
                this.num++
            }                    
        }
    }
})

var KGATLW = new Vue({
    el: "#kgatlw",
    data: {
        gName: "King Gizzard & the Lizard Wizard - Gumboot Soup Digital Album",
        gPrice: 10,
        gDescription: "The Australian psychedelic rock septet's fifth studio album to be released in 2017",
        gQuantity: 10,
        num: 0,
        GUMIndex: 0,
    },
    methods: {
        addKGATLW() {                                
            if (this.num == 0) {
                app.items.push({
                    name: this.gName,
                    price: this.gPrice,
                    quantity: 1,
                    subtotal: this.gPrice
                });
                app.price = this.gPrice;
                app.total += this.gPrice;
                app.numItems++;
                this.gQuantity--;
                this.num++
                GUMIndex = app.items.length -1
                return;
            }
            else if (this.num > 0) {
                app.items[GUMIndex].quantity++;
                app.items[GUMIndex].subtotal += this.gPrice;
                app.price += this.gPrice;
                app.total += this.gPrice;
                app.numItems++;
                this.gQuantity--;
                this.num++
            }
        }
    }
})

var LUSH = new Vue({
    el: "#lush",
    data: {
        lName: "Snail Mail - Lush CD",
        lPrice: 13,
        lDescription: "Debut album from this solo project by singer-songwriter Lindsey Jordan",
        lQuantity: 5,
        num: 0,
        LUSHIndex: 0,
    },
    methods: {
        addLUSH() {                               
            if (this.num == 0) {
                app.items.push({
                name: this.lName,
                price: this.lPrice,
                quantity: 1,
                subtotal: this.lPrice
                });
                app.price = this.lPrice;
                app.total += this.lPrice;
                app.numItems++;
                this.lQuantity--;
                this.num++
                LUSHIndex = app.items.length -1
                return;
            }
            else if (this.num > 0) {
                app.items[LUSHIndex].quantity++;
                app.items[LUSHIndex].subtotal += this.lPrice;
                app.price += this.lPrice;
                app.total += this.lPrice;
                app.numItems++;
                this.lQuantity--;
                this.num++
            }
        }
    }
})
//end of albums
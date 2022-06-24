const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: "Vue Mastery",
            description: 'Lovely, gender-neutral socks in green    and blue.',
            selectedVariant: 0,
            url: 'https://github.com/Code-Pop/Intro-to-Vue-3',
            inventory: 100,
            onSale: false,
            details: [
                '50% cotton',
                '30% wool',
                '20% polyester',
            ],
            variants: [
                {
                    id: 2234,
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                    quantity: 50,
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
                    quantity: 0,
                },
            ],
            sizes: [
                'small',
                'medium',
                'large',
                'x-large',
            ],
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart -= 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
    },
    computed:{
        title() {
            return `${this.brand} ${this.product}`
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            if (this.onSale) {
                return `${this.brand} ${this.product} are on sale!`
            }
            return ''
        }
    }
})

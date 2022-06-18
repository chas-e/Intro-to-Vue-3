const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            description: 'Lovely, gender-neutral socks in green    and blue.',
            image: './assets/images/socks_green.jpg',
            url: 'https://github.com/Code-Pop/Intro-to-Vue-3',
            inventory: 100,
            inStock: false,
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
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
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
        updateImage(variantImage) {
            this.image = variantImage
        },
    }
})

const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'Lovely, gender-neutral socks in green    and blue.',
            image: './assets/images/socks_green.jpg',
            url: 'https://github.com/Code-Pop/Intro-to-Vue-3',
            inventory: 8,
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
                },
                {
                    id: 2235,
                    color: 'blue',
                },
            ],
            sizes: [
                'small',
                'medium',
                'large',
                'x-large',
            ],
        }
    }
})

const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'Lovely, gender-neutral socks in green    and blue.',
            image: './assets/images/socks_green.jpg',
            url: 'https://github.com/Code-Pop/Intro-to-Vue-3',
            inventory: 8,
            onSale: false,
        }
    }
})

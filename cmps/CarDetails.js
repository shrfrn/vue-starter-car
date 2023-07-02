export default {
    props: ['car'],
    template: `
        <section class="car-details">
            <h2>{{ car.vendor }}</h2>
            <h3>{{ car.maxSpeed }}</h3>
            <img :src="imgSrc" alt="">
            <button @click="onClose">close</button>
        </section>
    `,
    methods: {
        onClose() {
            this.$emit('close')
        }
    },
    computed: { 
        imgSrc() {
            return `../assets/img/${this.car.vendor}.png`
        }
    }
}
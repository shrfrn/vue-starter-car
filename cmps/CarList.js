export default {
    props: ['cars'],
    template: `
        <section class="car-list">
            <ul>
                <li v-for="car in cars">
                    <CarPreview :car="car"/>
                    <section class="actions">
                        <button @click="onShowDetails(car.id)">Details</button>
                        <button @click="onRemoveCar(car.id)">x</button>
                    </section>
                </li>
            </ul>
        </section>
    `,
    methods: {
        onRemoveCar(carId) {
            this.$emit('remove', carId)
        },
        onShowDetails(carId) {
            this.$emit('select', carId)
        },
    }
}
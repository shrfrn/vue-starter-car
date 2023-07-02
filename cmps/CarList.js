export default {
    props: ['cars'],
    template: `
        <section class="car-list">
            <h1>Car List</h1>
            <ul>
                <li v-for="car in cars">
                    <CarPreview :car="car"/>
                    <section class="actions">
                        <button @click="onRemoveCar(car.id)">x</button>
                    </section>
                </li>
            </ul>
        </section>
    `,
    methods: {
        onRemoveCar(carId) {
            this.$emit('remove', carId)
        }
    }
}
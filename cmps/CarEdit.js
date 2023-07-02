import { carService } from "../services/car.service.js"

export default {
    template: `

        <form @submit.prevent="save" class="car-edit">
            <h2>Add a Car</h2>
            <input v-model="car.vendor" type="text" placeholder="Enter vendor">
            <input v-model.number="car.maxSpeed" type="number" >
            <button>save</button>
        </form>
    `,
    data() {
        return {
            car: carService.getEmptyCar(),
        }
    },
    methods: {
        save() {
            this.$emit('save', this.car)
            this.car = carService.getEmptyCar()
        }
    }
}
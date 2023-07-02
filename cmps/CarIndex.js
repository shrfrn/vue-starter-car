import { carService } from '../services/car.service.js'

export default {
    template: `
        <section class="car-index">
            <h1>Cars</h1>
            <CarList @remove="removeCar" :cars="cars"/>
        </section>
    `,
    data() {
        return {
            cars: null,
        }
    },
    methods: {
        removeCar(carId) {
            carService.remove(carId)    
                .then(() => {
                    const idx = this.cars.findIndex(car => car.id === carId)
                    this.cars.splice(idx, 1)
                })
        }
    },
    created() {
        carService.query()
            .then(cars => this.cars = cars)
    }
}
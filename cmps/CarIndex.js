import { carService } from '../services/car.service.js'

export default {
    template: `
        <section class="car-index">
            <CarList 
                :cars="cars"
                @select="selectCar" 
                @remove="removeCar" /> 
            <CarDetails 
                v-if="selectedCar" 
                :car="selectedCar" 
                @close="selectedCar = null"/>
            <CarEdit @save="saveCar" />
        </section>
    `,
    data() {
        return {
            cars: null,
            selectedCar: null,
        }
    },
    methods: {
        removeCar(carId) {
            carService.remove(carId)    
                .then(() => {
                    const idx = this.cars.findIndex(car => car.id === carId)
                    this.cars.splice(idx, 1)
                })
        },
        selectCar(carId) {
            this.selectedCar = this.cars.find(car => car.id === carId)
        },
        saveCar(carToSave) {
            carService.save(carToSave)
                .then(savedCar => this.cars.push(savedCar))
        }
    },
    created() {
        carService.query()
            .then(cars => this.cars = cars)
    }
}
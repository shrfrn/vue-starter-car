import { createApp } from './lib/vue-v3.3.4.js'

import CarIndex from './cmps/CarIndex.js'

const options = {
    template: `
    <div>
        <CarIndex />
    </div>
    `,
    data() {
        return {
            title: 'Vue Proj',
        }
    },
}
const app = createApp(options)

app.component('CarIndex', CarIndex)

app.mount('#app')

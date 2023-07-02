import { createApp } from './lib/vue-v3.3.4.js'

import CarIndex from './cmps/CarIndex.js'

import CarList from './cmps/CarList.js'
import CarPreview from './cmps/CarPreview.js'

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

app.component('CarList', CarList)
app.component('CarPreview', CarPreview)

app.mount('#app')

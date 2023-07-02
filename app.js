import { createApp } from './lib/vue-v3.3.4.js'

import AppHeader from './cmps/AppHeader.js'
import AppFooter from './cmps/AppFooter.js'

import CarIndex from './cmps/CarIndex.js'
import CarDetails from './cmps/CarDetails.js'

import CarList from './cmps/CarList.js'
import CarPreview from './cmps/CarPreview.js'

const options = {
    template: `
    <div>
        <AppHeader />
        <section class="main-route">
            <CarIndex />
        </section>
        <AppFooter />
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
app.component('CarDetails', CarDetails)

app.component('AppHeader', AppHeader)
app.component('AppFooter', AppFooter)

app.component('CarList', CarList)
app.component('CarPreview', CarPreview)

app.mount('#app')

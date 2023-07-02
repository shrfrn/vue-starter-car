import { createApp } from './lib/vue-v3.3.4.js'

const options = {
    template: `
    <div>
        <header class="app-header">
            <h1>{{ title }}</h1>
        </header>
    </div>
    `,
    data() {
        return {
            title: 'Vue Proj',
        }
    },
}
const app = createApp(options)
app.mount('#app')

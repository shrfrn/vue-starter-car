export default {
    props: ['cars'],
    template: `
        <section class="car-list">
            <h1>Car List</h1>
            <ul>
                <li v-for="car in cars">
                    <pre>{{ car }}</pre>
                </li>
            </ul>
        </section>
    `,
}
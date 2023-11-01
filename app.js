const app = Vue.createApp({
    data() {
        return {
            items: [
                { id: 1, text: 'Item 1', style: { backgroundColor: 'white' } },
                { id: 2, text: 'Item 2', style: { backgroundColor: 'white' } },
                { id: 3, text: 'Item 3', style: { backgroundColor: 'white' } }
            ]
        }
    },
    methods: {
        changeColor(item) {
            item.style.backgroundColor = item.style.backgroundColor === 'white' ? 'red' : 'white';
        }
    }
});

app.mount('#app');


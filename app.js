const app = Vue.createApp({
    data(){
        return{
            name1 : '',
            name2 : ''
        }
    },
    methods: {
        onPress:function(){
            alert('hey')
        },
        keymonitor: function (event) {
            this.name2 = event.target.value;
          },
    },
})


app.mount("#assignment");
<template>
    <div>
        <h1>Welecome to Home!</h1>
        <input type="text" v-model="input1" />
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>
    </div>
</template>
<script>
export default {
    name: "Vue_Home",
    data() {
        return {
            input1: "테스트1",
            input2: "테스트2"
        }
    },
    methods: {
        getData() {
            alert(this.input1);
        },
        setData() {
            this.input1 = "change";
        },
    },
    beforeCreate(){
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    beforeUnmount() {
        console.log("beforeUnmount");
    },  
    unmounted() {
        console.log("unmounted");
    }
}
</script>

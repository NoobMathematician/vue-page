<template>
    <div v-if="job">
        <h1>{{ job.title }}</h1>
        <!-- <h3>Job id: {{ id }} </h3> -->
        <p>{{ job.details }} </p>
    </div>
    <div v-else>
        <p>Loading details, wait a second ...</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            job:null
        }
    },
    mounted() {
        fetch('https://api.npoint.io/7cdd4026123b37fb2338/' + this.id)
            .then(res => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style>
p{
    font-style: italic;
}
</style>
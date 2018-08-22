Vue.use(Card);
<template>
<div>
    <b-card-group>
        <div v-for="(item, i) in this.horses">
        <b-card title= item.name
                img-src= item.link
                img-alt= item.name
                img-top>
            <p class="card-text">
                {{item.description}}
            </p>
            <div slot="footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </b-card>
    </div>
    </b-card-group>
</template>

<script>
    import { Card } from 'bootstrap-vue/es/components';
    export default {
        data() {
            return {}
        },
        computed: {
            totalDocuments() {
                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                let overallTotal = 0;
                this.results.forEach(function (row) {
                    let docTypeNumbers = row.documents.types.map(type => type.number)
                    overallTotal = docTypeNumbers.reduce(reducer, overallTotal)
                })
                return overallTotal;
            },
            chosenCompareElements() {
                return this.results.filter(result => result.selected)
            }
        },
        methods: {
            variant (value) {
                let $variant
                switch (value) {
                    case 'Publications':
                    $variant = 'success'
                    break
                    case 'Grants':
                    $variant = 'info'
                    break
                    case 'Patents':
                    $variant = 'warning'
                    break
                    case 'Clinical Trials':
                    $variant = 'danger'
                    break
                }
                return $variant
            },
            flag (value) {
                return 'flag-icon flag-icon-' + value
            },
            redirectToDetailPage (searchName) {
                let data = new FormData()
                data.append('objectName', searchName)
                data.append('objectType', this.rowType)
                axios({
                    method: 'post',
                    url: '/api/detail',
                    data: data
                })
                .then(response => {
                    window.location='/detail'
                })
                .catch(response => {
                    console.log(response)
                })
            },
        }
    }
</script>

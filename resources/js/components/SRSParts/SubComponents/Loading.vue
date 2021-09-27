<template>
   <v-dialog v-model="loadingDialog" persistent persistent width="350">
      <v-card color="primary" dark>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Processing</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          {{ items }}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>
<script>

  export default {
    props: ['loadingDialog', 'items'],
    data: () => ({
 
    }),

    mounted(){
     
    },
    methods:{

    },
  }
</script>

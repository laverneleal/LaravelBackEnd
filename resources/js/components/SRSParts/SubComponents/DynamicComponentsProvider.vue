<template>
  <component :is="componentFile" />
</template>
<script>

export default {
  props:{
    componentName: {
      required: true,
      type    : String
    },
    LoadType:{
      required: true,
    },
  },
  computed:{
    //add import path for dynamic component import
    componentFile(){
      switch(this.LoadType){
        case '1':
          return () => import(`../GaibuList/GaibuListParts/${this.componentName}.vue`);
          break;
        case '2':
          return () => import(`../GaibuList/MaintenanceTool/${this.componentName}.vue`);


      }
    }

  },

  mounted(){
    console.log(this.LoadType)

  }




}
</script>
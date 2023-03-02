<template>
  <div class="q-pa-md">
    <div class="row items-start q-gutter-md">
    <q-responsive :ratio="4/3" class="col" style="max-height: 100px">
 <div class="flex flex-center"><strong>PAGINA</strong>-EM-CONSTRUÇÃO</div>
  <q-page class="flex flex-center">
    <img
      alt="PAGINA EM CONSTRUÇÃO"
      src="~assets/page-under-construt.png"
      style="width: 860px; height: 353px"
    >
  </q-page>
</q-responsive>
</div>
  </div>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

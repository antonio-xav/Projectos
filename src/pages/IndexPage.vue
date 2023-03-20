<!--<template>
 <div class="flex flex-center"><strong>PAGINA</strong>-EM-CONSTRUÇÃO</div>
  <q-page class="flex flex-center">
    <img
      alt="PAGINA EM CONSTRUÇÃO"
      src="~assets/page-under-construt.png"
      style="width: 860px; height: 353px"
    >
  </q-page>

</template>-->
<template>
  <div  height="100px">
    <q-toolbar class="bg-white text-white shadow-3 rounded-borders">
      <q-btn flat label="Homepage" />
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab" shrink stretch>
        <q-tab name="tab1" label="HOME" :style="{color:'grey'}"/>
        <q-tab name="tab2" label="ACESSORIOS" :style="{color:'grey'}"/>
        <q-tab name="tab3" label="SOBRE" :style="{color:'grey'}"/>
      </q-tabs>
    </q-toolbar>
    <div class="flex flex-center"><h5><strong>PAGINA </strong> EM CONSTRUÇÃO</h5></div>
    <q-page class="flex flex-center">

      <img

      alt="Choupal_logo"
      src="~assets/Choupal_Auto.png"
      style=" "

    >

  </q-page>
  </div>

</template>
<!--<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>-->

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('')
    }
  }
}
</script>

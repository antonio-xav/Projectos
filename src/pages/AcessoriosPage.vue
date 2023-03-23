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

      <q-btn flat label="AcessoriosPage" />

      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
            <q-tabs v-model="tab" shrink stretch>
        <q-tab :to="{name: 'index'}" name="index" label="HOME" :style="{color:'grey'}"/>
        <q-tab :to="{name: '/acessorios'}"  label="ACESSORIOS" :style="{color:'grey'}"/>
        <q-tab name="tab3" label="SOBRE" :style="{color:'grey'}"/>
      </q-tabs>
      -->
      <q-tabs
    v-model="tab" shrink stretch
  >
    <q-route-tab :to="{ name: 'index'  }"  @click="navDelay" label="HOME" :style="{color:'grey'}"/>
    <q-route-tab :to="{ name:'acessorios'}" @click="navCancel" label="ACESSORIOS" :style="{color:'grey'}"/>
    <q-route-tab :to="{ name: 'ErrorNotFound' }" @click="navCancel" label="SOBRE" :style="{color:'grey'}"/>
  </q-tabs>
    </q-toolbar>
    <div class="flex flex-center" style="color: red;"><h5><strong>PAGINA </strong> EM CONSTRUÇÃO</h5></div>
    <q-page class="flex flex-center">

     <!-- <img
      v-if="$q.platform.is.desktop"
      alt="Choupal_logo"
      src="~assets/Choupal_logo_01.png"
      style=""
      >
      <img
      v-if="$q.platform.is.mobile"
      alt="Choupal_logo"
      src="~assets/Choupal_Auto.png"
      style="width: 50%; height: 50%"
      >-->
      <strong style="color: red;"><h6>Pagina Destinada a Listagens dos Acessorios</h6></strong>

  </q-page>
  </div>

</template>
<!--<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AcessoriosPage'
})
</script>-->

<script>
import { ref, defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'AcessoriosPage',

  setup () {
    const $q = useQuasar()
    return {
      tab: ref(''),
      $q
    }
  }

})
</script>

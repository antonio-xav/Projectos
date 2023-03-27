<template>

  <div class="q-gutter-y-md bg-white text-red shadow-3 rounded-borders" height="100%">

          <q-tabs
        v-model="tab"   inline-label
          >
        <q-route-tab :to="{ name: 'index'  }"  @click="navDelay" label="HOME" />
        <q-route-tab :to="{ name:'acessorios'}" @click="navCancel" label="ACESSORIOS"/>
        <q-route-tab :to="{ name: 'ErrorNotFound' }" @click="navCancel" label="SOBRE"/>
          </q-tabs>

    </div>

    <div class="flex flex-center" style=""></div>

    <div class="column items-center" style="height: 150px">
      <div class="col">
        <H5><STRONG>PAGINA EM CONSTRUÇÃO</STRONG></H5>
      </div>
      <div class="col">
        <H5><STRONG style="color: #ff0000">PAGINA INICIAL</STRONG></H5>
      </div>
    </div>

  <div class="q-pa-md">

    <div class="q-gutter-md row items-center flex flex-center">

      <q-img></q-img>

    </div>
  </div>

</template>

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

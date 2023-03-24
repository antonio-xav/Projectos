<template>
  <div class="q-gutter-y-md bg-white text-red shadow-3 rounded-borders" height="100%">

<q-tabs
v-model="tab"   inline-label
>
<q-route-tab :to="{ name: 'index'  }"  @click="navDelay" label="HOME"/>
<q-route-tab :to="{ name:'acessorios'}" @click="navCancel" label="ACESSORIOS"/>
<q-route-tab :to="{ name: 'ErrorNotFound' }" @click="navCancel" label="SOBRE"/>
</q-tabs>

</div>
<div  height="100%"  class="q-gutter-y-md"  >

    <div class="flex flex-center"></div>

    <q-page class="flex flex-center">
      <div class="q-pa-md flex flex-center">

        <div class="column flex-center">
          <div ><h5><strong>PAGINA </strong> EM CONSTRUÇÃO</h5></div>
          <div ><h5><strong style="color: #ff0000"><br>PAGINA INICIAL</strong></h5></div>
        </div>
        </div>

     <!--  <img
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

  </q-page>
  </div>

</template>

<script>
import { ref, defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'IndexPage',

  setup () {
    const $q = useQuasar()
    return {
      tab: ref(''),
      $q
    }
  }

})
</script>

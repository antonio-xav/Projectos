<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
        <!--     <img
      alt="Choupal_logo"
      src="~assets/Choupal_logo_png.png"

      <strong>CHOUPAL </strong> AUTO ACESSORIOS

    >
  --><div ><img
      alt="Choupal_logo"
      src="~assets/Choupal_Logo_png.png"
      style="width: 200px; height: 50px; "
      >
    </div>

        </q-toolbar-title>

        <div>Logotipo {{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          <strong>Links Uteis</strong>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { biWhatsapp, biInstagram, bienvelopeat } from '@quasar/extras/bootstrap-icons'

const linksList = [
  {
    title: 'Whatsapp',
    caption: '+258844097201',
    icon: 'bi-whatsapp',
    link: 'https://wa.me/258844097201'
  },
  {
    title: 'Instagram',
    caption: '@choupal.auto.acessorios',
    icon: 'bi-instagram',
    link: 'https://instagram.com/choupal.auto.acessorios/'
  },
  {
    title: 'E-mail',
    caption: 'choupalautoacessorios@gmail.com',
    icon: 'bi-envelope-at',
    link: 'mailto:choupalautoacessorios@gmail.com'
  }

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      biWhatsapp,
      biInstagram,
      bienvelopeat,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

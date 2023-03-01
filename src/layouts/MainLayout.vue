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
        <strong>CHOUPAL AUTO ACESSORIOS</strong>
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

const linksList = [
  {
    title: 'Whatsapp',
    caption: '+258844097201',
    icon: 'history ',
    link: 'https://wa.me/258844097201'
  },
  {
    title: 'Instagram',
    caption: '@choupal.auto.acessorios',
    icon: 'code',
    link: 'https://instagram.com/choupal.auto.acessorios/'
  },
  {
    title: 'Facebook',
    caption: 'choupal.auto.acessorios',
    icon: 'public',
    link: 'https://facebook.com'
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
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

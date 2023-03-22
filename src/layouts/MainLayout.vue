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
      src="~assets/Choupal_logo_01.png"
      alt="Choupal_logo"
      src=""
      style=" "

    >
  -->
  <div>
    <strong>HOME</strong>
    </div>

        </q-toolbar-title>

        <div>Logotipo</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="$q.platform.is.desktop"
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
      <q-page-sticky position="bottom-right" :offset="[18,18]">
            <q-fab
              v-if="$q.platform.is.mobile"
              icon="add"
              direction="up"
              color="primary"
            >
              <q-fab-action @click="abrirEmail" color="primary" icon="bi-envelope-check" />
              <q-fab-action @click="abrirInstagram" color="primary" icon="bi-instagram" />
              <q-fab-action @click="abrirChat" type="submit" color="primary" icon="bi-whatsapp"  />
          </q-fab>
          </q-page-sticky>
    </q-page-container>
  </q-layout>

</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { biWhatsapp, biInstagram, biEnvelopeCheck } from '@quasar/extras/bootstrap-icons'
import { useQuasar } from 'quasar'

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
    icon: 'bi-envelope-check',
    link: 'mailto:choupalautoacessorios@gmail.com'
  }

]

export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  methods: {
    abrirChat: function () {
      const url = 'https://wa.me/258844097201'
      window.open(url, '_blank')
    },
    abrirEmail: function () {
      const url = 'mailto:choupalautoacessorios@gmail.com'
      window.open(url, '_blank')
    },
    abrirInstagram: function () {
      const url = 'https://instagram.com/choupal.auto.acessorios'
      window.open(url, '_blank')
    }

  },

  setup () {
    const $q = useQuasar()
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      biWhatsapp,
      biInstagram,
      biEnvelopeCheck,
      $q,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

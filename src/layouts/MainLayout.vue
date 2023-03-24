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
      style=" "
          <q-icon name="bi-house-gear">
  </q-icon>

    >
  -->
  <div>
    <strong style="position:;">Home Page </strong>

    </div>

        </q-toolbar-title>

        <div>

          <img
          v-if="$q.platform.is.desktop"
        alt="Choupal_logo"
        src="~assets/Choupal_Auto_07.png"
        style="height: 55px;"
       >
       <img
          v-if="$q.platform.is.mobile"
        alt="Choupal_logo"
        src="~assets/Choupal_Logo_02.png"
        style="height: 55px;"
       >
    </div>
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
              icon="keyboard_arrow_up"
              direction="up"
              color="primary"
              :disable="draggingFab"
              v-touch-pan.prevent.mouse="moveFab"
              external-label
              label-position="left"
              label="links"

            >
              <q-fab-action @click="abrirEmail" color="primary" icon="bi-envelope-check" :disable="draggingFab" />
              <q-fab-action @click="abrirInstagram" color="primary" icon="bi-instagram" :disable="draggingFab"/>
              <q-fab-action @click="abrirChat" type="submit" color="primary" icon="bi-whatsapp"  :disable="draggingFab"/>
          </q-fab>
          </q-page-sticky>
          <q-layout view="lhh LpR lff">
      <q-footer>
        <q-toolbar>
          <q-toolbar-title>
            <q-tabs
                v-model="tab" shrink stretch
              >
                <q-route-tab :to="{ name: 'index'  }"  @click="navDelay" label="HOME" :style="{color:'white'}"/>
                <q-route-tab :to="{ name:'acessorios'}" @click="navCancel" label="ACESSORIOS" :style="{color:'white'}"/>
                <q-route-tab :to="{ name: 'ErrorNotFound' }" @click="navCancel" label="SOBRE" :style="{color:'white'}"/>
              </q-tabs>

          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
    </q-page-container>
  </q-layout>

</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { biWhatsapp, biInstagram, biEnvelopeCheck, biHouseGear } from '@quasar/extras/bootstrap-icons'
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
      biHouseGear,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

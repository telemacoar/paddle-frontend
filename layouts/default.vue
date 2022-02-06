<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list dense>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: "mdi-apps",
          title: "Inicio",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Configuracion",
          to: "/config",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Productos",
          to: "/products",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Canchas",
          to: "/courts",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Clientes",
          to: "/clients",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Stock",
          to: "/stock",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Reportes",
          to: "/reports",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Ventas",
          to: "/sales",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Turnos",
          to: "/appointments",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Paddle",
    };
  },
};
</script>

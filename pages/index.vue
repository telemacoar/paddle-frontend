<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-text>
          <v-img max-height="150" max-width="250" src="/clients.jpg"></v-img>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="$router.push('/clients')">Clientes</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col>
      <v-card>
        <v-card-text>
          <v-img max-height="150" max-width="250" src="/products.jpg"></v-img>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="$router.push('/products')">Productos</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col>
      <v-card>
        <v-card-text>
          <v-img max-height="150" max-width="250" src="/courts.jpg"></v-img>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="$router.push('/courts')">Canchas</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col>
      <v-card>
        <v-card-text>
          <v-img max-height="150" max-width="250" src="/courts.jpg"></v-img>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="$router.push('/courts')">Canchas </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({}),
  mounted() {},
  methods: {},
};
</script>

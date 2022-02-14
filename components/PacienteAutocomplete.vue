<template>
  <v-autocomplete
    v-model="select"
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    item-text="name"
    item-value="id"
    class="mx-4"
    flat
    hide-no-data
    hide-details
    label="Cliente"
    no-filter
    clearable
    @change="$emit('pac', select)"
  >
    <template v-slot:item="{ item }">
      <v-list-item-avatar
        color="indigo"
        class="text-h5 font-weight-light white--text"
      >
        <!-- {{ item.nombre.charAt(0) }} -->
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-text="item.name"></v-list-item-title>
        <v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>
      </v-list-item-content>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [],
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  computed: {},
  methods: {
    querySelections(v) {
      this.loading = true;
      console.log("v:", v);
      this.$axios
        .$get("/api/clients/?funcion=pacientes&search=" + v)
        .then((items) => {
          console.log("it:", items.data.data);
          this.items = items.data.data;
          //console.log("st2:", this.states);
          this.loading = false;
        });
    },
  },
};
</script>
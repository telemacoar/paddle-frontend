<template>
  <div>
    <template>
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        dense
        hide-default-footer
        group-by="type"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Movimientos de Stock</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-text-box-plus</v-icon> Nuevo
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.name"
                          label="Nombre"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    Guardar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >Are you sure you want to delete this item?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:item.date="{ item }">
          {{ item.date.substr(0, 10) }}
        </template>

        <template v-slot:no-data> Sin datos </template>
      </v-data-table>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "Fecha", value: "date" },
      { text: "Producto", value: "product" },
      { text: "Cantidad", value: "amount" },
      { text: "Precio", value: "price" },
      { text: "Tipo", value: "type" },
      { text: "Accion", value: "actions" },
    ],

    items: [],
    editedIndex: -1,
    search: "",
    editedItem: {
      product: "",
      amount: "",
      date: "",
      price: "",
      income: "",
    },
    defaultItem: {
      product: "",
      amount: "",
      date: "",
      price: "",
      income: "",
    },
  }),
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      const data = await this.$axios.$get("/api/stocks/");
      this.items = data.results;
      console.log(data);
    },
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      await this.$axios.$delete("/api/stocks/" + this.editedItem.id);

      this.items.splice(this.editedIndex, 1);

      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedIndex > -1) {
        await this.$axios.$put(
          "/api/stocks/" + this.editedItem.id,
          this.editedItem
        );
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        console.log(this.editedItem);
        await this.$axios.$post("/api/stocks/", this.editedItem);

        this.items.push(this.editedItem);
      }
      this.close();
    },
    timetable(item) {
      console.log(item);
    },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo" : "Editar";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  editItem(item) {
    this.editedIndex = this.items.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  },

  deleteItem(item) {
    this.editedIndex = this.items.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  },

  deleteItemConfirm() {
    this.items.splice(this.editedIndex, 1);
    this.closeDelete();
  },

  close() {
    this.dialog = false;
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  },

  closeDelete() {
    this.dialogDelete = false;
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  },

  async save() {
    if (this.editedIndex > -1) {
      Object.assign(this.items[this.editedIndex], this.editedItem);
    } else {
      this.items.push(this.editedItem);
    }
    await this.$axios.$post("/api/stocks/", this.editedItem);
    this.close();
  },
};
</script>

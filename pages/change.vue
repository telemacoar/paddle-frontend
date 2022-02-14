<template>
  <div class="container">
    <div>
      <VueTabulator v-model="userData" :options="TableOptions" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: [
        { ID: 1, Full_Name: "Name1" },
        { ID: 2, Full_Name: "Name2" },
        { ID: 1, Full_Name: "Name3" },
      ],
      TableOptions: {
        height: "1650",
        layout: "fitDataStretch",
        pagination: "local",
        paginationSize: 50,
        selectable: 0,
        movableColumns: true,
        autoResize: false,
        columns: [
          {
            title: "ID",
            formatter: "rownum",
            hozAlign: "center",
            frozen: true,
          },
          {
            title: "Full Name",
            field: "Full_Name",
            sorter: "string",
            frozen: true,
            headerFilter: "select",
            headerFilterParams: { values: true },
          },
        ],
      },
    };
  },
};
</script>


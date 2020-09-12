<template>
  <div>
    <v-simple-table>
      <thead>
        <tr>
          <td>
            Packages
          </td>
          <td>
            <v-text-field
              label="Search"
              v-model="search"
              append-icon="fas fa-search"
            ></v-text-field>
          </td>
        </tr>
        <tr>
          <td @click="sortBy = 'id'">Id</td>
          <td @click="sortBy = 'name'">
            Name
          </td>
          <td @click="sortBy = 'email'">
            Email
          </td>
          <td @click="sortBy = 'phone'">
            Phone
          </td>
          <td @click="sortBy = 'address'">Address</td>
          <td @click="sortBy = 'status'">
            Status
          </td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="pkg in resp"
          :key="pkg.id"
          @click="$router.push(`/admin/package/${pkg.id}`)"
        >
          <td>{{ pkg.id }}</td>
          <td>
            {{
              `${pkg.deliveryFirstName} ${pkg.deliveryMiddleName} ${pkg.deliveryLastName}`
            }}
          </td>
          <td>{{ pkg.deliveryEmail }}</td>
          <td>{{ pkg.deliveryPhone }}</td>
          <td>{{ pkg.deliveryAddress }}</td>
          <td>{{ pkg.isDelivered ? "Delivered" : "Pending" }}</td>
        </tr>
        <tr>
          <td>
            <v-pagination v-model="page" :length="maxRows"></v-pagination>
          </td>
          <td>
            <label style="margin-right:10px">Rows Per Page</label>
            <select
              v-model="rowsPerPage"
              style="border:solid;border-width:0.1px;width:100px;padding:10px"
              ><option value="5">5</option
              ><option value="10">10</option
              ><option value="20">20</option
              ><option value="25">25</option
              ><option value="50">50</option
              ><option value="100">100</option></select
            >
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div></template
>

<script>
import axios from "axios";
export default {
  data() {
    return {
      search: null,
      filterBy: null,
      page: 1,
      rowsPerPage: 100,
      sortBy: "id",
      descending: false,
      resp: null,
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      maxRows: null,
    };
  },
  async created() {
    await this.getData();
  },
  watch: {
    async page(val) {
      this.page = val;
      await this.getData();
    },
    async search(val) {
      this.search = val;
      await this.getData();
    },
    async sortBy(val) {
      this.sortBy = val;
      await this.getData();
    },
    async rowsPerPage(val) {
      this.rowsPerPage = val;
      await this.getData();
    },
  },
  methods: {
    async getData() {
      let config = {
        method: "POST",
        url: "https://api.matrixbox.in/admin/package/list",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          Accept: "*/*",
          Authorization: this.$store.state.user.token,
        },
        data: {
          search: this.search,
          filterBy: this.filterBy,
          pagination: {
            page: this.page,
            rowsPerPage: this.rowsPerPage,
            sortBy: this.sortBy,
            descending: this.descending,
          },
        },
      };
      let resp = await axios(config).catch((err) => (this.resp = err));
      this.resp = resp.data.data;
      this.maxRows = Math.ceil(
        resp.data.pagination.rowsNumber / this.rowsPerPage
      );
    },
  },
};
</script>

<style></style>

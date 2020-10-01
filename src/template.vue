<template>
  <v-container fluid>
    <v-row>
      <slot>
        <v-col md="8" sm="12" order="first" order-md="last">
          <slot name="mainpanel"  />
        </v-col>
        <v-col md="4" sm="12" order="last" order-md="first">
          <slot name="subpanel" />
        </v-col>
      </slot>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'screen-template',
  data() {
    return {

    };
  }
}
</script>
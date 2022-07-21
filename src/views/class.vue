<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card elevation="1">
          <v-toolbar dark color="primary">
            <v-toolbar-title class="font-subtitle">취운화 꽃수업</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSe8K8VaASjC06K-XzoHnyThwNtBD05n7dm6C3z52KA0T2I54Q/viewform?embedded=true" 
              scrolling="no"
              width="100%"
              height="3880"
              frameborder="0" 
              marginwidth="8"
              marginheight="8">
                잠시만 기다려주세요. 불러오고 있습니다...
            </iframe>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
 
<script>
export default {
    path: 'class',
    name: 'class',
    routeTitle: '수업',
    data() {
        return {
            
        }
    }
}
</script>
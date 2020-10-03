<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card elevation="1">
          <v-toolbar dark color="primary">
            <v-toolbar-title>무슨무슨 수업</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
              <v-icon>mdi-calendar</v-icon>
              <v-btn text readonly>신청 기간 2020-09-10 ~ 10-31</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdICDW7Fx28Zp0PzDeNVObgOBQwUHbdHYhgHIdybLS7G_jQ9A/viewform?embedded=true" 
              width="100%" frameborder="0" marginheight="0" marginwidth="0" style="min-height: 65vh;">
                양식을 불러오고 있습니다...
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
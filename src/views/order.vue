<template>
  <base-screen>
    <v-card>
      <div align="center" justify="center">
        <img src="/logo.round.png" />
      </div>
      <v-card-text>
        취운화의 주문은 카카오 채널에서
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn target="_blank" href="https://pf.kakao.com/_KYqDT/friend">채널 추가</v-btn>
        <v-spacer />
        <v-btn target="_blank" href="https://pf.kakao.com/_KYqDT/chat">주문 상담</v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </base-screen>
</template>
 
<script>
export default {
    path: 'order',
    name: 'order',
    routeTitle: '주문',
    data() {
        return {
            
        }
    }
}
</script>
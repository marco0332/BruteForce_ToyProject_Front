<template>
  <div>
    <v-layout id="DesktopNav">
      <DesktopNav></DesktopNav>
    </v-layout>

    <v-layout id="MobileNav">
      <MobileNav></MobileNav>
    </v-layout>
  </div>
</template>

<script>
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default {
  name: 'Nav',
  components: {
    MobileNav,
    DesktopNav
  }
}
</script>

<style scoped>
#DesktopNav {
  position: fixed;
  width: 100vw;
  height: 64px;
  z-index: 1;
}
#MobileNav {
  position: fixed;
  width: 100vw;
  height: 64px;
  z-index: 1;
}
@media (max-width: 800px) {
  #DesktopNav{
    display: none;
  }
}
@media (min-width: 800px) {
  #MobileNav {
    display: none;
  }
}
</style>

<template>
  <div
    class="leading-normal tracking-normal text-white gradient"
    style="font-family: 'Source Sans Pro', sans-serif"
  >
    <MainNav />
    <hero />
    <SectionFirst></SectionFirst>
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
import MainNav from '~/components/MainNav'
import Hero from '~/components/Hero'
import SectionFirst from '~/components/SectionFirst'
import CallToAction from '~/components/CallToAction'
import Footer from '~/components/Footer'
export default {
  components: {
    Hero,
    MainNav,
    SectionFirst,
    CallToAction,
    Footer,
  },
  asyncData() {
    return {
      open: false,
    }
  },
}
</script>

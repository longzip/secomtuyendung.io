<template>
  <div
    class="leading-normal tracking-normal text-white gradient"
    style="font-family: 'Source Sans Pro', sans-serif"
  >
    <main-nav />
    <hero />
    <section-first></section-first>
    <!-- <section-second></section-second> -->
    <!-- <Pricing /> -->
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
import MainNav from '~/components/MainNav'
import Hero from '~/components/Hero'
import SectionFirst from '~/components/SectionFirst'
import SectionSecond from '~/components/SectionSecond'
import Pricing from '~/components/Pricing'
import CallToAction from '~/components/CallToAction'
import Footer from '~/components/Footer'
const navigation = [
  { name: 'Tuyển dụng', href: '#' },
  { name: 'Hướng đẫn', href: '#' },
  { name: 'Liên hệ', href: '#' },
]
export default {
  components: {
    Hero,
    MainNav,
    SectionFirst,
    SectionSecond,
    Pricing,
    CallToAction,
    Footer,
  },
  asyncData() {
    return {
      open: false,
      navigation,
    }
  },
}
</script>

<script setup lang="ts">
import { footerData, seoData } from '~/data'
</script>

<template>
  <div>
    <p class="text-black dark:text-zinc-300 text-base font-semibold">联系我</p>
    <p class="dark:text-zinc-300">
      {{ footerData.authorInterest }}
    </p>

    <a
      :href="`mailto: ${seoData.mailAddress}`"
      class="block text-center w-full bg-sky-700 p-2 rounded-lg text-[#F1F2F4] mt-3 text-sm"
    >
      发送邮件
    </a>
  </div>
</template>

<template>
  <div id="careerperks-section" class="tw-bg-purple-bg10 tw-px-4 sm:tw-px-12 tw-pt-24 lg:tw-pt-32">
    <div class="container">
      <h3
        class="tw-max-w-[52rem] tw-text-white tw-text-center tw-text-2xl tw-leading-loose md:tw-text-3xl md:tw-leading-loose lg:tw-text-4xl lg:tw-leading-[5rem] tw-mx-auto"
      >
        Beyond a competitive salary, we offer so much more in support and necessary tools needed to
        get the best results.
      </h3>
      <div class="tw-mt-20 md:tw-mt-32">
        <h3
          class="slanted-text tw-text-white tw-text-center tw-font-bold tw-text-2xl md:tw-text-5xl"
        >
          Perks
        </h3>
        <div
          class="perks md:tw-grid md:tw-grid-cols-2 xl:tw-grid-cols-3 md:tw-gap-8 tw-px-4 lg:tw-px-28 tw-pt-12 tw-pb-8 md:tw-pt-16 md:tw-pb-12 xl:tw-pt-40"
        >
          <div class="tw-mb-8 md:tw-mb-4">
            <img class="tw-mb-2" src="@/assets/img/perk1.svg" loading="lazy" alt="profile" />
            <h3 class="tw-font-bold tw-text-purle-bg1 tw-text-sm tw-mb-2">Its a vibe</h3>
            <p class="tw-text-purple-bg1 tw-max-w-xs tw-text-xs tw-leading-[1.8rem]">
              Our work culture is a vibe and more.
            </p>
          </div>
          <div class="tw-mb-8 md:tw-mb-4">
            <img class="tw-mb-2" src="@/assets/img/perk2.svg" loading="lazy" alt="profile" />
            <h3 class="tw-font-bold tw-text-purle-bg1 tw-text-sm tw-mb-2">Cool gadgets</h3>
            <p class="tw-text-purple-bg1 tw-max-w-xs tw-text-xs tw-leading-[1.8rem]">
              You get to work with cool new gadgets.
            </p>
          </div>
          <div class="tw-mb-8 md:tw-mb-4">
            <img class="tw-mb-2" src="@/assets/img/perk3.svg" loading="lazy" alt="profile" />
            <h3 class="tw-font-bold tw-text-purle-bg1 tw-text-sm tw-mb-2">Health benefits</h3>
            <p class="tw-text-purple-bg1 tw-max-w-xs tw-text-xs tw-leading-[1.8rem]">
              We know health is important. So we provided easy access and affordable health
              benefits.
            </p>
          </div>
          <div class="tw-mb-8 md:tw-mb-4">
            <img class="tw-mb-2" src="@/assets/img/perk4.svg" loading="lazy" alt="profile" />
            <h3 class="tw-font-bold tw-text-purle-bg1 tw-text-sm tw-mb-2">Team Bounding</h3>
            <p class="tw-text-purple-bg1 tw-max-w-xs tw-text-xs tw-leading-[1.8rem]">
              We always make out time for fun and getting to know your team mates better.
            </p>
          </div>
          <div class="tw-mb-8 md:tw-mb-4">
            <img class="tw-mb-2" src="@/assets/img/perk5.svg" loading="lazy" alt="profile" />
            <h3 class="tw-font-bold tw-text-purle-bg1 tw-text-sm tw-mb-2">Diversity</h3>
            <p class="tw-text-purple-bg1 tw-max-w-xs tw-text-xs tw-leading-[1.8rem]">
              We promote diversity of ideas and people. Anyone from anywhere is welcome.
            </p>
          </div>
          <div class="tw-mb-8 md:tw-mb-4">
            <img class="tw-mb-2" src="@/assets/img/perk6.svg" loading="lazy" alt="profile" />
            <h3 class="tw-font-bold tw-text-purle-bg1 tw-text-sm tw-mb-2">
              Education and career progression
            </h3>
            <p class="tw-text-purple-bg1 tw-max-w-xs tw-text-xs tw-leading-[1.8rem]">
              We offer you opportunities to grow, learn, and advance in your career.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#careerperks-section {
  .container {
    @media (min-width: 1024px) {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .slanted-text {
      transform: rotate(6deg) skew(6deg);
    }

    .perks {
      background: url(@/assets/img/perks.svg);
      background-position: center;
      background-clip: border-box;
      background-repeat: no-repeat;
      background-size: 2500px 2500px;

      @media (min-width: 768px) {
        background-size: 1500px 1500px;
      }

      @media (min-width: 1280px) {
        background-size: 1200px 1200px;
      }
    }
  }
}
</style>

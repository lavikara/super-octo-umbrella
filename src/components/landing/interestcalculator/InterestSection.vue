<template>
  <div id="interest-section" class="tw-bg-white tw-px-8 sm:tw-px-12 tw-py-24 lg:tw-py-32">
    <div class="container">
      <h3
        class="tw-text-purple-bg1 tw-max-w-[18rem] sm:tw-max-w-xl lg:tw-max-w-4xl tw-font-bold tw-text-3xl tw-leading-normal md:tw-text-4xl md:tw-leading-normal lg:tw-text-5xl lg:tw-leading-normal xl:tw-text-4xl"
      >
        Interest you can count on
      </h3>
      <div
        class="md:tw-grid md:tw-grid-cols-2 tw-gap-4 lg:tw-gap-8 tw-justify-items-center tw-mt-20"
      >
        <div class="timeline-container tw-mb-20 md:tw-mb-0">
          <div class="timeline-list">
            <ul class="timeline-content">
              <li class="content">
                <h3 class="tw-text-purple-bg1 tw-font-bold tw-text-xl tw-mb-4">More Interest</h3>
                <p class="tw-max-w-lg tw-text-sm tw-leading-9 tw-text-bg1">
                  Enjoy better interest rates than the average bank account when you save with any
                  of the Ardilla savings plan.
                </p>
              </li>
            </ul>
            <ul class="timeline-content">
              <li class="content">
                <h3 class="tw-text-purple-bg1 tw-font-bold tw-text-xl tw-mb-4">Transparency</h3>
                <p class="tw-max-w-lg tw-text-sm tw-leading-9 tw-text-bg1">
                  Enjoy better interest rates than the average bank account when you save with any
                  of the Ardilla savings plan.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="timeline-container">
          <div class="timeline-list">
            <ul class="timeline-content">
              <li class="content">
                <h3 class="tw-text-purple-bg1 tw-font-bold tw-text-xl tw-mb-4">Values</h3>
                <p class="tw-max-w-lg tw-text-sm tw-leading-9 tw-text-bg1">
                  Enjoy better interest rates than the average bank account when you save with any
                  of the Ardilla savings plan.
                </p>
              </li>
            </ul>
            <ul class="timeline-content">
              <li class="content">
                <h3 class="tw-text-purple-bg1 tw-font-bold tw-text-xl tw-mb-4">
                  Complete Withdraws
                </h3>
                <p class="tw-max-w-lg tw-text-sm tw-leading-9 tw-text-bg1">
                  Enjoy better interest rates than the average bank account when you save with any
                  of the Ardilla savings plan.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#interest-section {
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

    .timeline-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      &:before {
        content: '';
        position: absolute;
        top: 10px;
        left: 0;
        transform: translateX(-50%);
        width: 2px;
        height: 60%;
        background-color: #8807f7;
        margin-left: -1.15rem;

        @media screen and (min-width: 560px) {
          content: none;
        }
        @media screen and (min-width: 768px) {
          content: '';
        }
      }

      .timeline-list {
        list-style-type: none;

        .timeline-content {
          position: relative;
          padding: 0px 0px 50px 0px;

          &:last-child {
            padding-bottom: 0;
          }

          &:nth-child(even):before {
            content: '';
            position: absolute;
            width: 12px;
            height: 12px;
            background-color: #8807f7;
            border-radius: 50%;
            left: 0;
            top: 0.6rem;
            transition: 0.5s;
            margin-left: -1.5rem;
          }

          &:nth-child(odd):before {
            content: '';
            position: absolute;
            width: 12px;
            height: 12px;
            background-color: #8807f7;
            border-radius: 50%;
            left: 0;
            top: 0.6rem;
            transition: 0.5s;
            margin-left: -1.5rem;
          }

          &:hover:before {
            box-shadow: 0px 0px 5px 2px #240053;
          }

          &:nth-child(even) {
            float: right;
            text-align: left;
            clear: both;
          }

          &:nth-child(odd) {
            float: left;
            text-align: left;
            clear: both;
          }
        }
      }
    }
  }
}
</style>

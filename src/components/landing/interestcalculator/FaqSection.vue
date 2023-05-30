<template>
  <div id="faq-section" class="tw-bg-white tw-px-4 sm:tw-px-12 tw-pb-72">
    <div class="container">
      <h3
        class="tw-text-purple-bg1 tw-font-bold tw-text-3xl tw-leading-normal md:tw-text-4xl md:tw-leading-normal lg:tw-text-5xl lg:tw-leading-normal xl:tw-text-4xl"
      >
        Questions We Have been Asked
      </h3>
      <div class="tw-flex tw-justify-center tw-mt-20 lg:tw-mt-32">
        <ul>
          <li v-for="(question, index) in accountQuestions" :key="'item' + index">
            <div class="questions">
              <div
                @click="question.open = !question.open"
                class="question tw-bg-gray-bg7 tw-rounded-xl tw-p-4"
              >
                <h3
                  class="tw-text-purple-bg2 tw-text-sm tw-leading-loose lg:tw-text-base lg:tw-leading-loose"
                >
                  {{ question.question }}
                </h3>
                <img
                  src="@/assets/img/add.svg"
                  loading="lazy"
                  alt="cleaning trolly image"
                  :class="{ open: question.open }"
                />
              </div>
              <div class="space"></div>
              <div class="space"></div>
              <transition name="dropdown" @enter="enter" @after-enter="afterEnter" @leave="leave">
                <p
                  class="answer tw-text-base tw-leading-loose tw-px-4 md:tw-px-8 lg:tw-px-12"
                  v-html="question.answer"
                  v-show="question.open"
                ></p>
              </transition>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const accountQuestions = reactive([
  {
    open: false,
    question: 'What are your interest rates?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    open: false,
    question: 'What happens to my interest when i switch to Halal?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
  },
  {
    open: false,
    question: 'What is the minimum interest rate I am entitled to?',
    answer:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
  },
  {
    open: false,
    question: 'What is Ardilla',
    answer:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
  },
  {
    open: false,
    question: 'What is Ardilla',
    answer:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur'
  }
])

const enter = (element) => {
  element.style.height = 'auto'
  let height = getComputedStyle(element).height
  element.style.height = 0
  getComputedStyle(element)
  setTimeout(() => {
    element.style.height = height
  })
}
const afterEnter = (element) => {
  element.style.height = 'auto'
}
const leave = (element) => {
  element.style.height = getComputedStyle(element).height
  getComputedStyle(element)
  setTimeout(() => {
    element.style.height = 0
  })
}
</script>

<style lang="scss" scoped>
#faq-section {
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

    ul {
      width: 100%;
      li {
        margin-bottom: 1.9rem;
        transition: all 0.5s ease-in-out;

        .questions {
          .question {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;

            img {
              transition: transform 0.5s ease;

              &.open {
                transform: rotateZ(45deg);
              }
            }
          }

          .space {
            height: 1px;
            margin-top: 0.5rem;
          }

          .answer {
            transition: all 0.5s ease-in-out;
          }
          .dropdown-enter-active,
          .dropdown-leave-active {
            transition: height 0.5s ease-in-out;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>

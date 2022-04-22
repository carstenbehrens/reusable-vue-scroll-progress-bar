import {mount} from '@cypress/vue'
import ScrollProgressBar from './ScrollProgressBar.vue'

describe('#ScrollProgressBar', () => {
  describe('Default', () => {
    const wrapper = {
      template: `
        <div>
        <scroll-progress-bar/>
        <h1>Testing ScrollProgressBar</h1>
        <div style="height: 200vh"></div>
        </div>
      `,
      components: {ScrollProgressBar}
    }

    it('Width should be 50% when scrolled to center', () => {
      mount(wrapper)
      cy.scrollTo('center')
        .get('[data-testid="scroll-progress-bar"]')
        .should('have.attr', 'style', 'width: 50%;')
    })

    it('Width should be 100% when scrolled to bottom', () => {
      mount(wrapper)
      cy.scrollTo('bottom')
        .get('[data-testid="scroll-progress-bar"]')
        .should('have.attr', 'style', 'width: 100%;')
    })
  })

  describe('Custom', () => {
    const wrapper = {
      template: `
        <div>
        <scroll-progress-bar v-slot="{width}">
          <div :width="width" style="background: salmon; display: flex; justify-content: center">{{width}}</div>
        </scroll-progress-bar>
        <h1>Testing ScrollProgressBar</h1>
        <div style="height: 200vh"></div>
        </div>
      `,
      components: {ScrollProgressBar}
    }

    it('Width should be 50% when scrolled to center', () => {
      mount(wrapper)
      cy.scrollTo('center')
        .get('[data-testid="scroll-progress-bar"]')
        .should('have.attr', 'style', 'width: 50%;')
    })

    it('Width should be 100% when scrolled to bottom', () => {
      mount(wrapper)
      cy.scrollTo('bottom')
        .get('[data-testid="scroll-progress-bar"]')
        .should('have.attr', 'style', 'width: 100%;')
    })
  })
})

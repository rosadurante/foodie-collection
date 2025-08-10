import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FoodieList from '../FoodieList.vue'

describe('FoodieList', () => {
  it('renders properly', () => {
    const wrapper = mount(FoodieList)
    expect(wrapper.text()).toContain('')
  })
})

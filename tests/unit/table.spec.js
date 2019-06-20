import { mount } from '@vue/test-utils'
import NhsTable from '../../src/components/table'

describe('table tests', () => {
  it('test table default props', () => {
    const wrapper = mount(NhsTable, {
      propsData: {
        heading: 'heading',
        panel: true,
        head: [],
        rows: []
      }
    })

    expect(wrapper.contains('h3')).toBe(true)
  })

  it('test table props', () => {
    const wrapper = mount(NhsTable, {
      propsData: {
        head: [
          {
            text: 'Test',
            key: 'test'
          }
        ],
        rows: [
          {
            test: 'cheese',
            test2: 'cheese2'
          }
        ],
        panel: true,
        heading: 'heading',
        headingLevel: 1,
        caption: 'caption',
        panelAttributes: {
          paneltest: 'test'
        },
        tableAttributes: {
          tabletest: 'test'
        },
        captionAttributes: {
          captiontest: 'test'
        }
      }
    })

    expect(wrapper.attributes().paneltest).toBe('test')
    expect(wrapper.find('h1').text()).toBe('heading')
    expect(wrapper.find('.nhsuk-table__caption').attributes().captiontest).toBe('test')
    expect(wrapper.find('.nhsuk-table__caption').text()).toBe('caption')
    expect(wrapper.find('.nhsuk-table').attributes().tabletest).toBe('test')
    const heads = wrapper.findAll('.nhsuk-table__header')
    expect(heads.length).toBe(1)
    expect(heads.at(0).text()).toBe('Test')
    const cells = wrapper.findAll('.nhsuk-table__cell')
    expect(cells.length).toBe(1)
    expect(cells.at(0).text()).toBe('cheese')
  })
})
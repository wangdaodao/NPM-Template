import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/hello-world.vue'

describe('<hello-world/>', () => {
  test('should render correct contents', () => {
    // 渲染这个组件
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.find('h1').text())
      .toEqual('Hello Jest');
  });
});

describe('<hello-world/>', () => {
  test('renders msg contents', () => {
    // 渲染这个组件
    const wrapper = shallowMount(HelloWorld, {
      data() {
        return {
          msg: 'Hello World',
        }
      }
    });
    expect(wrapper.find('h1').text()).toEqual('Hello World')
  });
});

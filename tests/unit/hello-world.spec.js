import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/hello-world.vue'

describe('<hello-world/>', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.find('h1').text())
      .toEqual('Hello Jest');
  });
});

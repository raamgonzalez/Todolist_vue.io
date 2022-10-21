import { test, vi, describe, expect} from 'vitest';
import {computed, ref} from 'vue'
import  HomeView  from '../views/HomeView.vue';
import { mount} from '@vue/test-utils';
import * as todosSetup from '../todosSetup';

const setupMock = {
	todosIncompleted: computed(() => []),
	todosCompleted: computed(() => []),
	toggle: vi.fn(),
	deleteTodo: vi.fn(),
	add: vi.fn(),
	update: vi.fn(),
};

describe('Mis primeros test', () => {

	test('Testeando componente', () => {
		const wrapper = mount(HomeView);

		expect(wrapper.text()).toContain('Todo list');
	});

	test('List is empty', () => {
		const spy = vi.spyOn(todosSetup, 'todosFactory').mockReturnValue({
			...setupMock
		});
		const wrapper = mount(HomeView);

		expect(wrapper.text()).toContain('Todo list');
		expect(wrapper.text()).toContain('Nothing todo');
	});
});
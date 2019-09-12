import AppHome from '@/components/AppHome';

const routes = [
	{
		path: '/:id',
		component: AppHome
	},
	{
		path: '*',
		redirect: '/1'
	}
];

export default routes;
